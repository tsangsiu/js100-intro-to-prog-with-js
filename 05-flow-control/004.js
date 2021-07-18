function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
The code logs:
Product2
Product3
Product not found!

After executing the code block for the case '113', the program fall through to
execute the codes that follow as there is no break statement.
*/