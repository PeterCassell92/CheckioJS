"use strict";

var assert = require("assert");

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

function theGreaterOf(val1,val2){
	if (val1 >= val2){
		return val1;
	}
	else{
		return val2;
	}
}

function stepsToConvert(str1, str2){
	var numOfOperations =0;

	procedure:
	while (str1 !== str2){
		var x, y;
		var incorrectIndices = [];
		var correctIndices= [];
		var missing = [];

		for (x= 0; x <str2.length ; x++){
			if (getAllIndexes(str1, str2[x]).length > 0){
				missing.push("");
				}
			else{
				missing.push(str2[x]);
			}
			if (str2[x] === str1[x]){
				correctIndices.push(true);
			}
			else{
				correctIndices.push(false);
			}
		}
		console.log(missing);
		console.log(correctIndices);
		for (x= 0; x < theGreaterOf(str2.length, str1.length); x++){
			
			if (correctIndices[x] == true){ continue;}
			else{
				var indexes = getAllIndexes(str2, str1[x]);
				if (indexes.length != 0){
					//insert
					if (indexes[0] > x) {
						str1 = str1.slice(0, x) + str2[x] + str1.slice(x);
						numOfOperations ++;
						continue procedure;  
					}
					//remove a previous incorrect char.
					if (indexes[0] < x){
						for (y=0; y < str2.length; y++){
							if (correctIndices[y] == false){
								str1 = str1.splice(0,y) + str1.splice(y+1);
								numOfOperations ++;
								continue procedure;
							}
						}
					}
				}
			}
		}
		//replace
		for (x= 0; x < theGreaterOf(str2.length, str1.length); x++){
			if ( indexes.length == 0  ){
				str1 = str1.slice(0, x) + str2[x] + str1.slice(x+1);
				numOfOperations ++;
				continue procedure;
			}
		}
		if (numOfOperations >= 9999){
			break;
		}
	}
	
	console.log(numOfOperations);
	return numOfOperations
}

assert.equal(stepsToConvert('line1', 'line1'), 0, "eq")
assert.equal(stepsToConvert('line1', 'line2'), 1, "2")
assert.equal(stepsToConvert('line', 'line2'), 1, "none to 2")
assert.equal(stepsToConvert('ine', 'line2'), 2, "need two more")
assert.equal(stepsToConvert('line1', '1enil'), 4, "everything is opposite")
assert.equal(stepsToConvert('', ''), 0, "two empty")
assert.equal(stepsToConvert('l', ''), 1, "one side")
assert.equal(stepsToConvert('', 'l'), 1, "another side")