/**
 * （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
 * （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
 * */
class A {}
class B extends A {}
console.log(B.__proto__ === A);
console.log(B.prototype.__proto__ === A.prototype);
