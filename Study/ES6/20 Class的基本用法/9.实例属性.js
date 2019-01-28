/**
 * 实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。
 * */
// class Point {
//     __count__ = 0;
//     constructor(x,y) {
//         this.x = x;
//         this.y = y;
//     }
//     getArea() {
//         this.__count__++;
//         return Math.PI*this.x*this.y;
//     }
//     getCount() {
//         return this.__count__;
//     }
// }
// var c = new Point(10,20);
// console.log(c.__count__);

// class IncreasingCounter {
//     _count = 0;
//     get value() {
//         console.log('Getting the current value!');
//         return this._count;
//     }
//     increment() {
//         this._count++;
//     }
// }
// var c = new IncreasingCounter();
// console.log(c.value);
