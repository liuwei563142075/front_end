###Meteor使用用户登陆模块
###启用临时UI
meteor add reactive-dict
###启用用户登陆注册
meteor add accounts-ui accounts-password
###删除项目初始化时的赋予用户的任何权限
meteor remove insecure

###自定义权限
使用方法，在方法内验证用户是否有操作权限
import/api/task.js

###事件调用方法
\import\ui\task.js
\import\ui\body.js