"use strict";

//Task 1
const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];

function byProperty(property, direction) {
    return function compare(a, b) {
        if (direction === '>') {
            if (a[property] < b[property]) return -1;
            if (a[property] > b[property]) return 1;
            return 0;
        } else if (direction === '<') {
            if (a[property] > b[property]) return -1;
            if (a[property] < b[property]) return 1;
            return 0;
        }
    };
}

console.log(movies.slice().sort(byProperty('releaseYear', '>')));
console.log(movies.slice().sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.slice().sort(byProperty('movieName', '>')));



//Task2
function someFunction(x, y) {
    return x + y;
}

function slower(func, seconds) {
    return function (...args) {
        console.log(`Chill out, you will get your result in ${seconds} seconds`);
        setTimeout(() => {
            console.log(func.apply(this, args));
        }, seconds * 1000);
    };
}
let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(3, 4);