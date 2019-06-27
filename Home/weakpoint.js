"use strict";
var assert = require("assert");

function myArrayMinIndex(arr_1d){
	var minValue = Math.min.apply(null,arr_1d);
	return arr_1d.indexOf(minValue);
}

function weakPoint(data){
	var weakestPoint;
	var h = data.length;
	var w = data[0].length;
	var columns = [];
	var columnsum =[];
	var rowsum = [];
	// create correct number of nested arrays within columns.
	for (var i = 0; i< w; i++){
		columns.push([]);
	}
	
	// loop to get sum for each row
	for (var x in data){ // could use For/ In loop or alternatively could use forEach() array method.
		rowsum.push(data[x].reduce( (a,b) => a + b, 0 )); // i do not understand this line of code in full.
		//populate columns nested arrays
		for (var y in data[x]){
			columns[y].push(data[x][y]);
		}

	}
	//loop to get sum for each column
	for (var x in columns){
		columnsum.push(columns[x].reduce( (a,b) => a + b, 0));
	}
	//assign weakest point to be at intersection of the row and column with the minimum sum. This automatically will pre-select for the upper left most weakpoint if there were to be a tie.
	weakestPoint = [myArrayMinIndex(rowsum), myArrayMinIndex(columnsum)]
	return weakestPoint;
}

assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
           [2, 9, 4, 1, 7],
           [3, 8, 6, 2, 4],
           [2, 5, 2, 9, 1],
           [6, 6, 5, 4, 5]]), [3, 3]);
assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
           [2, 8, 1, 1, 7],
           [3, 8, 6, 2, 4],
           [2, 5, 2, 9, 1],
           [6, 6, 5, 4, 5]]), [1, 2]);
