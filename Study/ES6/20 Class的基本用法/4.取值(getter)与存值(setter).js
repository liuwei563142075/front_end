class Point {
 constructor(x,y) {
     this.x = x;
     this.y = y;
 }

 get getX() {
     return this.x;
 }
 set setX(x) {
     this.x = x;
 }
 get getY() {
     return this.y;
 }
 set setY(y) {
     this.y = y;
 }

}

var point = new Point(10,40);
// getX并不是一个函数？？？？？？
console.log(point.getX);