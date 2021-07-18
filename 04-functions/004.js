function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/*
The above code will log nothing to the console. The program will stop executing
after reaching the return statement, and thus the statement console.log(words) 
is unreachable.
*/