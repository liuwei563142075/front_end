/**
 * 1.使用数组成员对变量赋值时，优先使用解构赋值。
 * */
const arr = [1,2,3,4];

// 坏的用法习惯
const first = arr[0]
const second = arr[1]

// good
const [fir,sec] = arr;
console.log(fir,sec);

/**
 * 2.函数的参数如果是对象的成员，优先使用解构赋值
 * */
// bad
function getFullName1(user) {
    const firstName = user.firstName;
    const secondName = user.secondName;
}

// good
function getFullName2(obj) {
    const {firstName,secondName} = obj;
}

// best
function getFullName3({firstName,secondName}) {

}

/**
 * 如果对象返回多个值，优先使用对象的解构赋值，而不是
 * 数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序
 * */

// bad
function processInput1(input) {
    return [left,right,top,bottom]
}

// good
function processInput2(input) {
    return {left,right,top,bottom}
}

const {left,right} = processInput2(input)