/* 1.5 Write a method to replace all spaces in a string with ‘%20’. */

var spaceReplace = function(string) {
	return string.split(' ').join('%20');
}