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
const boundMethod = function (...params) {
    return method.apply(self,params);
}

// acceptable
const boundMethod = method.bind(this);


