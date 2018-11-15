###Meteor使用用户登陆模块
###启用临时UI
meteor add reactive-dict
###启用用户登陆注册
meteor add accounts-ui accounts-password


直接在页面中使用：
{{> loginButtons}}
即可添加用户登陆注册模块

{{#if currentUser}}
    <form class="new-task">
        <input type="text" name="text" placeholder="Type to add new tasks" />
    </form>
{{/if}}
只有注册的用户【会员】才能浏览