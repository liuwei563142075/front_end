function $(id) {return document.getElementById(id);}

/**
 *  水平拖动
 * @param target 受bar拖动而改变背景的目标盒子
 * @param bar
 * @address:https://www.cnblogs.com/liudaihuablogs/p/9458877.html
 * @date 2018/08
 */
function leDrag(target,bar) {
    var step = 0;
    bar.onmousedown = function(event) {
        var event = event || window.event;
        // bar被按下的位置距离浏览器左窗口距离
        var barLeft = event.clientX - this.offsetLeft;

        document.onmousemove = function(event) {
            var event = event || window.event;
            step = event.clientX-barLeft;
            if(step<0){
                step = 0;
            }else if(step>bar.offsetParent.offsetWidth - bar.offsetWidth){
                step = bar.offsetParent.offsetWidth - bar.offsetWidth;
            }
            bar.style.left = step + "px";
            target.style.width = step + "px";

            // 清除选择拖动，不写这句话，会出现如果滑的快，弹起后依旧跟着鼠标走
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
        //  是document的onmouseup事件，不是tag的
        document.onmouseup = function() {
            // 清除事件
            document.onmousemove = null;
        }
    }
}


/**
 * 垂直拖动
 * @target 受bar控制而移动的目标
 * @bar 滑动的bar
 * @address:https://www.cnblogs.com/liudaihuablogs/p/9458801.html
 * @date 2018/08
 */
function veDrag(target,bar) {

    // 算出滚动条的高度，内容越多滚动条越短 barh/boxH = boxH/conentH;即barH = 容器的高度*容器的高度/内容的高度
    var barHeight = target.offsetParent.offsetHeight/target.offsetHeight*target.offsetParent.offsetHeight;
    bar.style.height = barHeight + "px";

    bar.onmousedown = function(event) {
        var event = event || window.event;
        // 按在bar身上某处的点距离该bar顶端距离 + box盒子距离浏览器距离
        var val = event.clientY - this.offsetTop;
        var that = this;
        document.onmousemove = function() {
            var event = event || window.event;
            // bar移动的距离
            var barY = event.clientY - val;
            //目标盒子移动的距离。     （boxH-barH）*比例因子 = contentH-BoxH   【比例因子：bar走一步的像素相当于content走多少像素】
            var targetTop = (target.offsetHeight-target.offsetParent.offsetHeight)/(target.offsetParent.offsetHeight-that.offsetHeight)*barY;

            if(barY < 0 || targetTop < 0){
                barY = 0;
                target.style.top = 0; //去除标题中所说的bug
            }else if(barY > target.offsetParent.offsetHeight-that.offsetHeight || targetTop > (target.offsetHeight-target.offsetParent.offsetHeight)/(target.offsetParent.offsetHeight-that.offsetHeight)*barY) {
                barY = target.offsetParent.offsetHeight-that.offsetHeight;
                //去除标题中所说的bug
                target.style.top = -(target.offsetHeight-target.offsetParent.offsetHeight)/(target.offsetParent.offsetHeight-that.offsetHeight)*barY + "px";
            }else {
                target.style.top = -targetTop + "px";
            }
            that.style.top = barY + "px";

            // 清除选择拖动，不写这句话，会出现如果滑的快，弹起后依旧跟着鼠标走
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();   // 防止拖动滑块的时候， 选中文字
        }

        document.onmouseup = function() {
            document.onmousemove = null;
        }
    }
}

/**
 * 网页特效_拖拽案例
 * @param current  代表被点击的对象
 * @param move  代表移动的对象
 * @address:https://www.cnblogs.com/liudaihuablogs/p/9457135.html
 * @date 2018/08
 */
function drag(current,move) {
    current.onmousedown = function(event) {
        var event = event || window.event;
        console.log(this.offsetLeft);
        // 被点击时的位置
        var valx = event.clientX - move.offsetLeft;
        var valy = event.clientY - move.offsetTop;
        document.onmousemove = function(event) {
            var event = event || window.event;
            // 大盒子水平垂直居中使用：50%+margin-left、top:-width/2、-height/2 居中，所以此处加move.offsetWidth / 2;
            var x = event.clientX - valx + move.offsetWidth / 2;
            var y = event.clientY - valy + move.offsetHeight / 2;
            move.style.left = x + "px";
            move.style.top = y + "px";

            // 清除选择拖动，不写这句话，会出现如果滑的快，弹起后依旧跟着鼠标走
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
        document.onmouseup = function() {
            document.onmousemove = null;
        }
    }
}

/**
 * 页面卷起的距离【滚动条距离顶部的距离】,调用方式：window.onscroll = function(){ scroll().left; }
 * @returns {{left: number, top: number}}
 * @address:https://www.cnblogs.com/liudaihuablogs/p/9460016.html
 * @date 2018/08
 */
function scroll() {
    if(window.pageXOffset != null) {    // 非IE 678
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }
    return {
        left:document.documentElement.scrollLeft,
        top:document.documentElement.scrollTop
    }
}

/**
 * 浏览器可视区宽高
 * @returns {{width: number, height: number}}
 * @address:https://www.cnblogs.com/liudaihuablogs/p/9472320.html
 * @date 2018/08
 */
function client() {
    return {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    }
}

/**
 * 阻止冒泡【只有子标签和父标签有相同的事件A时，子标签使用阻止冒泡,父盒子的事件A才会失效】
 * @param event     需要阻止冒泡的事件
 * @address：https://www.cnblogs.com/liudaihuablogs/p/9483294.html
 * @date：2018/08
 */
function stopBubble(event) {
    var event = event || window.event;
    if(event && event.stopPropagation) {
        event.stopPropagation();
    }else {
        event.cancelBubble = true;
    }
}

/**
 * 获取选择的内容【文字】
 * @returns {*}
 * @address：https://www.cnblogs.com/liudaihuablogs/p/9483311.html
 * @date：2018/08
 */
function getSelectionText() {
    if(window.getSelection){    /* 高版本浏览器 */
        return window.getSelection().toString();
    }
    /* IE678 */
    return document.selection.createRange().text;
}

/**
 * 清除选中的内容
 * @address：https://www.cnblogs.com/liudaihuablogs/p/9483311.html
 * @date：2018/08
 */
function removeSelection() {
    if(window.getSelection) {    /* 高版本浏览器 */
        window.getSelection.removeAllRanges();
    }else {
        /* IE678 */
        document.selection.empty();
    }
}

/**
 * 获取obj对象的css样式（内嵌/外联/行内）
 * 注意：获取的属性值：
 * 如果没定义宽高，盒子里有内容：是实际盒子被孩子撑起的宽高。盒子里没内容：0px
 * 盒子有宽高：返回盒子自身样式里的宽高
 *
 * @param obj 被获取css属性值的对象
 * @param attr 获取css属性名称
 * @returns {string}
 * @address：
 * @date：2018/08
 */
function getStyle(obj,attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj,null)[attr];
    }
}

