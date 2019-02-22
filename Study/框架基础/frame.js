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
    $id: function (id, parent) {
        // parent = parent != undefined ? parent:document;
        return document.getElementById(id);
    },
    // 封装class选择器
    // 为什么不直接使用getElementByClassName？
    // 因为IE10之前的浏览器不支持这种写法，所以选择自己封装
    $class: function (className, parent) {
        var arr = [];
        className = $$.trim(className);
        parent = parent != undefined ? parent : document;
        // 获取所有元素
        var elements = parent.getElementsByTagName('*');
        // 过滤class = className的元素
        for (var i = 0; i < elements.length; i++) {
            if ($$.trim(elements[i].className) == className) {
                arr.push(elements[i]);
            }
        }
        return arr;
    },
    // 分类选择器div   .module   #people
    $selectors: function (content, parent) {
        var result = [];
        parent = parent != undefined ? parent : document;
        //content: div,.dul,#more
        if ($$.isString(content)) {
            content = $$.trim(content);
            var first = content.charAt(0);
            var eleName = content.substring(1, content.length);
            switch (first) {
                case '.':
                    // 如果是class,直接用上面的方法获得数组，
                    // 在将该数组的所有元素，赋值该当前要返回的数组。
                    var tempArr = $$.$class(eleName, parent);
                    Array.prototype.push.apply(result, tempArr);
                    break;
                case '#':
                    // 如果是Id，直接getElementById获取该元素，添加到arr
                    var element = $$.$id(eleName, parent);
                    Array.prototype.push.call(result, element);
                    break;
                default:
                    // 元素选择器getElementsByTagName,获取的放入arr
                    var elements = parent.getElementsByTagName(content);
                    Array.prototype.push.apply(result, elements);
                    break;
            }
        } else {
            result.push(content);
        }
        return result;
    },
    // 分组选择器 (#div span,#div .module)
    /**
    $group: function (content) {
        let result = []
        content = $$.blank2one($$.trim(content));
        let flag = false;
        let flagTag = '';
        let cont = '';
        let index = 0;
        let parent = [];
        for (let i in content) {
            switch (content[i]) {
                case '>':
                    if (!flag) {
                        flag = !flag;
                        flagTag = '>';
                    } else {
                        cont = content.substring(index,i);
                        index = i;
                        parent = $$.$selectByTag(cont,'>',parent);
                        flag = !flag
                    }
                    break
                case '+':
                    if (!flag) {
                        flag = !flag
                        flagTag = '+'
                    } else {
                        cont = content.substring(index,i);
                        index = i;
                        parent = $$.$selectByTag(cont,'+',parent);
                        flag = !flag
                    }
                    break;
                case '~':
                    if (!flag) {
                        flag = !flag
                        flagTag = '~'
                    } else {
                        cont = content.substring(index,i);
                        index = i;
                        parent = $$.$selectByTag(cont,'~',parent);
                        flag = !flag
                    }
                    break;
                case ' ':
                    if (content[i - 1] == ' ' && content[i + 1] == ' ') {
                        if (!flag) {
                            flag = !flag
                            flagTag = '~'
                        } else {
                            cont = content.substring(index,i);
                            index = i;
                            parent = $$.$selectByTag(cont,' ',parent);
                            flag = !flag
                        }
                    }
                    break;
            }
        }
    },
     */
    // 层次选择器 (#div span #div .module)
    /**
     $cengci: function (content) {

    },
     */

    // 包含选择器，即 div p         #shop > .cloths + a img
    $selectorsBySpan: function (content, parent) {
        content = $$.trim(content);
        parent = parent != undefined ? parent : document;
        var result;
        var beforeArr;
        if ($$.isString(content)) {
            var elements = content.split(' ');
            beforeArr = $$.$selectors(elements[0], parent);
            for (var key in beforeArr) {
                result = $$.$selectors(elements[1], beforeArr[key]);
            }
        }
        return result;
    },
    // 子选择器，即 div>p  #div>#p #div>.p
    $selectorsByChild: function (content, parent) {
        content = $$.trim(content);
        parent = parent != undefined ? parent : document;
        var result = [];
        var beforeArr;
        var afterStr;
        if ($$.isString(content)) {
            var elements = content.split('>'); // 子代选择器，仅仅命中子代，孙代不计
            beforeArr = $$.$selectors(elements[0], parent);
            afterStr = $$.trim(elements[1]);
            var index = afterStr.charAt(0);
            var afterName = afterStr.substring(1, afterStr.length);
            switch (index) {
                case '.':
                    // 如果是class,直接用上面的方法获得数组，
                    // 在将该数组的所有元素，赋值该当前要返回的数组。
                    for (let key in beforeArr) {
                        let childrens = beforeArr[key].children;
                        for (let childkey in childrens) {
                            if (childrens[childkey].className == afterName) {
                                result.push(childrens[childkey]);
                            }
                        }
                    }
                    break;
                case '#':
                    // 如果是Id，直接getElementById获取该元素，添加到arr
                    for (let key in beforeArr) {
                        let childrens = beforeArr[key].children;
                        for (let childkey in childrens) {
                            if (childrens[childkey].id == afterName) {
                                result.push(childrens[childkey]);
                            }
                        }
                    }
                    break;
                default:
                    // 元素选择器getElementsByTagName,获取的放入arr
                    afterName = afterStr;
                    for (let key in beforeArr) {
                        let childrens = beforeArr[key].children;
                        for (let childkey in childrens) {
                            if (childrens[childkey].tagName == afterName.toUpperCase()) {
                                result.push(childrens[childkey]);
                            }
                        }
                    }
                    break;
            }
        }
        return result;
    },
    // 相邻选择器，即 div+p
    $selectorsByAdjacent: function (content, parent) {
        content = $$.trim(content);
        parent = parent != undefined ? parent : document;
        var result = [];
        var beforeArr;
        var afterStr;
        if ($$.isString(content)) {
            var elements = content.split('+'); // 选择紧贴在E元素之后F元素，元素E与F必须同属一个父级。
            beforeArr = $$.$selectors(elements[0], parent);
            afterStr = $$.trim(elements[1]);
            var index = afterStr.charAt(0);
            var afterName = afterStr.substring(1, afterStr.length);
            let targetEle = null;
            switch (index) {
                case '.':
                    // 如果是class,直接用上面的方法获得数组，
                    // 在将该数组的所有元素，赋值该当前要返回的数组。
                    for (let key in beforeArr) {
                        targetEle = $$.$nextElementSibling(beforeArr[key]);
                        if (targetEle != null && targetEle.className == afterName) {
                            result.push(targetEle);
                        }
                    }
                    break;
                case '#':
                    // 如果是Id，直接getElementById获取该元素，添加到arr
                    for (let key in beforeArr) {
                        targetEle = $$.$nextElementSibling(beforeArr[key]);
                        if (targetEle != null && targetEle.id == afterName) {
                            result.push(targetEle);
                        }
                    }
                    break;
                default:
                    // 元素选择器getElementsByTagName,获取的放入arr
                    for (let key in beforeArr) {
                        targetEle = $$.$nextElementSibling(beforeArr[key]);
                        if (targetEle != null && targetEle.tagName == afterStr.toUpperCase()) {
                            result.push(targetEle);
                        }
                    }
                    break;
            }
        }
        return result;
    },
    // 兄弟选择器，即 div~p
    $selectorsBybrother: function (content, parent) {
        content = $$.trim(content);
        parent = parent != undefined ? parent : document;
        var result = [];
        var beforeArr;
        var afterStr;
        if ($$.isString(content)) {
            var elements = content.split('~'); // 选择E元素后面的所有兄弟元素F，元素E与F必须同属一个父级。
            beforeArr = $$.$selectors(elements[0], parent);
            afterStr = $$.trim(elements[1]);
            var index = afterStr.charAt(0);
            var afterName = afterStr.substring(1, afterStr.length);
            let targetEle = null;
            switch (index) {
                case '.':
                    // 如果是class,直接用上面的方法获得数组，
                    // 在将该数组的所有元素，赋值该当前要返回的数组。
                    for (let key in beforeArr) {
                        targetEle = $$.$nextElementSibling(beforeArr[key]);
                        while (targetEle) {
                            if (targetEle.className == afterName) {
                                result.push(targetEle);
                            }
                            targetEle = $$.$nextElementSibling(targetEle);
                        }
                    }
                    break;
                case '#':
                    // 如果是Id，直接getElementById获取该元素，添加到arr
                    for (let key in beforeArr) {
                        targetEle = $$.$nextElementSibling(beforeArr[key]);
                        while (targetEle) {
                            if (targetEle.id == afterName) {
                                result.push(targetEle);
                            }
                            targetEle = $$.$nextElementSibling(targetEle);
                        }
                    }
                    break;
                default:
                    // 元素选择器getElementsByTagName,获取的放入arr
                    for (let key in beforeArr) {
                        targetEle = $$.$nextElementSibling(beforeArr[key]);
                        while (targetEle) {
                            if (targetEle.tagName == afterStr.toUpperCase()) {
                                result.push(targetEle);
                            }
                            targetEle = $$.$nextElementSibling(targetEle);
                        }
                    }
                    break;
            }
        }
        return result;
    },
    // selectByTag 通过传入的tag,进入不同的处理器
    $selectByTag:function(content,tag,parent) {
        let result = [];
        switch (tag) {
            case '+':
                if(parent) {
                    for(let i = 0;i<parent.length;i++) {
                        Array.prototype.push.apply(result,$$.$selectorsByAdjacent(content,parent[i]));
                    }
                }else {
                    Array.prototype.push.apply(result,$$.$selectorsByAdjacent(content,undefined));
                }
                break;
            case '>':
                if(parent) {
                    for(let i = 0;i<parent.length;i++) {
                        Array.prototype.push.apply(result,$$.$selectorsByChild(content,parent[i]));
                    }
                }else {
                    Array.prototype.push.apply(result,$$.$selectorsByChild(content,undefined));
                }
                break;
            case '~':
                if(parent) {
                    for(let i = 0;i<parent.length;i++) {
                        Array.prototype.push.apply(result,$$.$selectorsBybrother(content,parent[i]));
                    }
                }else {
                    Array.prototype.push.apply(result,$$.$selectorsBybrother(content,undefined));
                }
                break;
            case ' ':
                if(parent) {
                    for(let i = 0;i<parent.length;i++) {
                        Array.prototype.push.apply(result,$$.$selectorsBySpan(content,parent[i]));
                    }
                }else {
                    Array.prototype.push.apply(result,$$.$selectorsBySpan(content,undefined));
                }
                break;
        }
        return result;
    },
    // nextElementSibling 下一个节点
    $nextElementSibling: function (ele) {
        let targetEle = null;
        if (ele.nextElementSibling) {
            targetEle = ele.nextElementSibling;
        } else if (ele.nextSibling) {
            let x = ele.nextSibling;
            while (x != null && x.nodeType != 1) { // 元素节点的nodeType==1，文本节点、注释节点等不为1
                x = x.nextSibling;
            }
            targetEle = x;
        }
        return targetEle;
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
    },
    // 将两个或多个空格替换为1个
    blank2one: function (str) {
        return str.replace(/\s+/g, ' ')
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


