    const fs = require('fs');
    var readFile = function (fileName) {
        return new Promise(function (resolve, reject) {
            fs.readFile(fileName,function (err, data) {
                if(err) return reject(err);
                return resolve(data);
            })
        })
    }
    // 上面代码可以写成async函数
    const asyncgen = async function () {
        const f1 = await readFile('./node_modules/fs/package.json')
        const f2 = await readFile('./node_modules/fs/Readme.md')
        console.log(f1.toString());
        console.log(f2.toString());
    }



    // 1.内置执行器
    /*
    * Generator函数的执行必须靠执行器，所以才有了co模块，
    * 而async函数自带执行器。也就是说，async函数的执行，
    * 与普通函数执行一样，只需要一行asyncgen()
    * */
    asyncgen(); // 不在像Generator函数那样，使用next方法或co模块去执行

    // 2.更好的语义：
    /*
    * async和await，比起星号和yield，语义更清楚了。
    * async表示函数里有异步操作，await表示紧跟在后
    * 面的表达式需要等待结果。
    * */

    // 3.更广的适用性。
    /*
    * co模块约定，yield命令后面只能是 Thunk 函数
    * 或 Promise 对象，而async函数的await命令后面，
    * 可以是 Promise 对象和原始类型的值（数值、字
    * 符串和布尔值，但这时会自动转成立即 resolved
    * 的 Promise 对象）。
    *
    * */

    // 返回值是Promise对象
    /*
    * 对象方便多了。你可以用then方法指定下一步的操作。
    * 进一步说，async函数完全可以看作多个异步操作，
    * 包装成的一个 Promise 对象，
    * 【而await命令就是内部then命令的语法糖。】
    *
    * */