"use strict";

var assert = require("assert");

function getHyp(a,b) {
	var hyp = Math.sqrt((Math.pow(a, 2) + Math.pow(b,2)));
	return hyp
}

function countingTiles(radius){
		var tilecount = [];
		var wholecount, partcount;
		var filledsquareboundary = (Math.floor(radius*Math.cos((Math.PI)/4)));
		var gridboundary = (Math.ceil(radius));
		var i;
		var flankcount = 0;
		var wholeemptycount = 0;		
		
		//evaluating partial occupancy (taking a 45 degree slice of the circle)
		if ((filledsquareboundary +1) != gridboundary){
			for ( i = 1; i <= gridboundary; i++){
				// identify any wholey occupied squares outside of the filled square
				if (getHyp(filledsquareboundary+1,i) <= radius){
					flankcount++;
				}
				// identify any wholey unoccupied squares on the grid.
				else {
					if ((i+1) < gridboundary){
						wholeemptycount ++;
					}
					else if (i +1 ==gridboundary){
						wholeemptycount = wholeemptycount + 0.5;
					}
				}
			}
		}

		// 8* multiplier to account for all 360 degrees.
		wholecount = Math.pow(filledsquareboundary*2, 2) +(8*flankcount);
		partcount = Math.pow((2*gridboundary), 2)-wholecount - (wholeemptycount*8);


		tilecount = [ wholecount, partcount ];
		console.log(tilecount);
	return tilecount;
}

// Test Block
assert.deepEqual(countingTiles(2), [4, 12]);
assert.deepEqual(countingTiles(3), [16, 20]);
assert.deepEqual(countingTiles(2.1),  [4, 20]);
assert.deepEqual(countingTiles(2.5),  [12, 20]);