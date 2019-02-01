/**
 * 1.立即执行函数，可以写成箭头函数的形式。
 * */
(() => {
    console.log('立即执行函数');
})();

/**
 * 2.那些需要使用函数表达式的场合，尽量用箭头函数
 * 代替，因为这样更简洁，而且绑定了this
 * */
// bad
[1, 2, 3].map(function (x) {
    return x * x;
});
// good
[1, 2, 3].map((x) => {
    return x * x;
});
// best
[1, 2, 3].map(x => x * x);

/**
 * 3.箭头函数取代Function.prototype.bind,
 * 不应再用self/_this/thas绑定this
 *
 * */
// bad
const self = this;
const boundMethod1 = function (...params) {
    return method.apply(self, params);
}

// acceptable
const boundMethod2 = method.bind(this);

// best
const boundMethod3 = (...params) => method.apply(this.params);

/**
 * 4.简单的，单行的，不会复用的函数，建议采用箭头函数。
 * 如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。
 * */

/**
 * 所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。
 * */
// bad
function divide1(a, b, option = false) {

}

// good
function divide2(a, b, {option = false} = {}) {

}

/**
 * 不要在函数体内使用arguments变量，使用rest运算符(...)代替。
 * 因为rest运算符显示表面你想要获取参数，而且arguments是一个类似数组的对象，
 * 而rest运算符可以提供一个真正的数组
 * */
// bad
function concatenateAll1() {
    const args = Array.prototype.slice.apply(arguments);
    return args.join('')
}
// good
function concatencteAll2(...args) {
    return args.join('');
}

/**
 * 使用默认值语法设置函数参数的默认值
 * */
// bad
function handleThinks1(opts) {
    opts = opts || {};
}
// good
function handleThinks2(opts = {}) {

}












