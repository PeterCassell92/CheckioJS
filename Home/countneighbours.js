"use strict";
var assert = require("assert");

function countNeighbours(data, row, column){
	var gridwidth = data[0].length;
	var gridheight = data.length;
	var neighbourcount = 0;
	var i, j;
	var checkrow;
	var checkcolumn;
	//run for loops to generate checks on the 3x3 grid.
	for (i = -1; i < 2; i ++){
		for (j = -1; j < 2; j++){
			checkrow = row + i;
			checkcolumn = column + j;
			//continue if the coordinates to be evaluated equal the original coordinates.
			if (checkrow === row && checkcolumn === column){
				continue;
			}
			//continue if coordinates to be evaluated would be outside of the grid.
			if (checkrow < 0 || checkrow >= gridheight || checkcolumn < 0 || checkcolumn >= gridwidth){
				continue;
			}
			//check occupancy of a neighbouring cell.
			if (data[checkrow][checkcolumn] === 1){
				console.log(checkrow.toString() + ", " + checkcolumn.toString()+ " is OCCUPIED");
				neighbourcount++;
			}
			else {
				console.log(checkrow.toString() + ", " + checkcolumn.toString()+ " is empty");
			}
		}
	}
	console.log(neighbourcount);
	return neighbourcount;

}

assert(countNeighbours([[1, 0, 0, 1, 0],
                 [0, 1, 0, 0, 0],
                 [0, 0, 1, 0, 1],
                 [1, 0, 0, 0, 0],
                 [0, 0, 1, 0, 0]], 1, 2) == 3);
assert(countNeighbours([[1, 0, 0, 1, 0],
                 [0, 1, 0, 0, 0],
                 [0, 0, 1, 0, 1],
                 [1, 0, 0, 0, 0],
                 [0, 0, 1, 0, 0]], 0, 0) == 1);

assert(countNeighbours([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],5,4) == 2);