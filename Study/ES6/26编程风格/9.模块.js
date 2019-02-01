/**
 * 首先，Module语法时JavaScript模块的标准写法，坚持
 * 使用这种写法。使用import取代require.
 * */

// bad
const moduleA = requie('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// good
import { func1,func2 } from 'moduleA';

/**
 * 使用export取代module.exports。
 * */
// commonJS写法
var React = require('react');
var Breadcrumbs = React.createClass({
    render() {
        return '<nav />';
    }
});
module.exports = Breadcrumbs;

//ES6写法
import React from 'react';
class Breadcrumbs extends React.Component {
    render() {
        return '<nav />';
    }
}
export default Breadcrumbs;

/**
 * 如果模块默认输出一个函数，函数名的首字母应该小写。
 * 如果模块默认输出一个对象，对象名的首字母应该大写。
 * */
