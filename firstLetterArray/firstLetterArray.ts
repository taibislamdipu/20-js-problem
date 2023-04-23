// Problem-4: Given an array of strings, create a new array with the first letter of each string.

const words: string[] = ["hello", "world", "foo", "bar"];
let firstLetter: string[] = [];

function firstLetterArray(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    firstLetter.push(arr[i].slice(0, 1));
  }
  return firstLetter;
}

console.log(firstLetterArray(words));
