let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");

function fullName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}

console.log(`Hello, ${fullName(firstName, lastName)}!`);