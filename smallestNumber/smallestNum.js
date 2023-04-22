"use strict";
// Problem-1: Given an array of numbers, find the smallest number.
const numbers = [4, 2, 7, 1, 8];
function smallestNum(arr) {
    const smallest = Math.min(...arr);
    return smallest;
}
console.log(smallestNum(numbers));
