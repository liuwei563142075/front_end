// 如果await后面的异步操作出错，那么等同于async函数返回的Promise对象被reject。
async function f() {
    await new Promise(function (resolve, reject) {
        throw new Error('出错了');
    });
}
f().then(v=>console.log(v)).catch(e=>console.log(e));


// 防止出错：try+catch