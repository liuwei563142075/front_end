/**
 * 为模块指定默认输出
 * */
export default function() {
    console.log('foo');
}

/**
 * export default命令用在非匿名函数前，也是可以的。
 * 下面代码中，foo函数的函数名foo，在模块外部是无效的。
 * 加载的时候，视同匿名函数加载。
 * 一个模块只能有一个默认输出【只能有一个export default】
 * */
// export default function fee() {
//     console.log('fee');
// }

/**
 * 正是因为export default命令其实只是输出一个叫做default的
 * 变量，所以它后面不能跟变量声明语句。
 * */



/**
 * export default也可以用来输出类。
 * */
// export default class {
//     //...
// }
// import MyClass from 'MyClass';
// let cl = new MyClass();