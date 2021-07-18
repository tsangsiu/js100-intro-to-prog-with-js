function isNegativeZero(value) {
	if (1 / value === -Infinity) return true;
	else return false;
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));