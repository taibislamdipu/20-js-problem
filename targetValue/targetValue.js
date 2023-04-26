"use strict";
// Problem-10: Given an array of integers, find two numbers that add up to a target value.
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [11, 2, 15, 7, 3];
const target = 14;
function findTwoNumbersThatAddUpToTarget(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [arr[i], arr[j]];
            }
        }
    }
}
console.log(findTwoNumbersThatAddUpToTarget(numbers));
