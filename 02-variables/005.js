let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
The program will log 'bar' to the console. Variables defined in a block is 
block-scoped, they cannot be accessed outside the block.
*/