// 1.安装Thunkify模块:cnpm install thunkify
(function () {
    var thunkify = require('thunkify');
    var fs = require('fs');

    var read = thunkify(fs.readFile);
    read('node_modules/thunkify/package.json')(function(err,str){
        //...
        if (err) {
            throw Error('Error');
        }
        console.log('测试：',str);
    })
})()