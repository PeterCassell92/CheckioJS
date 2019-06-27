"use strict";
var assert = require("assert");

function mostWanted(str){
	var patt = /[a-z]/g;
	var result;
	var counts = {};
	var max = -Infinity;
	var maxletter = "";
	var x, i, letter;
	//format string in correct form, match to Regex for any characaters and sort alphabetically.
	str = str.toLowerCase().trim().match(patt).sort();
	
	//populate counts object with 'letter' keys and frequency values.
	for (i = 0; i < str.length; i++) {
	  letter = str[i];
	  counts[letter] = counts[letter] ? counts[letter] + 1 : 1; //ternary operator
	}
	//evaluate the highest frequency. In the event of equal frequency the letter closest to 'a' will be selected.
	for (x in counts){
		//console.log(x.toString() + " has " + counts[x].toString() + " Occurrences");
		if (counts[x] > max){
			max = counts[x];
			maxletter = x;
		}
	}
	console.log(maxletter);
	return maxletter;
}

assert(mostWanted("Hello World!") == "l");
assert(mostWanted("How do you do?") == "o");
assert(mostWanted("One") == "e");
assert(mostWanted("Oops!") == "o");
assert(mostWanted("AAaooo!!!!") == "a");
assert(mostWanted("abe") == "a");