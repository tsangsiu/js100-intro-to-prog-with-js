let number = 4936;
let onesPlace = number % 10;
let tensPlace = ((number - onesPlace) / 10) % 10;
let hundredsPlace = (((number - onesPlace) / 10) - tensPlace) / 10 % 10;
let thousandsPlace = ((((number - onesPlace) / 10 - tensPlace) / 10 ) - hundredsPlace) / 10 % 10;

console.log(onesPlace);
console.log(tensPlace);
console.log(hundredsPlace);
console.log(thousandsPlace);