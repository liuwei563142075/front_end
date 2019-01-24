/*
* async函数返回的 Promise 对象，必须等到内部所
* 有await命令后面的 Promise 对象执行完，才会发
* 生状态改变，除非遇到return语句或者抛出错误。
* 也就是说，只有async函数内部的异步操作执行完，
* 才会执行then方法指定的回调函数。
*
* */

var fetch = require('node-fetch');

async function getTitle(url) {
    let response = await fetch(url);
    let html = await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(
    console.log
)

/*
* 上面代码中，函数getTitle内部有三个操作：抓取网页、取出文本、
* 匹配页面标题。只有这三个操作全部完成，才会执行then方法里面
* 的console.log。
* */