// for ... of循环用于遍历同步的Iterator接口。新引入的
// for await...of循环，则是用于遍历异步的Iterator接口

async function f() {
    for await (const x of createAsyncIterable(['a','b'])) {
        console.log(x);
    }
}