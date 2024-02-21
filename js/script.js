"use strict";

//Task 1
detonatorTimer(3);
function detonatorTimer(delay) {
    let intervalId = setInterval(() => {
        if (delay > 0) {
            console.log(delay);
            delay--;
        } else {
            clearInterval(intervalId);
            console.log('BOOM!');
        }
    }, 1000);
}


//Task 2
detonatorTimer(3);
function detonatorTimer(delay) {
    function countDown() {
        console.log(delay);
        delay--;

        if (delay > 0) {
            setTimeout(countDown, 1000);
        } else {
            console.log('BOOM!');
        }
    }
    countDown();
}


//Task 3 & 4
let car = {
    brand: 'Suzuki',
    model: 'Vitara',
    year: 2024,
    color: 'grey',
    fuelType: 'petrol',
    mileage: 1000,
    isAutomatic: true,
    isInsured: true,
    startEngine: () => {
        console.log(`The ${car.brand} ${car.model} engine started.`);
    },
    accelerate: (speed) => {
        console.log(`The ${car.brand} ${car.model} accelerated to ${speed} km/h.`);
    },
    checkFuel: () => {
        console.log(`The ${car.brand} ${car.model} has enough fuel.`);
    },
    getInsuranceStatus: () => {
        console.log(`The ${car.brand} ${car.model} ${car.isInsured ? 'is' : 'is not'} insured.`);
    }
};

car.startEngine();
car.accelerate(60);
car.checkFuel();
car.getInsuranceStatus();

let securedStartEngine = car.startEngine.bind(car);
let securedAccelerate = car.accelerate.bind(car);
let securedCheckFuel = car.checkFuel.bind(car);
let securedGetInsuranceStatus = car.getInsuranceStatus.bind(car);

setTimeout(securedStartEngine, 1000);
setTimeout(() => securedAccelerate(60), 2000);
setTimeout(securedCheckFuel, 3000);
setTimeout(securedGetInsuranceStatus, 4000);