下载nodejs
查看nodejs是否安装成功：在nodejs目录下shift+右键在此处调出命令行输入：node.exe -v
查看npm版本：npm.cmd -v
执行：npm install -g less初始化less
然后配置一下nodejs的环境变量，以用来在任何地方使用nodejs命令


less是css的超类，在页面中无法直接使用，需要编译成css文件才行。
安装nodejs主要目的是编译less文件，一般是在项目结束时编译less文件。
    lessc bootstrap.less bootstrap.css
但是在项目实时开发中这就太麻烦了，每次修改一点内容就要编译，而且不利于微调试。
less在项目实时开发中提供了另外一种方式：引入less.js文件的形式
1.先引入你编写的***.less文件，一定要加rel指定为less
    <link rel="stylesheet/less" type="text/css" href="styles.less" />
2.引入less.js
    <script src="less.js" type="text/javascript"></script>