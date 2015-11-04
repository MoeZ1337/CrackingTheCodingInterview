/* 1.3 Design an algorithm and write code to remove the duplicate characters in a string
	without using any additional buffer. NOTE: One or two additional variables are fine.
	An extra copy of the array is not.

	FOLLOW UP
	Write the test cases for this method. 
	'aaaa' // all the same characters
	'ababa' // repeating characters
	'abcde' // all unique characters
	'1210$$%A*dDDE' // various ASCII characters
	*/

var str = 'this is a test!';

doubleLoopRemoveDups = function(string) {
	var charArr = string.split('');
	for(var i = 0; i < charArr.length; i++) {
		for(var j = i+1; j < charArr.length; j++) {
			if(charArr[i] === charArr[j]) {
				charArr.splice(j,1);
				j--;
			}
		}
	}
	return charArr.join('');
}

// Misses space character
sortRemoveDups = function(string) {
	var charArr = string.split('').sort();
	for(var i = 0; i < charArr.length - 1; i++) {
		if(charArr[i] === charArr[i+1]) {
			charArr.splice(i+1,1);
			i--;
		}
	}
	return charArr.join('');
}

tailRemoveDups = function(string) {
	var charArr = string.split('');
	var tail = 1;
	var unique;
	for(var i = 1; i < charArr.length; i++) {
		unique = true;
		for(var j = 0; j < tail; j++) {
			console.log(charArr[i] + ' ?== ' + charArr[j]);
			if(charArr[i] === charArr[j]) {
				unique = false;
				break;
			}
		}
		if(unique) {
			charArr[tail] = charArr[i];
			tail++;
		}
	}
	return charArr.join('').substr(0,tail);
}