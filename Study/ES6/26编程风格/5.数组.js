/**
 * 1.使用扩展运算符(...)拷贝数组
 * */
var items = [1,2,3,4,5]

// bad
const len = items.length;
const itemsCopy1 = [];

for (let i = 0; i < len; i++) {
    itemsCopy1[i] = items[i];
}

// good  【值拷贝】
const itemsCopy2 = [...items];
console.log(itemsCopy2);
items[2] = 100
console.log(itemsCopy2);

/**
 * 使用Array.from方法，将类似数组的对象转为数组
 * */
const foo = document.querySelectorAll('.foo')
const nodes = Array.from(foo);