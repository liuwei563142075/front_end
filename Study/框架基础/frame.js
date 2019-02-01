/**
 * core
 * */
var $$ = function () {

}
$$.prototype = {

}

// 事件框架
// 表示将后面一个对象拷贝给前面一个对象。
$$.extend($$,{
    on:function (event) {
        this.addEventListener(event,function() {
            // do...
        })
    }
})
