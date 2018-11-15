import { Mongo } from 'meteor/mongo';

// 第一步：创建任务集合
export const Tasks = new Mongo.Collection('tasks');