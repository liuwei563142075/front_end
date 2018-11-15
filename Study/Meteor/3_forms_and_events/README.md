###Meteor事件书写方式

Template.body.events({
    // 事件 类名/id （事件对象）
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