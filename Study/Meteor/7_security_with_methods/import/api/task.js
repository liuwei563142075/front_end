import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// 第一步：创建任务集合
export const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
    'tasks.insert'(text) {
        console.log(text);
        check(text,String);

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.insert({
            text,
            createdAt:new Date(),
            owner:Meteor.userId(),
            username:Meteor.user().username,
        });
    },
    'tasks.setChecked'(taskId,setChecked) {
        check(taskId,String);
        check(setChecked,Boolean);

        Tasks.update(taskId,{ $set : { checked:setChecked }});
    },
    'tasks.remove'(task) {
        console.log(Meteor.userId());
        console.log(task.owner);
        // 只能删除自己创建的任务
        check(Meteor.userId(),task.owner);
        Tasks.remove(task);
    }
});