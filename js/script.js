"use strict";

//Task 1
function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 2) {
        sum += i;
    }
    return sum;
};

console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(9));
console.log(iterativeOddSumTo(10));


//Task 2
function recursiveOddSumTo(number) {
    if (number <= 0) {
        return 0;
    }
    if (number % 2 === 0) {
        return recursiveOddSumTo(number - 1);
    }
    return number + recursiveOddSumTo(number - 2);
}

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(9));
console.log(recursiveOddSumTo(10));


//Task 3
const isXOEqual = (string) => {
    const lowerString = string.toLowerCase();
    let xCount = 0;
    let oCount = 0;

    for (let symbol of lowerString) {
        if (symbol === 'x') {
            xCount++;
        } else if (symbol === 'o') {
            oCount++;
        }
    }
    return xCount === oCount;
}

console.log(isXOEqual("ooxx"));
console.log(isXOEqual("xooxx"));
console.log(isXOEqual("ooxXm"));
console.log(isXOEqual("zpzpzpp"));
console.log(isXOEqual("zzoo")); 
