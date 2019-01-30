import { autobind } from 'core-decorators';
// core-decorators.js是一个第三方模块，提供了常见的修饰器。
// require('core-decorators');


class Person {
    @autobind
    getPerson() {
        return this;
    }
}

let person = new Person();
let getPerson = person.getPerson;

console.log(getPerson() === person);;
// true
