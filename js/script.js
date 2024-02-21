"use strict";

//Task 1
console.log(addThemAll(2, 4));
console.log(addThemAll(1, 2, 3, 4));
console.log(addThemAll(5, 5, 10));

function addThemAll(...args) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}


//Task 2
console.log(multiply(5)(5));
console.log(multiply(2)(-2));
console.log(multiply(4)(3));

function multiply(a) {
    return function (b) {
        return a * b;
    }
}