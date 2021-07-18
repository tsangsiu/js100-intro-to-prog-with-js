function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;
do {
  result = randomNumberBetween(1, 6);
  tries++;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');