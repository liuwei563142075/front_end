// （1）严格模式：
/**
 * 类和模块的内部，默认就是严格模式，所以不需要使用use strict
 * 指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。
 * 考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上
 * 把整个语言升级到了严格模式。
 */



console.log('（2）不存在变量提升ES5完全不同：================================');
// （2）不存在变量提升ES5完全不同：
// new Foo(); //ReferenceError: Foo is not defined
// class Foo {}
/**
 * 上面代码中，Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。
 * 这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义
 */
{
    let Foo = class {}
    class Bar extends Foo {

    }
}
/**
 * 上面的代码不会报错，因为Bar继承Foo的时候，Foo已经有定义了。
 * 但是，如果存在class的提升，上面代码就会报错，因为class会被提升到代码头部，
 * 而let命令是不提升的，所以导致Bar继承Foo的时候，Foo还没有定义。
 */

console.log('（3）name属性===================================');
// （3）name属性
// 由于本质上，ES6的类只是ES5的构造函数的一层包装，所以函数的
// 许多特性都被Class继承，包括name属性
class Point {}
console.log(Point.name);
// name属性总是返回紧跟在class关键字后面的类名。


console.log('4）Generator方法===================================');
// （4）Generator方法
// 如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。
class Color {
    constructor(...args) {
        this.args = args;
    }
    *[Symbol.iterator]() {
        for(let arg of this.args) {
            yield arg;
        }
    }
}

/**
 * 上面代码中，Color类的Symbol.iterator方法前有一个星号，
 * 表示该方法是一个 Generator 函数。Symbol.iterator方
 * 法返回一个Color类的默认遍历器，for...of循环会自动调用这个遍历器。
 */

for (c of new Color('pink','red','yellow')) {
    console.log(c);
}

