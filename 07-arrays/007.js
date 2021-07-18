let array = [3, 5, 7];

function sumOfSquares(array){
  return array.reduce(function(accumulator, element){
    return accumulator + element * element;
  });
}

console.log(sumOfSquares(array));