function animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        var step = 0;
        var current = 0;
        for (var k in json) {
            if(k == "opacity") {
                current = Math.round(parseInt(getStyle(obj,k)*100)) || 0;
            }else {
                current = parseInt(getStyle(obj,k));
            }

            step = (json[k] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            if(k == "opacity") {
                if(k in obj.style) {  // 判断浏览器是否支持opacity
                    obj.style.opacity = (current + step) / 100;
                }else {
                    obj.style.filter = "alpha(opacity="+(current + step) * 10+")";
                }
            }else if (k == "zIndex") {  /*  zIndex不需要缓动！要立马执行 */
                obj.style[k] = json[k];
            }else {
                obj.style[k] = current + step + "px";
            }

            if(current != json[k]) {
                flag = false;
            }
        }
        if(flag) {
            clearInterval(obj.timer);
            /*  回调函数只有在上级函数执行完才去执行，在这里即清除了定时器时，上级函数执行完 */
            if(fn) {  /* 如果定义了fn，则执行fn  */
                fn();
            }
        }
    },10);
}

function getStyle(obj,attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj,null)[attr];
    }
}