"use strict";

//Task 1
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((accumulator, currentNumber) => accumulator * currentNumber, 1);

console.log(productOfArray);



//Task 2
const priceData = {
    Apples: "23.4",
    BANANAS: "48",
    oRAngGEs: "48.7584",
};

function optimizer(data) {
    return Object.fromEntries(Object.entries(data).map(([key, value]) => [key.toLowerCase(), parseFloat(value).toFixed(2)]));
};

console.log(optimizer(priceData));



//Task 3
const vowels = ['а', 'е', 'є', 'и', 'і', 'о', 'у', 'ю', 'я', 'ї'];
const userNames = ["Петро", "Емма", "Юстин", "Ілля", "Марта", "Яна", "Василь", "Антон", "Олена"];
let filteredNames = [];

//1 Фільтрування через умовну конструкцію всередині методу перебора (forEach):
userNames.forEach(name => {
    if (vowels.includes(name[0].toLowerCase())) {
        filteredNames.push(name);
    }
});
console.log(filteredNames);

//2 Фільтрування через вбудований метод масивів для фільтрації
let filteredNames = userNames.filter(name => {
    return vowels.includes(name[0].toLowerCase());
});
console.log(filteredNames);



//Task 4
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.map(name => name.split(" ").map(part => part[0]).join(".")).sort()
console.log(initials);



//Task 5
function sortArray(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }
    const sortedArray = arr.slice().sort((a, b) => a - b);
    return sortedArray;
}

console.log(sortArray([1, 12, 10, 50, 5]));
console.log(sortArray(null)); 