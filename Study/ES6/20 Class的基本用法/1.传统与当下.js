// 传统的方式去描述一个类：
function Point(x,y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function(){
    return 'x:'+this.x+' y:'+this.y;
}
var point = new Point(5,10);
console.log(point.toString());


// ES6引入了（Class）类的概念,作为对象的模板。
// 通过class关键字，可以定义类。
class Points {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return 'x:'+this.x+' y:'+this.y;
    }
}
//注意，定义“类”的方法的时候，前面不需要加上function这个关键字，
// 直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，
// 加了会报错。
var p = new Points(5,10);
console.log(p.toString());
// 等同于传统的写法
console.log(p.toString === Points.prototype.toString);



// Object.assign()方法可以一次性向类添加多个方法
Object.assign(Points.prototype,{
    toLong() {
        return this.x*10;
    },
    toMore() {
        return this.y*10;
    },
    getValue() {
        return this.x+this.y;
    }
});

// 与ES5的不同之处：ES6类的内部所有定义的方法，都是不可枚举的
// 但是用assign方法添加的类方法是可以枚举的
console.log(Object.keys(Points.prototype));
console.log(Object.keys(Point.prototype));
