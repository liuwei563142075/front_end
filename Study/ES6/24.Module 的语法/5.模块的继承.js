/**
 * circleplus.js
 * 下面代码中的export *，表示再输出circle模块的所有属性和方法。
 * 注意，export *命令会忽略circle模块的default方法。
 * 然后，上面代码又输出了自定义的e变量和默认方法。
 * */
export * from 'export/circle'

export var e = 2.718;
export default function (x) {
    return Math.exp(x);
}

//加载上面的导出：main.js
// import * as math from 'circleplus'
// import exp from 'circleplus';
// console.log(exp(math.e));
