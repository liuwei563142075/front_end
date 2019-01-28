//需要注意的是，这个类的名字是MyClass而不是Me，
// Me只在 Class 的内部代码可用，指代当前类。
// 当然，如果用不到Me，可以将其省略
// const Bar = class{}

const Bar = class Me {
    constructor(width,height) {
        //...
    }

    getClassName() {
        console.log(Me);
        return Me.name;
    }
}

var bar = new Bar();
console.log(bar.getClassName());
// console.log(Me.name);


// 立即执行类
var pie = new class {
    constructor(r) {
        this.r = r;
    }
    getArea() {
        return Math.PI*this.r*this.r;
    }
}(10);
console.log(pie.getArea());

