"use strict";
// Problem-4: Given an array of strings, create a new array with the first letter of each string.
const words = ["hello", "world", "foo", "bar"];
let firstLetter = [];
function firstLetterArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        firstLetter.push(arr[i].slice(0, 1));
    }
    return firstLetter;
}
console.log(firstLetterArray(words));
