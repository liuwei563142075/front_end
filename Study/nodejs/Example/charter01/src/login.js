var http = require('http');

http.createServer(function (request, response) {
    var requestUrl = request.url;
    switch (requestUrl) {
        case '/login':
            debugger;
            _login(request, response);
            break;
        case '/post':
            _post(request, response);
            break;
        default:
            response.writeHeader(404, {});
            response.end();
            break;
    }
}).listen(8888);

console.log('启动成功！监听端口8888');

function _login(request, response) {
    response.writeHeader(200, {'Content-Type': 'text/html'});
    response.write('<!DOCTYPE html>');
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('    <meta charset="UTF-8">');
    response.write('    <title>Title</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('    <form action="/post" method="post">');
    response.write('        <table border="1px">');
    response.write('            <tr>');
    response.write('                <td>姓名：</td>');
    response.write('                <td><input type="text" name="username"></td>');
    response.write('            </tr>');
    response.write('            <tr>');
    response.write('                <td>密码</td>');
    response.write('                <td><input type="text" name="password"></td>');
    response.write('            </tr>');
    response.write('            <tr>');
    response.write('                <td></td>');
    response.write('                <td><input type="submit"></td>');
    response.write('            </tr>');
    response.write('        </table>');
    response.write('    </form>');
    response.write('</body>');
    response.write('</html>');
    response.end();
}

// 解析request请求参数username='admin'&password='admin'为一个json对象的包
var querystring = require('querystring');

function _post(request, response) {
    var contentdata = '';
    request.on('data',function (part) { // on相当于jquery的on事件，data：数据传输事件，每次接收部分
        contentdata += part;
    });
    request.on('end',function () { // 数据传输完毕事件
        var obj = querystring.parse(contentdata);
        console.log(obj);
        if(obj.username == 'admin' && obj.password == 'admin') {
            response.writeHeader(200,{'Content-Type':'text/html','encoding':'utf-8'});
            response.end('<h1>登陆成功！</h1>');
        }else {
            response.writeHeader(404,{});
            response.end('<h1>登陆失败！</h1>');
        }
    });
}