// Problem-8: Given an array of strings, sort them in alphabetical order.

const strings = ["avijit", "hello", "world", "world", "foo", "bar"];

function sortString(arr: string[]) {
  const newArray = arr.sort();
  return newArray;
}

console.log(sortString(strings));

// Output: ['avijit', 'bar', 'foo', 'hello', 'world' ]
