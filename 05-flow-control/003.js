function evenOrOdd(number) {
  if (parseInt(number, 10) !== Number(number)) {
    console.log('The inputted number is not an integer');
    return;
  } else {
    number % 2 === 0 ? console.log('even') : console.log('odd');
  }
}