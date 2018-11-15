// 第三步：从任务集合加载任务

import { Template } from 'meteor/templating';
// 创建连接到服务器上的缓存
import { Tasks } from '../api/task.js';
import './task.js'
import  './body.html';

// 渲染模板
Template.body.helpers({
    tasks() {
        console.log(Tasks);
        // 拿到集合对象，查询数据
        return Tasks.find({}, { sort: { createdAt: -1 } });
    }
});

Template.body.events({
    'submit .new-task'(event) {
        //阻止默认浏览器表单提交
        event.preventDefault();
        //从表单元素中获取值
        const target = event.target;
        const text = target.text.value;
        //将任务插入集合中
        Tasks.insert({
            text,
            createAt:new Date(),
        });
        //清除表格
        target.text.value = '';
    }
});