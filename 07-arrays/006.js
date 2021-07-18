let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array){
  return array.map(element => element.length).filter(element => element % 2 == 1);
}

console.log(oddLengths(arr));   // => [1, 5, 3]