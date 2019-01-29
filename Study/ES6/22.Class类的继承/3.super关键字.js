/**
 * （1）super这个关键字，既可以当作函数使用，也可以当
 * 作对象使用。在这两种情况下，它的用法完全不同。
 * super虽然代表了父类A的构造函数，但是返回的是
 * 子类B的实例，即super内部的this指的是B，因此
 * super()在这里相当于
 * A.prototype.constructor.call(this)。
 */
class A {
    constructor() {
        console.log(new.target.name);
    }
}
class B extends A {
    constructor() {
        super();
    }
}
new A() // A
new B() // B
/**
 * 上面代码中，new.target指向当前正在执行的函数。
 * 可以看到，在super()执行时，它指向的是子类B的
 * 构造函数，而不是父类A的构造函数。也就是说，
 * super()内部的this指向的是B。
 * */

/**
 *（2）注意super作为函数时只能用在子类的构造函数中，用在其他
 *地方就会报错。
 *
 *
 * super作为对象时，在普通方法中，指向父类的原型对象；在
 * 静态方法中，指向父类。
 *
 * */

class C {
    p() {
        return 2;
    }
}

class D extends C {
    constructor() {
        super();
        console.log(super.p()); // 2
    }
}

let d = new D();
//上面代码中，子类B当中的super.p()，就是将super当作一
// 个对象使用。这时，super在普通方法之中，指向
// A.prototype，所以super.p()就相当于A.prototype.p()。

/**
 *（3）由于super指向父类的原型对象，所以定义在父类实例上的方
 * 法或属性，是无法通过super调用的。但是定义在原型上的可
 * 以取到。
 * */

class E {
    constructor() {
        this.p = 2;
    }
}
E.prototype.e = 10

class F extends E {
    get m() {
        return super.p;
    }

    get e() {
        return super.e;
    }
}

let f = new F();
console.log(f.m); // undefined
console.log(f.e); // 10



/**
 * （4）ES6 规定，在子类普通方法中通过super调用父类的方法时，
 * 方法内部的this指向当前的子类实例。
 * */
class G {
    constructor() {
        this.x = 1;
    }
    print() {
        console.log(this.x);
    }
}

class H extends G {
    constructor() {
        super();
        this.x = 2;
    }
    m() {
        super.print();
    }
}

let h = new H();
console.log(h.m()); // 2

//上面代码中，super.print()虽然调用的是
// A.prototype.print()，但是A.prototype.print()内部
// 的this指向子类B的实例，导致输出的是2，而不是1。也
// 就是说，实际上执行的是super.print.call(this)。修改了this指针的指向

/**
 * （5）如果super作为对象，用在静态方法之中，这时super将指向父类，
 * 而不是父类的原型对象。
 */
class Parent {
    static myMethod(msg) {
        console.log('static', msg);
    }

    myMethod(msg) {
        console.log('instance', msg);
    }
}

class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);
    }

    myMethod(msg) {
        super.myMethod(msg);
    }
}

console.log(Child.myMethod(1)); // static 1

var child = new Child();
console.log(child.myMethod(2)); // instance 2
