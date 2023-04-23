// Problem-3: Given an array of numbers, find the sum of all numbers.

const numbers = [1, 2, 3, 4, 5];

function arraySum(arr: number[]) {
  const sum = arr.reduce((current, sum) => current + sum, 0);
  return sum;
}

console.log(arraySum(numbers));

export {};
