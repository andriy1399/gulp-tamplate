'use strict';

function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let p1 = new Person('Ivan', 'Ivanov');
console.log(p1);
