let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array){
  return array.reduce(function(accumulator, element){
    if (element.length % 2 === 1) accumulator.push(element.length);
    return accumulator;
  }, []);
}

console.log(oddLengths(arr));   // => [1, 5, 3]