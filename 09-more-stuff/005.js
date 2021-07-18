function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
The above program splits the string at the blanks into an array of words. It 
then reverses the array, and returns the length of each word in the array as an
array.
*/