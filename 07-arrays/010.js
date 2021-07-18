let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

let output = arr.map(function(array){
  return array.map(function(element){
    if (element === 6) return 606;
    else return element;
  });
});

console.log(output);