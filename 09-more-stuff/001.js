let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/*
The above code will log [1, 4, 3] to the console. It's because both variables
array1 and array2 reference the same array. When we change array1, we also 
change array2.
*/