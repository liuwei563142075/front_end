/**
 * 作者：传智播客教育集团
 * 开发日期：2015/12/25
 * 描述：通用框架
 * 版权所有 违者必究
 */

//定义一个对象 - 名字是$
var $$ = function() {};
//第二种写法
$$.prototype = {
    $id:function(id){
        return document.getElementById(id)
    },
    //去除左边空格
    ltrim:function(){
        return str.replace(/(^\s*)/g,'');
    },
    //去除右边空格
    rtrim:function(){
        return str.replace(/(\s*$)/g,'');
    },
    //去除空格
    trim:function(){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //简单的数据绑定formateString
    formateString:function(str, data){
    return str.replace(/@\((\w+)\)/g, function(match, key){
        return typeof data[key] === "undefined" ? '' : data[key]});
},
    //arttemplate
    bindTemplate:function (data, Template) {
        var html = template(Template, data);
        return html
    },
    //使用artTemplate模板绑定数据
    // str：拼接的html 字符串
    // data：数据
    artTemplate:function (str,data){
        var render = template.compile(str);
        return render(data)
    }
}
//在框架中实例化，这样外面使用的使用就不用实例化了
$$ = new $$();

