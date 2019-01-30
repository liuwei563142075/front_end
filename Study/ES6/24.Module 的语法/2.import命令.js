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


/**
 * （3）import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径。
 * .js后缀可以省略。如果只是模块名，不带有路径，
 * 那么必须有配置文件，告诉JavaScript引擎该模块的位置
 * */

import { myMethod } from 'util'
// 上面代码中，util是模块文件名，由于不带有路径，必须通过
// 配置，告诉引擎怎么取到这个模块。

/**
 * 注意：import命令具有提升效果，会提升到整个模块的头部，首先执行。
 * import是编译时执行二点，在代码运行之前
 * */



