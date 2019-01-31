/**
 * const声明的常量只在当前代码块有效。如果想设置跨模块的
 * 常量（即跨多个文件），或者说一个值要被多个模块共享，
 * 可以采用下面的写法。
 * */
// constants.js模块
export const A = 1;
export const B = 2;
export const C = 3;

// test1.js 模块
import * as constants from './constants';
console.log(constants.A);
console.log(constants.B);

// test2.js模块
import {A,B} from './constants';
console.log(A);
console.log(B);

/**
 * 如果要使用的常量非常多，可以建一个专门的
 * constants目录，将各种常量写在不同的文件里面，
 * 保存在该目录下。
 */
// constants/db.js
export const db = {
    url:'http...',
    admin_username:'admin',
    admin_password:'password'
}
// constants/user.js
export const users = ['root','admin','staff','ceo'];
// 然后将这些文件输出的常量，合并在index.js里面
// constants/index.js
export {db} from './db';
export {users} from './users';

// 使用的时候直接加载script.js
import {db,users} from './constants/index';