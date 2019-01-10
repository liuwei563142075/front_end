/*
* // 正常版本的readFile(是个多参数的版本)
    fs.readFile(filename,callback);

    // Thunk版本的readFile(单参数版本):经过转换器处理，变成了单参数函数，只接受回调函数作为参数。
    var Thunk = function (fileName) {
        return function (callback) {
            return fs.readFile(fileName,callback);
        };
    }
    var readFileThunk = Thunk(fileName);
    readFileThunk(callback);
* */


var fs = require('fs');
// Thunk转换器：ES5版本
var ThunkES5 = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return function (callback) {
            args.push(callback);
            return fn.apply(this,args);
        }
    }
}

// ES6版本：
const ThunkES6 = function (fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this,...args,callback);
        }
    }
}

// 使用上面的转换器，生成fs.readFile的Thunk函数。
var readFileThunk = ThunkES6(fs.readFile);
// 注意语法方式：Thunkify函数(callback函数)
readFileThunk('./5.Thunk函数.html')(function (data) {
    console.log('success?',data);
});