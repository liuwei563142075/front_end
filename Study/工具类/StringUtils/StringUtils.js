/**
 * 作者：liuwei
 * 开发日期：2018/12/17
 * 描述：字符串的常用操作
 * 版权所有 违者必究
 */
class StringUtils {

    //去除左边空格
    ltrim(str) {
        return str.replace(/(^\s*)/g, '');
    }

    //去除右边空格
    rtrim(str) {
        return str.replace(/(\s*$)/g, '');
    }

    //去除空格
    trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

    //简单的数据绑定formateString[匹配所有用(包裹起来的元素并替换)]
    formateString(str, data) {
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            return typeof data[key] === "undefined" ? '' : data[key]
        });
    }

    //arttemplate[请先引入artTemplate]
    bindTemplate(data, Template) {
        var html = template(Template, data);
        return html
    }

    //使用artTemplate模板绑定数据
    // str：拼接的html 字符串
    // data：数据
    artTemplate(str, data) {
        var render = template.compile(str);
        return render(data)
    }
}

//在框架中实例化，这样外面使用的使用就不用实例化了
StringUtils = new StringUtils();

