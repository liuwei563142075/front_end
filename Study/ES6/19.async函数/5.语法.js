/*
1.返回Promise对象
2.async函数内部return语句返回的值，会成为then方法的回调函数的参数
*/

/*async function f1() {
    return 'hello world';
}
f1().then(v => console.log(v));*/


/*
* async函数内部抛出错误，会导致返回的Promise对象
* 变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
*
* */

async function f2() {
    throw new Error('出错了！')
}
f2().then(
    v => console.log(v),
    e => console.log(e)
);




