let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
This code will log 1 to the console. Executing the foo funcion will not affect
the output. It is because the scope of the variable bar defined in the function 
block is within that block. Outside that block, the variable is not accessable.

*/