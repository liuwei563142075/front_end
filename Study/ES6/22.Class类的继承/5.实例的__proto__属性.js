/**
 * 子类实例的__proto__属性的__proto__属性，指向父类实例
 * 的__proto__属性。也就是说，子类的原型的原型，是父类的原型。
 */
class Point {
    constructor(x,y){}
}
class ColorPoint extends Point{
    constructor(color,x,y){
        super(x,y);
    }
}

var p1 = new Point(2,3);
var p2 = new ColorPoint('red',2,3);
console.log(p2.__proto__===p1.__proto__);
console.log(p2.__proto__.__proto__===p1.__proto__);