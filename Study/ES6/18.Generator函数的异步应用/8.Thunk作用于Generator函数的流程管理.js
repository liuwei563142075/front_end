// Thunk函数可以作用于Generator函数的自动流程管理。
var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function* () {
    var r1 = yield readFileThunk('./node_modules/thunkify/package.json');
    console.log(r1.toString());
    var r2 = yield readFileThunk('./node_modules/thunkify/Readme.md');
    console.log(r2.toString());
}

// 手动执行：
var g = gen();
var r1 = g.next();
console.log(r1);
r1.value(function (err, data) {
    if(err) throw err;
    var r2 = g.next(data);
    r2.value(function (err, data) {
        if(err) throw err;
        g.next(data);
    })
})

// 请回看前面两个实例的语法方式：相当于：
/*
readFileThunk('./node_modules/thunkify/package.json')(function (err, data) {
    if(err) throw err;
    var r2 = g.next(data);
    r2.value(function (err, data) {
        if(err) throw err;
        g.next(data);
    })
})*/
