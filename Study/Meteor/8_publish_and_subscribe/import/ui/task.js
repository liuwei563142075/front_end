import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './task.html'

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
    }
});