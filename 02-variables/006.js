const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
This program will not produce an error when run. As the two const variables are
separate entities, no error occurs.
*/