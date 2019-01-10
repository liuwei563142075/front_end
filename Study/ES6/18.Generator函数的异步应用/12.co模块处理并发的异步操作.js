// co支持并发的异步操作，即允许某些操作同时进行，
// 等他们全部完成，才进行下一步。
// 这时，要把并发的操作都放在数组或对象里面，跟在yield语句后面

//ex:
var co = require('co');

// 数组的写法
co(function* () {
    var res = yield [
        Promise.resolve(1),
        Promise.resolve(2)
    ];
    console.log(res);
}).catch();

// 对象写法：
co(function* () {
    var res = yield {
        1:Promise.resolve(3),
        2:Promise.resolve(4)
    };
    console.log(res);
}).catch();

