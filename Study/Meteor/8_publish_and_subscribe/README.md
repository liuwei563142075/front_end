###Meteor使用用户登陆模块
###启用临时UI
meteor add reactive-dict
###启用用户登陆注册
meteor add accounts-ui accounts-password
###删除项目初始化时的赋予用户的任何权限-【安全性】
meteor remove insecure
###删除自动发布-【安全性】
meteor remove autopublish

###模板tasks.html
        {{#if isOwner}}
            <button class="delete">&times;</button>
        {{/if}}
isOwner是tasks.html的渲染器上的一个方法。模板可以直接调用渲染器上的方法。

你要了解这个task.html和task.js的关系，其实就相当于在task.html中写js,现
在只不过是把task.html的js提取出来了而已。
现在ui/task.js在渲染task.html,而api/task.js则相当于java中的实体类task

我们来看ui\task.js中代码：
    Template.task.events({})
我的理解是：
    1.项目在启动时会扫描所有包，查找<template name="task">,找到后，将其
作为一个对象(task)注册到Template对象【全局对象】内。
    2.所以你在ui\task.js中可以使用Template.task获取这个task对象。获取到
这个对象后你既可以为其注册事件也可以为其注册方法。这里的注册事件最终还是为
模板里的dom元素注册事件。
    3.注册事件：Template.task.events({})
    4.注册方法：Template.task.helpers({}),模板渲染器里面注册的方法
在模板中可以直接拿过来使用。

下面我们在来看一下api\task.js，在我眼中其实这就是一个service类而已。或者你
可以说他是一个封装了实体类task的service，简称taskService。
因为毕竟这不像java那样分割的那么明细。这里仿佛没有实体类的概念，有的仅仅
只有一个mongoDB【一个存储着实体类的数据库】。
    Meteor.methods({})
类比于Template,貌似Meteor也是一个全局变量，不过貌似这个全局变量是用来
封装所有service的。
在这个Meteor对象的method里注册了一些有关task的行为。而且：
    'tasks.insert'(text) {},
冒失tasks.insert仅仅是以一个方法名成而已，为什么要用字符串呢？可能是为了更清晰
的表述，或者死皮赖脸的想往面向对象上贴吧。这个方法名是可以随意写的【不知道能不能
重复】，不过你调用的时候要保存一致才行。

订阅--》发布
看过整个代码实现过程，订阅-发布到底充当着一个什么样的角色？对于前后台逻辑来说，
订阅是属于前台的，发布是属于后台的。订阅只能看到已经发布的信息，别人没发布的信
息是看不到的。
我们看代码分析：
    if (Meteor.isServer) {
      // This code only runs on the server
      Meteor.publish('tasks', function tasksPublication() {
        // where private != true or owner == this.userId
        return Tasks.find({
                    $or:[
                        { private : {$ne:true} },
                        { owner : this.userId },
                    ]
                });
      });
    }
服务器上注册并发布了一个tasks消息【类似于公众号吧】,这个tasks消息里到底有
哪些内容？在回调函数里，将要发布的内容查询处来作为消息内容，然后发布出去。
现在消息是发布出去了，你订阅不订阅是你自己的事情，你订阅了你就能看这条消息，你
没订阅就看不到。所以接下来我们要在前台去订阅这个公众号了：

        // 在模板创建的时候订阅内容
        Template.body.onCreated(function bodyOnCreated() {
            this.state = new ReactiveDict();
            // 订阅公众号
            Meteor.subscribe('tasks');
        });

这样前台就能看到公众号里推送的内容啦！当然这里理解为公众号是很不合理的，它代表
的东西更加广泛，作为控制前后台数据传输安全性工具来说，它的添加可以保证数据的私有性。