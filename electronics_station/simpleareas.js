"use strict";

//note that a neater solution can be to use (...args) and then take args.length rather than checking values of l1,l2,l3.

var assert = require("assert");

function simpleAreas(l1, l2 = null, l3 =null){
	var area;
	if (l2 == null && l3 ==null){ area = (Math.PI*(Math.pow(l1/2, 2)));} // circle
	else if (l3 == null){area = l1 * l2} // rectangle
	else {
		var p = (l1 + l2 + l3)/ 2; 
		area = Math.pow(p*(p-l1)*(p-l2)*(p-l3), 0.5);} // triangle using heron's formula.
	return +area.toFixed(2); // round to 2 dp.
}

assert(simpleAreas(3) === 7.07);
assert(simpleAreas(2, 2) === 4);
assert(simpleAreas(2, 3) === 6);
assert(simpleAreas(3, 5, 4) === 6);
assert(simpleAreas(1.5, 2.5, 2) === 1.5);
