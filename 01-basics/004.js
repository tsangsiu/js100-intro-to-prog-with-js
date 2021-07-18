console.log('5' + 10);

/*
The above code logs '510' instead of 15. It is because when either or both sides
of the '+' sign is of string type. Javascript will coerce non-string operand 
to string type and perform string concatenation.
*/