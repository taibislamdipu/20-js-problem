"use strict";
// Problem-5: Given an array of numbers, create a new array with only the even numbers.
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5];
let even = [];
function getEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    return even;
}
console.log(getEvenNumbers(numbers));
