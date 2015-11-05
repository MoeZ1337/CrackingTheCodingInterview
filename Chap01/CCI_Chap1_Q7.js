/* Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
	column is set to 0. 

	m is the number of columns
	n is the number of rows
	a mxn matrix is represented as array[n][m];

	find all 0's first, then do the transform. */

	matrixZeroOut = function(mxn) {
		var n = mxn.length;
		var m = mxn[0].length;
		var zeroRowArray = []
		var zeroColArray = []

		for(var i = 0; i < n; i++) {
			for(var j = 0; j < m; j++) {
				if(mxn[i][j] === 0) {
					if(zeroRowArray.indexOf(i) === -1) {
						zeroRowArray.push(i);						
					}
					if(zeroColArray.indexOf(j) === -1) {
						zeroColArray.push(j);						
					}
				}
			}
		}

		console.log(zeroRowArray);
		console.log(zeroColArray);



		for(var i = 0; i < n; i++) {
			if(zeroRowArray.indexOf(i) !== -1) {
				mxn[i] = Array(m).fill(0);
			} else {
				mxn[i] = mxn[i].map(function(num, index) {
					if(zeroColArray.indexOf(index) !== -1) {
						return 0;
					} else {
						return num;
					}
				})
			}
		}		

		console.log(mxn);
		// for(var i = 0; i < length; i++) {
		// 	for(var j = 0; j < length; j++) {

		// 	}
		// }

	}

	createMXN = function(m,n) {
		var mxn = [];
		for(var k = 0; k < n; k++) {
			var temp = []
			for(var l = 0; l < m; l++) {
				temp.push(Math.floor(Math.random() * 5));
			}
			mxn.push(temp);
		}
		return mxn;
	}

	testMXN = createMXN(4,5);
	console.log(testMXN);
	console.log(matrixZeroOut(testMXN));

	////// check CtCI answers as well //////