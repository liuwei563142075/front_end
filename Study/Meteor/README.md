集合是Meteor存储持久数据的方式。Meteor中关于集合的特殊之处在于它们
可以从服务器和客户端访问，从而可以轻松编写视图逻辑而无需编写大量服务
器代码。它们还会自动更新，因此由集合支持的视图组件将自动显示最新数据。

创建新集合就像调用
MyCollection = new Mongo.Collection("my-collection");
JavaScript 一样简单。在服务器上，这将设置一个名为MongoDB的集
合my-collection; 在客户端上，这将创建连接到服务器集合的缓存。
我们将在步骤12中了解有关客户端/服务器划分的更多信息，但是现在我们
可以编写代码，假设客户端上存在整个数据库。

client:
    所有的文件都是为了页面
    -main.js将渲染过的子模块引入到主模块上

server:
    所有的文件都是为了服务页面

import:
    页面的子模块
        -ul
            -body.html定义子模块模板
            -body.js拿到子模块模板，渲染子模块
        -api
            -task.js创建了一个集合对象


三部：
    1.创建任务集合
    2.在服务器上加载任务集合
    3.从任务集合加载任务

在应用程序下键入：启动mongoDB命令行
    meteor mongo
创建集合并插入一条数据：
db.tasks.insert({ text: "Hello world!", createdAt: new Date() });