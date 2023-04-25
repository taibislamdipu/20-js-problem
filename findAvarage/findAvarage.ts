// Problem-7: Given an array of numbers, find the average.

const numbers = [1, 2, 3, 4, 5];

function findAverage(arr: number[]) {
  const sum = arr.reduce((cur, sum) => cur + sum, 0);
  const total = arr.length;
  const average = sum / total;
  return average;
}

console.log(findAverage(numbers));

export {};
