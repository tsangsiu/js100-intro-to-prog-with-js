let array1 = [1, 2, undefined, 4];  // [1, 2, undefined, 4], array1.length = 4

let array2 = [1];
array2.length = 5;  // [1, <4 empty items>], array2.length = 5

let array3 = [];
array3[-1] = [1];  // ['-1': [1]], array3.length = 1 X

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;  // [1, 2, 3], array4.length = 3

let array5 = [];
array5[100] = 3;  // [<100 empty items>, 3], array5.length = 101

console.log(array1); console.log(array1.length);
console.log(array2); console.log(array2.length);
console.log(array3); console.log(array3.length);
console.log(array4); console.log(array4.length);
console.log(array5); console.log(array5.length);