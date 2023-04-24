// Problem-6: Given an array of strings, find the longest string.

const names = ["boo", "bangladesh", "foo", "india", "united stated"];
let longestString: string = names[0];

function findLongestString(arr: string[]) {
  for (let i = 0; i < names.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}

console.log(findLongestString(names));
