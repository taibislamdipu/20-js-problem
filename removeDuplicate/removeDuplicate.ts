// Problem-9: Given an array of numbers, remove all duplicates.

const numbers = [1, 2, 3, 4, 2, 3, 1];
let unique: number[] = [];

function removeDuplicates(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates(numbers));

// output: [1,2,3,4]
export {};
