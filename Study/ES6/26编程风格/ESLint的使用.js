/**
 * ESLint是什么？
 * ESLint是一个语法规则和代码风格的检查工具，可以
 * 用来保证写出语法正确，风格统一的代码。
 * */
// 1.安装ESLint
// $ npm i -g eslint

// 2.安装Airbnb语法规则，以及import,aly,react插件
// npm i -g eslint-config-airbnb
// npm i -g eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

// 3.最后，在项目的根目录下新建一个.eslintrc文件，配置ESLint
// {
//     "extends":"eslint-config-airbnb"
// }

// 现在就可以检查，当前项目的代码是否符合预设的规则。

// index.js文件的代码如下。

// var unusued = 'I have no purpose!';
//
// function greet() {
//     var message = 'Hello, World!';
//     alert(message);
// }
//
// greet();
//使用 ESLint 检查这个文件，就会报出错误。

//D:\前端\Study\ES6\26编程风格>eslint index.js

// 1:1   error    Unexpected var, use let or const instead         no-var
//     1:5   error    'unusued' is assigned a value but never used     no-unused-vars
// 1:36  error    Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
// 2:1   error    Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
// 3:19  error    Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
// 4:1   error    Expected indentation of 2 spaces but found 4     indent
// 4:5   error    Unexpected var, use let or const instead         no-var
//     4:35  error    Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
// 5:1   error    Expected indentation of 2 spaces but found 4     indent
// 5:5   warning  Unexpected alert                                 no-alert
// 5:5   error    'alert' is not defined                           no-undef
// 5:20  error    Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
// 6:2   error    Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
// 7:1   error    Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
// 8:9   error    Newline required at end of file but not found    eol-last
//
// ✖ 15 problems (14 errors, 1 warning)
// 12 errors and 0 warnings potentially fixable with the `--fix` option.

// 上面代码说明，原文件有五个错误，其中两个是不应该使用var命令，而
// 要使用let或const；一个是定义了变量，却没有使用；另外两个是行首
// 缩进为 4 个空格，而不是规定的 2 个空格。