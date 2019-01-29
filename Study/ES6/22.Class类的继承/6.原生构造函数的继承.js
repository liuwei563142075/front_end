/**
 * (1)原生构造函数
 * Boolean()
 * Number()
 * String()
 * Array()
 * Date()
 * Function()
 * RegExp()
 * Error()
 * Object()
 * */

// ES6之前不能继承原生的构造类,ES6允许
class myArray extends Array {

}

var myarr = new myArray();
myarr.push(1);
myarr.push(1);
console.log(myarr.length);

// 案例：一个带有版本功能的数组
class VersioneArray extends Array {
    constructor() {
        super();
        this.history = [[]];
    }
    commit() {
        this.history.push(this.slice());
    }
    revert() {
        this.splice(0,this.length,...this.history[this.history.length-1]);
    }
}
var versioneArray = new VersioneArray();
versioneArray.push(1);
versioneArray.push(2);
versioneArray.push(3);
console.log(versioneArray.history);
versioneArray.commit()
console.log(versioneArray.history);
versioneArray.push(4);
versioneArray.push(5);
versioneArray.push(6);
versioneArray.commit()
console.log(versioneArray.history);
versioneArray.revert()
console.log(versioneArray.history);


/**
 * (2)注意，继承Object的子类，有一个行为差异
 */
class NewObj extends Object {
    constructor() {
        super(...arguments);
    }
}
var o = new NewObj({attr:true});
console.log(o.attr === true);
//上面代码中，NewObj继承了Object，
// 但是无法通过super方法向父类Object传参。
// 这是因为 ES6 改变了Object构造函数的行
// 为，一旦发现Object方法不是通过
// new Object()这种形式调用，ES6 规
// 定Object构造函数会忽略参数。



