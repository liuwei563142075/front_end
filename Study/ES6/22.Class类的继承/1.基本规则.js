/**
 * 子类必须在constructor方法中调用super方法，
 * 否则新建实例时会报错。这是因为子类自己的this对象，
 * 必须先通过父类的构造函数完成塑造，得到与父类同样
 * 的实例属性和方法，然后再对其进行加工，加上子类自
 * 己的实例属性和方法。如果不调用super方法，子类就
 * 得不到this对象。
 * */
class Point {
    constructor(x,y) {

    }
}

class colorPoint extends Point{
    constructor(color,x,y) {
        super(x,y);
        this.color = color;
    }
}

// 如果子类没有显示声明构造函数，则构造函数将会被默认添加
//constructor(...args) {
//     super(...args);
//   }

var greenPoint = new colorPoint('green',10,10);
console.log(greenPoint instanceof colorPoint);
console.log(greenPoint instanceof colorPoint);
