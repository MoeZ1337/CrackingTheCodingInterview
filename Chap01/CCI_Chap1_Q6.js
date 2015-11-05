/* 1.6 Given an image represented by an NxN matrix, where each pixel in the image is 4
	bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 

	Complex way of completion
	Change all corners and proceed down columns and rows correctly
	corners are {{0,0},{0,length}, {length,length}, {length,0}}
	i = accessible length of array or just n-1
	j = half the length of the array or just n/2

	move such that first row would handle {{0->length-1,0}, {length,0->length-1}, {length->1,length},{0,length->1}}
	then we need to take into account that at each new row, we are working with a (N-2)x(N-2) matrix
	we have to set i to j at each row so the new row always starts at j,j
	then i continues until length-j-1 with the minus 1 account for the last row which is getting changed at i.
	next row and so forth would be {{j, i->(length)-j},{i->(length)-j,length-j},{length-j,length-j>i-1},{length-j>i-1,j}}
	this last line might be in correct but the codes been tested soooo...

*/

rotateImage = function(nxn) {
	var length = nxn.length-1
	for(var j = 0; j < nxn.length/2; j++) {
		for(var i = j; i < (nxn.length-1)-j; i++) {
			//console.log(i+','+j +'->'+ (length-j)+','+i  +'->'+ (length-i)+','+(length-j) +'->'+ j+','+(length-i));

			var hold = nxn[i][j];
			nxn[i][j] = nxn[length-j][i];
			nxn[length-j][i] = nxn[length-i][length-j];
			nxn[length-i][length-j] = nxn[j][length-i]
			nxn[j][length-i] = hold;
		}
	}
	return nxn;
}

createNXN = function(n) {
	nxn = [];
	for(var k = 0; k < n; k++)	{
		temp = [];
		for(var l = 0; l < n; l++) {
			temp.push(k*n+l);
		}
		nxn.push(temp);
	}
	return nxn;
}

nxn1 = createNXN(1);
nxn2 = createNXN(2);
nxn3 = createNXN(3);
nxn4 = createNXN(4);
nxn5 = createNXN(5)
nxn6 = createNXN(6)
nxn7 = createNXN(7);
nxn8 = createNXN(8);


rotateImage(nxn3);
rotateImage(nxn4);
rotateImage(nxn5);

////// I'm actually kinda amazed that worked out so well.... //////
////// Still need to check what CtCI's answer was //////