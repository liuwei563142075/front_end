/*
* 任何一个await语句后面的 Promise 对象变为reject状态，
* 那么整个async函数都会中断执行。
* */
async function foo1() {
    await Promise.reject('foo1 出错了！');
    await Promise.resolve('foo1 Hello World'); // 不会执行
}
foo1().then(v=>console.log("v:",v)).catch(e=>console.log("e:",e))




// 使用try catch块捕获异常，不让异步操作中断
async function foo2() {
    try {
        await Promise.reject('foo2 出错了！');
    }catch (e) {
        console.log("foo2:",e);
    }
    // await Promise.resolve('Hello World'); // 不使用return，将会输出undefiend
    return await Promise.resolve('foo2 Hello World'); // 不会执行
}
foo2()
    .then(v=>console.log("v:",v),re=>console.log(re))
    .catch(e=>console.log("e:",e))


// 或者时在await后面追加catch
async function foo3() {
    await Promise.reject('foo3出错了！').catch(e=>console.log(e))
    return await Promise.resolve('foo3 Hello World'); // 不会执行
}
foo3()
    .then(v=>console.log("v:",v))