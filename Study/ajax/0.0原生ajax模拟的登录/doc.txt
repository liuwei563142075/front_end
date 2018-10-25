B/S : broswer和server 即浏览器和server
C/S : client和server 即客户端（QQ,网易云）和server

同步和异步：看老师文档第一天
同步：彼此等待-- 阻塞
异步：各做各的-- 非阻塞

页面加载的同步与异步（白屏与不刷新）
普通的页面效果：w3school.org
页面不刷新效果：评论加载



原生ajax说明：
1.原生的ajax程序并不是按照程序的书写顺序执行的，只有调用send方法后ajax才会去请求后台获取
数据，然后在执行回调函数。
2.状态说明：xhr.readyState == 4代表这件事执行完成，xhr.status = 200代表这件事执行的结果是否
成功。
3.异步说明：程序先alert2而不是alert1，主线程并没有去等待ajax执行完毕再去执行，而是继续执行
等到ajax执行完反馈回来后才去执行ajax的回调函数。
3.使用webstrom是不行的，它并没有内置的php解析器，无法识别php，不能讲php返回内容渲染到
浏览器，试验在D:\Appserv\www\ajax_test目录下,或运行test.html