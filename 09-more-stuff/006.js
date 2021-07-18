let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

/*
function allMatches(words, regEx) {
	 let matchedWords = [];
	 
	 words.forEach(word => {
	 	if (regEx.test(word)) matchedWords.push(word);
	 });
	 
	 return matchedWords;
}
*/

function allMatches(words, regEx) {
	return words.filter(word => regEx.test(word));	
}

console.log(allMatches(words, /lab/));