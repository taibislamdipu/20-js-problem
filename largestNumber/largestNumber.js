"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Problem-2: Given an array of numbers, find the largest number.
const numbers = [1, 2, 10, 3, 4, 5];
function largest(arr) {
  const max = Math.max(...arr);
  return max;
}
console.log(largest(numbers));
