{
  let foo = 'bar';
}

console.log(foo);

/*
The above program will raise a reference error. Variables defined by the let 
keyword is block-scoped, meaning the variable is not accessible outside the 
block. As console.log tries to log a variable that is defined in a block to the
console, the program will raise a reference error.
*/