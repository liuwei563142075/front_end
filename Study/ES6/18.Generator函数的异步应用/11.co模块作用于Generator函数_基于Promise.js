// co模块是用于Gererator函数的自动执行。

//ex:

var fs = require('fs');
var co = require('co');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName,function (err, data) {
            if(err) return reject(err);
            resolve(data);
        });
    })
}

var gen =  function* () {
    var f1 = yield readFile('./node_modules/thunkify/package.json');
    var f2 = yield readFile('./node_modules/thunkify/Readme.md');
    console.log(f1.toString());
    console.log(f2.toString());
}

/*co 模块其实就是将两种自动执行器（Thunk 函数和 Promise 对象），包装成一个模块。
使用 co 的前提条件是，Generator 函数的yield命令后面，
只能是 Thunk 函数或 Promise 对象。如果数组或对象的成员，
全部都是 Promise 对象，也可以使用 co*/
co(gen);