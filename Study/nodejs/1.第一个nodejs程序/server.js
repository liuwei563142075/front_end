var http = require('http');

http.createServer(function (request,response) {
    // 发送HTTP头部
    //HTTP状态值：200：OK
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/html'});

    //发送相应数据“Hello World”
    //response.end("<h1>Hello World</h1>");

    response.write('<h1>Hello World</h1>');
    response.end();
}).listen(8888);

//终端打印如下信息；
console.log('Server running at http://127.0.0.1:8888/')

// 在server.js所在目录启动终端：运行node main.js，即可启动服务器