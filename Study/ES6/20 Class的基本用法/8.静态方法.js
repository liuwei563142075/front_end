/**
 * (1)类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
 * 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，
 * 而是直接通过类来调用，这就称为“静态方法”。
 */
class Point {
    static className() {
        return 'Point'
    }
}
var p = new Point();

console.log(Point.className());
// console.log(p.className());//p.className is not a function

// (2)注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。
class Bar {
    static bar() {
        this.baz();
    }
    static baz() {
        console.log('类的this');
    }
    baz() {
        console.log('静态方法可以与非静态方法重名');
    }
    test() {
        console.log('test');
    }
}
Bar.bar();

// (3)父类的静态方法可以被子类继承！！！！！
class BarStack extends Bar{

}
BarStack.baz();
// BarStack.test();

// (4)父类的静态方法也可以使用super调用
class Parent {
    static name() {
        return 'Parent';
    }
}
class Child extends Parent {
    static parentName() { // 必须也是静态的
        return super.name();
    }
}
console.log(Child.parentName());