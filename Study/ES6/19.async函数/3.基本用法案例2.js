async function asyncPrint(value, ms) {
    await new Promise((resolve)=> {
        setTimeout(resolve,ms);
    });
    console.log(value);
}

asyncPrint('这是一个异步的',200);