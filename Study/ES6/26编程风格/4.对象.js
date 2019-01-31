/**
 * 1.单行定义的对象，最后一个成员不以逗号结尾。
 * 多行定义的对象，最后一个成员以逗号结尾
 * */
// bad
const a = {k1:'v1',k2:'v2',};
const b = {
    k1:'v1',
    k2:'v2'
}

// good
const c = {k1:'v1',k2:'v2'};
const d = {
    k1:'v1',
    k2:'v2',
}

/**
 * 2.对象尽量静态化，一旦定义，就不得随意添加新的属性。
 * 如果添加属性不可避免，要使用object.assign方法
 * */
// bad
const a = {};
a.x = 3;

// if reshap unavoidable
const a = {};
Object.assign(a,{x:3});

// good
const a = { x:null };
a.x = 3;

/**
 * 4.对象的属性和方法，尽量采用简洁表达式，这样易于描述和书写
 * */
var ref = 'some value';

// bad
const atom = {
    ref:ref,
    value:1,
    addValue:function(value) {
        return atom.value + value;
    }
}
// good
const atom = {
    ref,
    value:1,
    addValue(value) {
        return atom.value + value;
    }
}

