// 多态！！！
/**
 * (1).new是从构造函数生成实例对象的命令。ES6 为new命令引入
 * 了一个new.target属性，该属性一般用在构造函数之中，返
 * 回new命令作用于的那个构造函数。如果构造函数不是通过
 * new命令调用的，new.target会返回undefined，因此这个属
 * 性可以用来确定构造函数是怎么调用的。
 * */

function Person(name) {
    if(new.target !== undefined) {
        this.name = name;
    }else {
        throw new Error('必须使用new命令生成实例');
    }
}
// 另一种写法
// function Person(name) {
//     if(new.target == Person) {
//         this.name = name;
//     }else {
//         throw new Error('必须使用new命令生成实例');
//     }
// }


var p = new Person('张三');
// var notP = Person.call(p,'张三') // Error
console.log(p.name);


/**
 * Class 内部调用new.target，返回当前 Class。
 * 需要注意的是，子类继承父类时，new.target会返回子类。
 * 利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。
 * 注意，在函数外部，使用new.target会报错。
 * */
class Rectangle {
    constructor(length,width) {
        console.log(new.target === Rectangle);
        this.length = length;
        this.width = width;
    }
}
var obj  = new Rectangle(10,2); // true
// 子类继承父类时，new.target会返回子类。
class Square extends Rectangle {
    constructor(length) {
        super(length,length);
    }
}
var square = new Square(10); // false



// 一个不能独立使用，只能继承后才能使用的类
class Shape {
    constructor() {
        if(new.target == Shape) {
            throw Error('本类不能实例化');
        }
    }
}

class Angle extends Shape{
    constructor(length,height) {
        super();
        //...
    }
}
// 类似接口吧