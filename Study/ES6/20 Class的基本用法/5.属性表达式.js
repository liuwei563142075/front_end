// 类的属性名，可以采用表达式。
let methodName = 'getArea';

class Bar {
    constructor(width,height) {
        //...
    }

    [methodName]() {
        //...
    }
}
//上面代码中，Bar类的方法名getArea，是从表达式得到的。