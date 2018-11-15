###1_templates
创建项目时，你会发现package.json中包含一些项目信息。

client:
    所有的文件都是为了页面
    -main.js将渲染过的子模块引入到主模块上

server:
    所有的文件都是为了服务页面

import:
    页面的子模块
    -body.html定义子模块模板
    -body.js拿到子模块模板，渲染子模块
