import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './task.html'

//定义将任务设置为私有【自定义方法】
Template.task.helpers({
    isOwner() {
        return this.owner === Meteor.userId();
    }
});

// 事件 ==》 应该是遍历注册事件。
Template.task.events({
    'click .toggle-checked'(){
        /*Tasks.update(this._id,{
            $set:{checked:!this._id},
        });*/
        Meteor.call('tasks.setChecked',this._id, !this.checked);
    },
    'click .delete'() {
        // Tasks.remove(this._id);
        // console.log(this);
        Meteor.call('tasks.remove',this);
    },
    'click .toggle-private'() {
        Meteor.call('tasks.setPrivate',this._id,!this.private);
    }
});