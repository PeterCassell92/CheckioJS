"use strict";

var assert = require("assert");

function Node(pearlStr, cumulativeProb){
	this.pearl = pearlStr;
	this.pw = ((pearlStr.match(/w/g) || []).length)/pearlStr.length;
	this.cprob = cumulativeProb;
}

function boxProbability (pearl, n){
	var x = 0;
	var p = 0 ;
	var nodeArray = [[new Node(pearl, 1)]];
	//while loop for each turn.
	while (x < n -1 ){
		nodeArray.push([]); // new line (array)
		for (var y = 0; y < nodeArray[x].length ; y++ ){
			//Black is picked and new node is created where one b is replaced by one w.
			if (nodeArray[x][y].pw !== 1){ nodeArray[x+1].push( new Node(nodeArray[x][y].pearl.replace("b", "w"), (1-nodeArray[x][y].pw)*nodeArray[x][y].cprob ))}
			//White is picked and new node is created where on w is replaced by one b.
			if (nodeArray[x][y].pw !== 0){nodeArray[x+1].push( new Node(nodeArray[x][y].pearl.replace("w", "b"), nodeArray[x][y].pw*nodeArray[x][y].cprob ));}
		}
		x++;
	}
	//add all of the probabilities of drawing white for the final array of nodes.

	//nodeArray[x].forEach(function (elem){p = p + (elem.pw*elem.cprob);});

	//Testing my knowledge of arrow functions. I am able to replace "function (elem){}" with an arrow function.
	nodeArray[x].forEach( a => p = p + (a.pw*a.cprob));
	p = +(p.toFixed(2)); // taken this route to round up to two dp but keep as number rather than string.
	console.log(p);
	return p;
}

assert(boxProbability('wwb', 3) === 0.52);
assert(boxProbability('www', 3) === 0.56);
assert(boxProbability('bbbb', 1) === 0);
assert(boxProbability('wwbb', 4) === 0.5);
assert(boxProbability('bwbwbwb', 5) === 0.48);