function isNotANumber(value) {
	value = value.toString();
	
	if (value === 'NaN') return true;
	else return false;
}

console.log(isNotANumber(NaN));

/*
function isNotANumber(value) {
	return value !== value;  // NaN is the only value in JS that does not equal to itself
}
*/