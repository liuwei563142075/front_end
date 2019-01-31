/**
 * 1.用let可以完全取代var，因为两者语义相同，而且let没有副作用
 * */
'use strict';
if (true) {
    let x = 'hello';
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/**
 * 2.全局常量和线程安全：
 * 原因是 JavaScript 编译器会对const进行优化，所以多使用const，
 * 有利于提高程序的运行效率，也就是说let和const的本质区别，
 * 其实是编译器内部的处理不同。
 * */