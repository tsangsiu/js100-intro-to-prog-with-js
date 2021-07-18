let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*
The above code causes an infinite loop.

The reason is due to the execution condition in the while statement. That is an
assignment statement instead of a comparison statement. For every loop, counter
is always equal to 1, a truthy value. The break statement is unreachable, which 
causes an infinite loop.
*/ 