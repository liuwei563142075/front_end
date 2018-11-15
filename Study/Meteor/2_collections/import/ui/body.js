// 第三步：从任务集合加载任务

import { Template } from 'meteor/templating';
// 创建连接到服务器上的缓存
import { Tasks } from '../api/task.js';

import  './body.html';

// 渲染模板
Template.body.helpers({
    tasks() {
        console.log(Tasks);
        // 拿到集合对象，查询数据
        return Tasks.find({});
    }
});