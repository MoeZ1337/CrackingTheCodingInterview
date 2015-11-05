/* Assume you have a method isSubstring which checks if one word is a substring of
	another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using 
	only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”). */

	isSubstring = function(sub,str) {
		return str.includes(sub);
	}

	// This one kinda seems to defeat the purpose...keep looking.
	// Especially wrong if the idea is to only have one boolean with isSubstring and nothing else.
	// Check index of first letter of s1 in s2
	// Call isSubstring on that index to the length of s2
	// If true, check if substring(i to length) + substring(0 to i) === s1
	isRotationAttempt1 = function(s1,s2) {
		var rotateStart = s2.indexOf(s1.charAt(0))
		if(s1.length === s2.length && rotateStart !== -1) {
			var sub = s2.substr(rotateStart,s2.length);
			if(isSubstring(sub,s1)) {
				return (sub + s2.substr(0,rotateStart)) === s1;
			}
		}

		return false;
	}

	// combining the first string with itself gives all possible rotations
	isRotationAttempt2 = function(s1,s2) {
		return isSubstring(s2,s1+s1);
	}