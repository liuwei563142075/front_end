import {name,home} from './1.export命令.js'

/**
 * 使用别名 用as申明
 */
// import {name as NAME,home} from './1.export命令.js'

console.log(name,home);
// console.log(NAME,home);

/**
 * （2）import命令输入的变量都是只读的，因为它的本质是输入接口。
 * 也就是说，不允许在加载模块的脚本里面，改写接口。
 * 脚本加载了变量name，对其重新赋值就会报错，因为name是一个只读的接口。
 * 但是，如果name是一个对象，改写name的属性是允许的。
 *
 */

// name = 'XXX'  // 报错


