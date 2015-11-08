/* 1.1 Implement an algorithm to determine if a string has all unique characters. What if you 
	can not use additional data structures? */

var string1 = "this is a string with duplicates."
var string2 = "abcdefgh"

var bitwiseAnswer = function(array) {
	var bitw = 0;
	for(var i = 0; i < array.length; i++) {
		var val = array.charCodeAt(i) - 97;
		if((bitw & (1 << val)) > 0) {return false;}
		bitw |= (1 << val);
	}
	return true;
}

var arrayAnswer = function(array) {
	var arr = new Array(256).fill(false);
	for(var i = 0; i < array.length; i++) {
		var val = array.charCodeAt(i);
		if(arr[val]) { return false;}
		arr[val] = true;
	}	
	return true;
}

var nlognAnswer = function(array) {
	array = array.split('').sort();
	console.log(array)
	for(var i = 0; i < array.length - 1; i++) {
		if(array[i] === array[i+1]) { return false;}
	}
	return true;
}

var n2Answer = function(array) {
	array = array.split('');
	for(var i = 0; i < array.length; i++) {
		for(var j = i+1; j < array.length; j++) {
			if(array[i] === array[j]) {return false;}
		}
	}
	return true;
}

console.log(arrayAnswer(string1))
console.log(arrayAnswer(string2))