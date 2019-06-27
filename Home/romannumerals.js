"use strict";
var assert = require("assert");

//num takes range 1-3999.
function romanNumerals(num){
	var romanString = '';
	var numArr = num.toString().split('');
	var numLen = numArr.length;
	var x, one, five, ten;
	//loop through number from right to left evaluating each digit separately.
	for (x = (numLen-1); x >= 0; x-- ){
		// evaluate each digit and assign a generic numeral format for each case (0-9).
		switch (numArr[x]){
			case '1':
				numArr[x] = 'T';
				break;
			case '2':
				numArr[x] = 'TT';
				break;
			case '3':
				numArr[x] = 'TTT';
				break;
			case '4':
				numArr[x] = 'TU';
				break;
			case '5':
				numArr[x] = 'U';
				break;
			case '6':
				numArr[x] = 'UT';
				break;
			case '7':
				numArr[x] = 'UTT';
				break;
			case '8':
				numArr[x] = 'UTTT';
				break;
			case '9':
				numArr[x] = 'TQ';
				break;
			case '0':
				numArr[x] = '';
			default:
		}
		//selects replacement criteria according to displacement from the decimal point.
		switch (x){
			case (numLen -1):
				one = 'I';
				five = 'V';
				ten = 'X';
				break;
			case (numLen -2):
				one = 'X';
				five = 'L';
				ten = 'C';
				break;
			case (numLen -3):
				one = 'C';
				five = 'D';
				ten = 'M';
				break;
			case (numLen -4):
				one = 'M';
				five = '';
				ten = '';
				break;
			default:
		}
		// replaces format placeholders with appropriate Roman Numeral.
		numArr[x] = numArr[x].replace(/T/g,one);
		numArr[x] = numArr[x].replace(/U/g,five);
		numArr[x] = numArr[x].replace(/Q/g,ten);
	}
	//joins to make string.
	romanString = numArr.join('');
	console.log(romanString);
	return romanString;
}

//test block
assert(romanNumerals(6) == 'VI');
assert(romanNumerals(76) == 'LXXVI');
assert(romanNumerals(13) == 'XIII');
assert(romanNumerals(44) == 'XLIV');
assert(romanNumerals(3999) == 'MMMCMXCIX');