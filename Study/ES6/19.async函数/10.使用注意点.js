// 1.await后面的Promise对象运行结果可能是reject，
// 所以最好把await命令放在try catch块里

async function foo() {
    try {
        await doSomething();
    }catch (e) {
        console.log(e);
    }
}

// 另一种写法：
async function myFunction() {
    await doSomething().catch(function (err) {
        console.log(err);
    })
}

// 2.多个await命令后面的异步操作，如果不存在继发关系，
// 最好让他们同时触发。
async  function fee() {
    let fqw = await getFoo();
    let fkl = await getBar();
}
// 上面代码中，getFoo和getBar是两个独立的异步操作（即互不相互依赖），
// 被写成继发关系。这样耗时，因为getFoo完成以后，才会执行getBar，
// 完全可以让他们同时触发。

// 写法1
async function fpp() {
    let [fqw,fkl] = await Promise.all(getFoo(),getBar())
}
// 写法2
async function fko() {
    let fooPromise = getFoo();
    let barPromise = getBar();
    let foo = await fooPromise;
    let bar = await barPromise;
}


// 3.async函数可以保留运行时堆栈
const a = () => {
    b().then(()=>c())
}
//上面代码中，函数a内部运行了一个异步任务b()。
// 当b()运行的时候，函数a()不会中断，而是继续执行。
// 等到b()运行结束，可能a()早就运行结束了，b()所在的
// 上下文环境已经消失了。如果b()或c()报错，错误堆栈
// 将不包括a()

// 改成async函数
const b = async () => {
    await b();
    c();
}
//上面代码中，b()运行的时候，a()是暂停执行，
// 上下文环境都保存着。一旦b()或c()，错误堆
// 栈将包括a()。











function doSomething() {
    console.log(111);
}
function getFoo() {

}
function getBar() {

}