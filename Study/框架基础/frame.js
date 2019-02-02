/**
 * core
 * */
var $$ = function () {

}
$$.prototype = {
    //给一个对象扩充功能
    extendMany: function () {
        var key, i = 0, len = arguments.length, target = null, copy;
        if (len === 0) {
            return;
        } else if (len === 1) {
            target = this;
        } else {
            i++;
            target = arguments[0];
        }
        for (; i < len; i++) {
            for (key in arguments[i]) {
                copy = arguments[i][key];
                target[key] = copy;
            }
        }
        return target;
    },
    extend: function (tar, source) {
        //遍历对象
        for (var i in source) {
            tar[i] = source[i];
        }
        return tar;
    },
}
$$ = new $$();

// 基础模块-search
$$.extend($$, {
    // Id选择器
    $id: function (id) {
        return document.getElementById(id)
    },
});
// 基础模块-数字相关操作
$$.extend($$, {
    //随机数
    random: function (begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    },
})
// 基础模块-字符串操作
$$.extend($$, {
    //去除左边空格
    ltrim: function (str) {
        return str.replace(/(^\s*)/g, '');
    },
    //去除右边空格
    rtrim: function (str) {
        return str.replace(/(\s*$)/g, '');
    },
    //去除空格
    trim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //简单的数据绑定formateString
    formateString: function (str, data) {
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            return typeof data[key] === "undefined" ? '' : data[key]
        });
    },
    // 判断是否是字符串
    isString: function (str) {
        return typeof str === 'string';
    }
});
// 基础模块-ajax
$$.extend($$, {
    //ajax - 前面我们学习的
    myAjax: function (URL, fn) {
        var xhr = createXHR();	//返回了一个对象，这个对象IE6兼容。
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    fn(xhr.responseText);
                } else {
                    alert("错误的文件！");
                }
            }
        };
        xhr.open("get", URL, true);
        xhr.send();

        //闭包形式，因为这个函数只服务于ajax函数，所以放在里面
        function createXHR() {
            //本函数来自于《JavaScript高级程序设计 第3版》第21章
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"
                        ],
                        i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (ex) {
                            //skip
                        }
                    }
                }

                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        }
    },
});
// 基础模块-tab
$$.extend($$, {
    //tab
    tab: function (id) {
        //如何获取某个父元素下面的子元素
        var box = document.getElementById(id);
        var spans = box.getElementsByTagName('span');
        var lis = box.getElementsByTagName('li');


        //两步走
        //第一步: 先把上半部分实现
        //群体绑定事件  -- 对所有的span绑定事件
        //群体绑定事件
        for (var i = 0; i < spans.length; i++) {
            //相亲法则  -- 给男一号一个代号  --  怎么给 -- 自定义属性
            spans[i].index = i;
            spans[i].onmouseover = function () {
                //排他思想 --  将所有的span置为默认状态  --- 然后再将当前鼠标移上的span置为class -- select
                for (var i = 0; i < spans.length; i++) {
                    spans[i].className = '';
                    lis[i].className = '';
                }
                this.className = 'select';
                lis[this.index].className = 'select';
            }
        }

    },
});

// 时间模块
$$.extend($$, {});

// 事件模块
$$.extend($$, {
    // on事件
    on: function (div, event, fn) {
        let dom = $$.isString(div) ? document.querySelector(div) : div;
        if (dom.addEventListener) { // chrome,firefox
            dom.addEventListener(event, fn);
        } else if (dom.attachEvents) { // ie支持
            dom.attachEvents(event, fn);
        }
    },
    // click事件
    click: function (div, fn) {
        $$.on(div, 'click', fn);
    },
    // mouseover事件
    mouseover: function (div, fn) {
        $$.on(div, 'mouseover', fn);
    },
    // mouseout事件
    mouseout: function (div, fn) {
        $$.on(div, 'mouseout', fn);
    },
    // mouseenter事件
    mouseenter: function (div, fn) {
        $$.on(div, 'mouseenter', fn);
    },
    // mouseleave事件
    mouseleave: function (div, fn) {
        $$.on(div, 'mouseleave', fn);
    },
    // hover事件
    hover: function (div, fnover, fnout) {
        if (fnover) {
            $$.mouseover(div, fnover);
        }
        if (fnout) {
            $$.mouseout(div, fnout);
        }
    },
    // 获取事件的event对象
    getEvent: function (e) {
        return e ? e : window.event;
    },
    // 获取事件的target对象
    getTarget: function (e) {
        let event = $$.getEvent(e);
        // 短路表达式
        return event.target || event.srcElement;
    },
    // 阻止默认行为
    preventDefault: function (e) {
        var event = $$.getEvent(e);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 阻止冒泡
    stopPropagation: function (e) {
        var event = $$.getEvent(e);
        if (event.stopPropagation) {
            event.stopPropagation();
        } else { // ie
            event.cancelBubble = false;
        }
    },
});


