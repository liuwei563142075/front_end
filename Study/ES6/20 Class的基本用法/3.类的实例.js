//constructor方法是类的默认方法，通过new命令生成对象实例时，
// 自动调用该方法。一个类必须有constructor方法，如果没有显式
// 定义，一个空的constructor方法会被默认添加。
class Point {

}
//上面代码中，定义了一个空的类Point，JavaScript 引擎会自动为它添加一个空的constructor方法。
//等同于
class Point {
    constructor() {}
}

// constructor函数默认返回实例对象（即this），完全可以指定返回另一个对象
class Foo {
    constructor() {
        return Object.create(null);// 也可以修改默认返回的对象
    }
}