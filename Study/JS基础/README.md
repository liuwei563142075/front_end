1.个人对js事件、函数调用的理解（做鼠标展示的js）：
盒子的事件并不受其函数影响，函数只在第一次初始化时调用一
这次次，但调用并不会触发盒子的事件，也不会初始化盒子的事件，虽然不初始化，
但确确实实的盒子被绑定了这个事件。
接下来就是当盒子触发事件时：会直接进入这个函数里的事件处理程序，
函数的其他部分不会在执行。但在事件处理中，你可获得函数中某些已定义的变量或者函数的参数等。
这说明存在一个一个池，存储着函数内的其他块，而事件处理程序可以享用这些块。

2.获得焦点和失去焦点是两个事件
获得焦点：onfocus
失去焦点：onblur

3.做点击隐藏文字：
对input、button使用：border:0 none;去除input、button的外边框
outline:none去除外边框点击时出现的蓝色条线

4.js中的this指的是事件源，className指的是类名，
如果将className设置为wrong、right，所有的特效都是css控制的，先定义好样式，然后在通过className指定。
可以去表单判定里看看效果。

5.js事件是可以连写的：表示鼠标经过和鼠标点击都是一样的事件[案例：淘宝/仿淘宝输入框]
$("txt").onclick = $("txt").onmouseover = function() { ** }

6.oninput事件大部分浏览器支持，ie678不支持，ie678的该事件是onpropertychange[案例：淘宝/仿淘宝输入框]
都表示检测用户表单输入内容

7.cursor: text;鼠标经过时显示可输入光标

8.<label for="txt" id="lab">必败的国际大牌</label>  其中for中写的是某元素的id,当点击label时光标
自动跳到for中写的id身上

9.隔行变色小练习：奇数行是使用style.backgroundColor指定的，但是在鼠标的事件里就不能这样指定，
也不能使用lis[i]指定当前li颜色，因为lis[i]根本不在代表第i个li了【不在代表当前的li】，
注意：使用lis[i].style.backgroundColor="#eee";表示的是行内式权重最高，如果在鼠标的事件里也使
用行内式书写，那么就会把奇数行原有色给消除掉，在鼠标的事件里你根本获取不到当前i，也就没办法使用i来
判断奇偶数，所以这种方式是行不通的。鼠标事件只有使用内联式，给类添加或消除class，影响不了行内式。如果
想要层叠掉行内式加上!important，只是层叠，而不是清除。

10.使用document.getElementById("id").getElementsByTagName("input");获取某id下的所有input标签

11.星座运势或switch时可以看到 下拉菜单事件 是使用select的id触发onchage事件,而不是获取select下
的所有option去触发事件，自己不要想当然理解错了。老师是使用数组去替换界面中需要改变的内容。

12.2=="2"返回的是true，2==="2"返回false，数组的索引也可以使用字符数字。arr["2"]和arr[2]是的等价的。

13.你是怎么理解dom的？dom是一种描述文本的结构，它将文本结构描述成dom树的形式，文本中所有东西都是节点，
有根节点<html>，元素节点，文本节点，属性节点等等

14.getElementByClassName() 类名 有兼容性问题。getElementByTagName() 标签访问节点---
getElementByTagName("*")获取文档所有节点

15.childNodes获取的子节点（只有嫡系，第一代孩子，但包括换行！！！）【可以使用nodeType==1则为有元素的节点】，
children只包含有元素节点（只有嫡系，第一代孩子，不包括换行）【重要】

16.按钮不可以将按钮的disabled属性设置为disabled|true

17.定时器那些例子要多看多记，特别是优化的模块

18.页面跳转window.location.href="http....";

19.隐藏元素：display:none

20.总结一下：学了两个onchange事件的了，一个是下拉列表，一个就是选择文件

21.去除图像底部3像素空白：方法1：img{vertical-align:top}  方法2：img{display:block}

22. 做筋斗云学习：重新理解z-index 如果都没写，指的是写在后面的标签亚盖住写在前面的标签！！！！！

23.offset属性只读，不能修改

24.学会使用display:inline-block;使元素在一行显示【脱标】，但是有一个问题就是，
使用inline-block的元素之间有间距，去除间距的办法在父元素上加font-size:0;

25.使ul中的li居中也可以使用text-align:center