var fetch = require('node-fetch');

function* gen() {
    var url = 'http://api.github.com/users/github';
    var result = yield fetch(url);
    console.log('异步请求结果：',result.bio);
}

var g = gen(); // 1. 获取遍历器对象
var result = g.next(); // 2.执行第一个next
result.value.then(function (data) {
    return data.json();
}).then(function (data) {
    g.next(data);
});