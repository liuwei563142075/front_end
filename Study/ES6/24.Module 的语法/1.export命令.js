/*
  export命令:
    模块功能主要由两个命令构成：export和import。
    export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能
  模块：
    一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希
    望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下
    面是一个 JS 文件，里面使用export命令输出变量。  
*/

export var name = 'Michael';
export var age = 30;
export var sex = '男'

// 上面代码是export命令.js文件，保存了用户信息。ES6 将其视为一个模块，
// 里面用export命令对外部输出了三个变量。

// 其他写法【推荐】：
var home = 'American';
var born = 1987;
export {home,born};

// export命令除了输出变量，还可以输出函数或类
export function multiply(x,y) {
    return x*y;
}

// 通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
function v1(){}
function v2(){}
export {
    v1 as streanV1,
    v2 as streamV2
}

// export语句输出的接口，与其对应的值是动态绑定关系，
// 即通过该接口，可以取到模块内部实时的值。
export var foo = 'bar';
setTimeout(()=>foo = 'baz',500);
// 上面代码输出变量foo，值为bar，500 毫秒之后变成baz。


// 最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。
// 如果处于块级作用域内，就会报错，下一节的import命令也是如此。
// 这是因为处于条件代码块之中，就没法做静态优化了，违背
// 了 ES6 模块的设计初衷。