/* 1.4 Write a method to decide if two strings are anagrams or not. */

var anagramCompare = function(string1, string2) {
	string1 = string1.replace(/[^a-z0-9]/gi,'');
	string2 = string2.replace(/[^a-z0-9]/gi,'');

	if(string1.length !== string2.length) { 
		return false;
	} else {
		var letterMap = {};
		for(var i = 0; i < string1.length; i++) {
			if(typeof letterMap[string1.charAt(i)] !== "undefined") {
				letterMap[string1.charAt(i)] += 1;
			} else {
				letterMap[string1.charAt(i)] = 1;
			}
			if(typeof letterMap[string2.charAt(i)] !== "undefined") {
				letterMap[string2.charAt(i)] -= 1;
			} else {
				letterMap[string2.charAt(i)] = -1;
			}
		}

		var anagram = true;

		Object.keys(letterMap).forEach(function(key) {
			console.log(letterMap[key]);
			if(letterMap[key] !== 0) {anagram = false}
		})

		return anagram;
	}
}