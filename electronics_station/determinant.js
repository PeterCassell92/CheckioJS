//NOTE - arrays are mutable and copying an array via splice() or [...array] will not deepcopy any interior arrays.

"use strict";

var assert = require("assert");

function determinant(myarray){
	var len = myarray.length;
	console.log(len);
	var det = 0;
	var x;
	var mod;
	var evalArray;

	if(len ==1){
		det = myarray[0][0];
		return det;
	}
	else if (len == 2){
		det = (myarray[0][0]*myarray[1][1]) - (myarray[0][1]*myarray[1][0]);
		return det;
	}
	else {
			for (x = 0; x < myarray.length; x++){
			//reset evalArray
			evalArray = [];
			// copy array of arrays immutably
			for (var i = 0; i < myarray.length; i++){ evalArray[i] = myarray[i].slice();}
			//remove evalArray[0] with slice.
			evalArray = evalArray.slice(1);
			//remove each element at row x.		
			evalArray.forEach(function (elem){ elem.splice(x,1); })
			//get sign of component
			mod = (x % 2 == 0)? 1 : -1;
			//recursive function to find determinants of any size array.
			det = det + myarray[0][x]*mod*determinant(evalArray);
		}
		return det;
	}
}

assert(determinant([[1,1],[2,2]]) ==0);
assert(determinant([[4,3], [6,3]]) == -6);

assert(determinant([[1, 3, 2],
         [1, 1, 4],
         [2, 2, 1]]) == 14);