"use strict";

//Task 1
function durationBetweenDates(startDateStr = '01 Jan 1995', endDateStr = '01 Jan 1998', unit = 'days') {
    let startDate = new Date(startDateStr);
    let endDate = new Date(endDateStr);

    const unitFactors = {
        seconds: 1000,
        minutes: 1000 * 60,
        hours: 1000 * 60 * 60,
        days: 1000 * 60 * 60 * 24
    };

    const difference = Math.abs(endDate - startDate) / unitFactors[unit];

    return `${difference} ${unit}`;
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'


//Task 2
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    return [...new Set(array)];
}

console.log(filterUnique(userNames)); 