/**
 * Object.getPrototypeOf()方法可以用来从子类上获取父类。
 * 因此，可以使用这个方法判断，一个类是否继承了另一个类。
 */

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

var greenPoint = new colorPoint('green',10,10);
console.log(Object.getPrototypeOf(colorPoint));