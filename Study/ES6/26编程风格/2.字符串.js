/**
 * 静态字符串一律使用单引号或反引号，不使用双引号。
 * 动态字符串使用反引号。
 * */

// 坏的用法习惯：
const a = "foobar";
const b = 'foo' + a + 'bar';

// 可接受的
const c = `foobar`;


// good
const a = `foobar`;
const b = `foo${a}bar`