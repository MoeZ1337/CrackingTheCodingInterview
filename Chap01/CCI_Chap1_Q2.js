/* 1.2 Write code to reverse a C-Style String. (C-String means that “abcd” is represented as
	five characters, including the null character.) */

var str = 'This is a test!'; //'!' substituted for C-style null

var reverseCStyleStr = function(string) {
	var endCap = string.charAt(string.length-1);
	string = string.substring(0,string.length-1).split('').reverse().join('') + endCap
	return string;
}

reverseCStyleStr(str);