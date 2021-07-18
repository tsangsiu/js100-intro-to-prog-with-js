/*
** It's better than the original (greeter-original.js) in a way that
** this program groups codes that perform the same task together.
*/

function name(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName  = name('What is your first name?\n');
let lastName = name('What is your last name?\n');
console.log(`Hello, ${firstName} ${lastName}!`);