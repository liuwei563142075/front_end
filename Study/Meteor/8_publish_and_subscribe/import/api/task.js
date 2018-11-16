import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// 第一步：创建任务集合
export const Tasks = new Mongo.Collection('tasks');

// 为任务添加发布
if(Meteor.isServer) {
    // this code only runs on server
    Meteor.publish('tasks',function tasksPublication() {
        return Tasks.find({
            $or:[// where private != true or owner == this.userId
                { private : {$ne:true} },
                { owner : this.userId },
            ]
        });
    });
}

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

        const task = Tasks.findOne(taskId);
        if(task.private && task.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized')
        }
        Tasks.update(taskId,{ $set : { checked:setChecked }});
    },
    'tasks.remove'(task) {
        if(task.private && task.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        Tasks.remove(task);
    },
    'tasks.setPrivate'(taskId,setToPrivate) {
        check(taskId,String);
        check(setToPrivate,Boolean);

        const task = Tasks.findOne(taskId);

        // Make sure the task owner can make a task private
        if(task.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        Tasks.update(taskId, { $set: { private: setToPrivate } });
    }
});