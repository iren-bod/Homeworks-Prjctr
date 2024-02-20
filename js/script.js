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
    const updatedPriceData = Object.entries(data).map(([key, value]) => [key.toLowerCase(), parseFloat(value).toFixed(2)]);
    return Object.fromEntries(updatedPriceData);
};

console.log(optimizer(priceData));



//Task 3
//1 Фільтрування через умовну конструкцію всередині методу перебора (forEach):
const userNames = ["Петро", "Емма", "Юстин", "Ілля", "Марта", "Яна", "Василь", "Антон", "Олена"];
let filteredNames = [];
userNames.forEach(name => {
    const firstLetter = name[0].toLowerCase();
    if (["а", "е", "є", "и", "і", "о", "у", "ю", "я", "ї"].includes(firstLetter)) {
        filteredNames.push(name);
    }
});
console.log(filteredNames);

//2 Фільтрування через вбудований метод масивів для фільтрації
const userNames = ["Петро", "Емма", "Юстин", "Ілля", "Марта", "Яна", "Василь", "Антон", "Олена"];
let filteredNames = userNames.filter(name => {
    const firstLetter = name[0].toLowerCase();
    return ["а", "е", "є", "и", "і", "о", "у", "ю", "я", "ї"].includes(firstLetter);
});
console.log(filteredNames);



//Task 4
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.map(name => {
    const parts = name.split(" ");
    const firstLetters = parts.map(part => part[0]).join(".");
    return firstLetters;
});
initials.sort();
console.log(initials);



//Task 5
function sortArray(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }
    arr.sort((a, b) => a - b);
    return arr;
}

console.log(sortArray([1, 12, 10, 50, 5]));
console.log(sortArray(null)); 