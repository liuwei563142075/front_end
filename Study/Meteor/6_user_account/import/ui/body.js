// 第三步：从任务集合加载任务
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
// 创建连接到服务器上的缓存
import { Tasks } from '../api/task.js';
import './task.js'
import  './body.html';

// 渲染模板
Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
});

Template.body.helpers({
    tasks() {
        const instance = Template.instance();
        if(instance.state.get('hideCompleted')) {
            return Tasks.find({checked:{$ne:true}},{sort:{createdAt:-1}});
        }
        return Tasks.find({},{sort:{sort:{createdAt:-1}}});
    },
    incompleteCount() {
        return Tasks.find({checked:{$ne:true}}).count();
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
            owner:Meteor.userId(),
            username:Meteor.user().username,
        });
        //清除表格
        target.text.value = '';
    },
    'change .hide-completed input'(event,instance) {
        //console.log(event);
        //console.log(instance);
        instance.state.set('hideCompleted',event.target.checked);
    }
});