/**
 * 许多面向对象的语言都有修饰器（Decorator）函数，
 * 用来修改类的行为。目前，有一个提案将这项功能，
 * 引入了 ECMAScript。
 */
// @testable
// class MyTestableClass {
//     //...
// }
// function testable(target) {
//     target.isTestable = true;
// }
// console.log(MyTestableClass.isTestable);

// log修饰器
class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(this, arguments);
    };

    return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);