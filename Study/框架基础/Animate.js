// 要素：1.以使用者的角度考虑，易用性要好
// 2.零污染，健康绿色
// 3.模块化
// 4.链式访问
// 5.扩展性
// 完美性：安全 性能 优化 容错性

var Animate = function () {
    this.timer = none;
}

Animate.prototype = {
    // animate.add('#div',{width:300},1000)
    add: function (content,params,time) {
        var objs = $$.$all(content);
        // 1.获取运动对象 //2.解析参数（单物体单属性）
        this._create(function () {

        },time);
    },
    _create: function (fn,time) {
        this.timer = setInterval(fn, time)
    },
    _stop: function () {
        clearInterval(this.timer)
    }
}