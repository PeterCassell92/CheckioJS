"use strict";

var assert = require("assert");

function xoReferee (xoarray){
	for (var x =0; x < 3; x++){
		if (xoarray[x][0] === xoarray[x][1] && xoarray[x][0] === xoarray[x][2] && xoarray[x][0] != '.'){return xoarray[x][0];}
		else if (xoarray[0][x] === xoarray[1][x] && xoarray[0][x] === xoarray[2][x] && xoarray[0][x] != '.'){return xoarray[0][x];}
	}
	if (xoarray[0][0] === xoarray[1][1] && xoarray[2][2] == xoarray[1][1] && xoarray[1][1] != '.'){return xoarray[1][1];}
	else if (xoarray[0][2] === xoarray [1][1] && xoarray [2][0] === xoarray[1][1] && xoarray[1][1] != '.'){ return xoarray [1][1]}
	else {return "D";}
}

assert(xoReferee([
    "X.O",
    "XX.",
    "XOO"]) == "X");
assert(xoReferee([
    "OO.",
    "XOX",w
    "XOX"]) == "O");
assert(xoReferee([
    "OOX",
    "XXO",
    "OXX"]) == "D");