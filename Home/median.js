"use strict";
var assert = require("assert");

function median(arr){
	arr = arr.sort(function(a,b){return a-b});
	console.log(arr);
	// if array length is odd then median is the midpoint value.
	if (arr.length % 2 != 0) {
		return arr[((arr.length-1)/2)];
	}
	else{
		var mid1 = arr[((arr.length)/2)];
		var mid2 = arr[((arr.length)/2)-1];
		return ((mid1 + mid2)/2);
	}
}

//Test Block
assert(median([1, 2, 3, 4, 5]) == 3);
assert(median([3, 1, 2, 5, 3]) == 3);
assert(median([1, 300, 2, 200, 1]) == 2);
assert(median([3, 6, 20, 99, 10, 15]) == 12.5);