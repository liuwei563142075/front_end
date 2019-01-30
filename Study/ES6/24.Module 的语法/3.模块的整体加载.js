/**
 * 单个加载：
 * */
import { area,circumference } from './export/circle'

console.log('圆面积：'+ area(4));
console.log('圆周长：'+ circumference(14));


/**
 * 作为整个模块加载：
 * */
import * as circle from './export/circle'

console.log('圆面积：'+ circle.area(4));
console.log('圆周长：'+ circle.circumference(14));
//注意，模块整体加载所在的那个对象（上例是circle），
// 应该是可以静态分析的，所以不允许运行时改变。
// 下面的写法都是不允许的。

import * as circle from './circle';

// 下面两行都是不允许的
circle.foo = 'hello';
circle.area = function () {};