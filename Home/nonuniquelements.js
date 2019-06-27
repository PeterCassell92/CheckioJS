"use strict";

var assert = require('assert');

//neat array comparison tool.
// TURNS OUT THIS IS UNECESSARY DUE TO NODE JS DEEPEQUAL. Have kept included as alternative array check method.
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  //check values (works for numbers but may not work for non-primitive types)
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

//function takes array parameter and returns array with all non-unique elements.
function nonUniqueElements(arr){
	var arrlen = arr.length;
	var i = 0;
	var nonUniqueArr = [];
	//cycle through each array element,
	for (i; i < arrlen; i++){
		var j =0;
		//compare each element to each 
		for (j; j < arrlen; j++){
			if (j === i){
				continue;
			}
			//compare each value and if i is not unique then add toooo
			if  (arr[i]=== arr[j]){
				nonUniqueArr.push(arr[i]);
				break;
			}
		}
	}
	console.log(nonUniqueArr);
	return nonUniqueArr;
}

//Test block
assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [ 1, 3, 1, 3 ]);
assert.ok(arraysEqual(nonUniqueElements([1, 2, 3, 4, 5]), []));
assert.ok(arraysEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]));
assert.ok(arraysEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9]));