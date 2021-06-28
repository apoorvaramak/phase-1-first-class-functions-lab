// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(0,2); 
}

const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(arrayOfDrivers.length-2, arrayOfDrivers.length);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    return function(fare){
       return fare * number; 
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare); 
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare); 
}

function selectDifferentDrivers(drivers, funct){
    return funct(drivers); 
}
