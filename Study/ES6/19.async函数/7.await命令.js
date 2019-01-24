/*
* 正常情况下，await命令后面是一个 Promise 对象，返
* 回该对象的结果。如果不是 Promise 对象，就直接
* 返回对应的值。
* */
/*async function f() {
    // await后面跟的是一个非Promise对象，则直接返回该值
    return await 123;
}
f().then(console.log);*/

/*
* 另一种情况是，await命令后面是一个thenable对象（
* 即定义then方法的对象），那么await会将其等同于
* Promise 对象。
* */

/*
class Sleep {
    constructor(timeout) {
        this.timeout = timeout;
    }

    then(resolve,reject) {
        const startTime = Date.new();
        setTimeout(
            () => resolve(Date.now() - startTime),
            this.timeout
        )
    }
}

( async => {
    const actualTime = await new Sleep(1000);
    console.log(actualTime);
})();
//上面代码中，await命令后面是一个Sleep对象的实例。
//这个实例不是 Promise 对象，但是因为定义了then方法，
//await会将其视为Promise处理。
*/

async function foo() {
    await Promise.reject('出错了');
}
foo()
    // 这样写是在then中接受异常，如果then中没有捕获异常，则会在catch模块里捕获
    .then(v => console.log("v:",v),r => console.log("r:",r))
    // 在catch中捕获
    // .then(v => console.log("v:",v))
    .catch(e => console.log("e:",e))
