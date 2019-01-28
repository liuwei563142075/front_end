//constructor方法是类的默认方法，通过new命令生成对象实例时，
// 自动调用该方法。一个类必须有constructor方法，如果没有显式
// 定义，一个空的constructor方法会被默认添加。
class Point {

}
//上面代码中，定义了一个空的类Point，JavaScript 引擎会自动为它添加一个空的constructor方法。
//等同于
// class Point {
//     constructor() {}
// }

// constructor函数默认返回实例对象（即this），完全可以指定返回另一个对象
class Foo {
    constructor() {
        return Object.create(null);// 也可以修改默认返回的对象
    }
}

//实例的属性除非显式定义在其本身（即定义在this对象上），
// 否则都是定义在原型上（即定义在class上）。
class Bar {
    constructor(width,height) {
        this.width = width;// 显式声明在其本身this上
        this.height = height;
    }

    getArea() {
        return this.width*this.height;
    }
}

var bar = new Bar(2,3);
console.log(bar.getArea());
console.log(bar.hasOwnProperty('width')); // width是实例对象自身属性
console.log(bar.hasOwnProperty('getArea')); // getArea是原型对象属性