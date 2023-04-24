// Problem-5: Given an array of numbers, create a new array with only the even numbers.

const numbers = [1, 2, 3, 4, 5];
let even: number[] = [];

function getEvenNumbers(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
  }
  return even;
}

console.log(getEvenNumbers(numbers));

export {};
