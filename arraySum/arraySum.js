"use strict";
// Problem-3: Given an array of numbers, find the sum of all numbers.
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5];
function arraySum(arr) {
    const sum = arr.reduce((current, sum) => current + sum, 0);
    return sum;
}
console.log(arraySum(numbers));
