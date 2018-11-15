import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './task.html'

Template.task.events({
    'click .toggle-checked'(){
        Tasks.update(this._id,{
            $set:{checked:!this._id},
        });
    },
    'click .delete'() {
        Tasks.remove(this._id);
    }
});