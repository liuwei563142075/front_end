/**
 * 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义
 * 在实例对象（this）上的属性。
 */
class Foo {
    // static name = 'Foo' // 提案，还没正式使用
}
Foo.name = 'Foo'
console.log(Foo.name);