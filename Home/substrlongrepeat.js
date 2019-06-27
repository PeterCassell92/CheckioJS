"use strict";
var assert = require('assert');

function longRepeat(str){
	var substrlength, maxsubstrlength;
	var i;
	if (str.length === 0){
		return 0;
	}
	// compare each element to next element in array.
	for (i =0, substrlength = 1, maxsubstrlength = 1; i < str.length-1; i++){
		//if element is the same then increment substring length.
		if (str[i] === str[i+1]){
			substrlength ++;
			//if substring length is greater than previous maximum then update maximum.
			if (substrlength > maxsubstrlength){ maxsubstrlength = substrlength;}
		}
		else {
			//if different character follows the string then substring length is reset to 1.
			substrlength =1;
		}
	}
	return maxsubstrlength;
}

assert(longRepeat('sdsffffse') === 4);
assert(longRepeat('ddvvrwwwrggg') === 3);