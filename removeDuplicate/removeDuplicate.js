"use strict";
// Problem-9: Given an array of numbers, remove all duplicates.
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 2, 3, 1];
let unique = [];
function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        if (!unique.includes(array[i])) {
            unique.push(array[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(numbers));
