var $$ = {
    // 将一个对象的属性拷贝到另一个对象
    extend:function (tar, source) {
        // 遍历对象
        for(var i in source) {
            tar[i] = source[i];
        }
        return tar;
    }
}

var Person = {
    name:'毛毛',
    age:25,
    sex:'男'
}
var Anmial = {
    name:'taidi',
    type:'dog',
    age:2
}

var pa = $$.extend(Person,Anmial);
console.log(pa);
// { name: 'taidi', age: 2, sex: '男', type: 'dog' }

// 重名的被替换