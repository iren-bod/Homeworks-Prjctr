"use strict";

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

let updatedPriceData = {};

for (const key in priceData) {
    const lowerCaseKey = key.toLowerCase();
    const roundedPrice = Number(priceData[key]).toFixed(2);
    updatedPriceData[lowerCaseKey] = roundedPrice;
}

console.log(updatedPriceData);