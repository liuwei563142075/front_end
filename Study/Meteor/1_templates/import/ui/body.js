// 引入模板引擎
import { Template } from 'meteor/templating';
// 引入模板
import './body.html';
// 渲染模板
Template.body.helpers({
    tasks: [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' },
    ],
});