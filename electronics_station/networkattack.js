"use strict";

var assert = require("assert");

var greaterThanZero = function(element){
	return element > 0;
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

function uniqueToArray(array, targetarray){
	var i;
	var uniqueelements =[];
	for (i=0; i < array.length; i++){
		if (!targetarray.includes(array[i])){
			uniqueelements.push(array[i]);
		}
	}
	return uniqueelements;

}

function capture(network){
	var x, y;
	var time = 0;
	var nodelist = [];
	var temporary = [];
	var accessiblenodes = [];
	var numberofnodes = network[0].length;

	//make list of objects which represent each node. Each node has a remaining time to hack property and an access property.
	//only nodes which can be accessed can be hacked.
	for (x=0; x < numberofnodes ; x++){
		nodelist.push({
			'remaining' : network[x][x],
			'access' : false,
		});
	}
	//find the nodes that are accessible from node 0 and make property access = true.
	accessiblenodes = getAllIndexes(network[0], 1);
	console.log(accessiblenodes);
	accessiblenodes.forEach(function (element){ nodelist[element].access = true;})

	//while loop runs until all element have been hacked (remaining time to hack is 0)
	while (nodelist.map(a => a.remaining).some(greaterThanZero)){
//	while (nodelist.map(function(a){return a.remaining}).some(greaterThanZero)){
		time++;
		console.log(time);
		// for each accessible node, decrease remaining time to hack by 1
		for (y=0; y < numberofnodes; y++){

			if (nodelist[y].access == true && nodelist[y].remaining > 0){
				nodelist[y].remaining --;
				//if remaining hack time = 0 then the node is part of the network and any new nodes that connected to the hacked node are added to the accessible nodes list.
				if (nodelist[y].remaining <= 0)	{
					console.log("Node " + y + " has been hacked");
					uniqueToArray(getAllIndexes(network[y], 1), accessiblenodes).forEach(function (element){accessiblenodes.push(element);});
				}
			}
		}
		//make access = true for each node within the accessible nodes list.
		accessiblenodes.forEach(function (element){ nodelist[element].access = true })
	}
	return time;
}

assert.deepEqual(capture([[0, 1, 0, 1, 0, 1],
         [1, 8, 1, 0, 0, 0],
         [0, 1, 2, 0, 0, 1],
         [1, 0, 0, 1, 1, 0],
         [0, 0, 0, 1, 3, 1],
         [1, 0, 1, 0, 1, 2]]), 8);
assert.deepEqual(capture([[0, 1, 0, 1, 0, 1],
         [1, 1, 1, 0, 0, 0],
         [0, 1, 2, 0, 0, 1],
         [1, 0, 0, 1, 1, 0],
         [0, 0, 0, 1, 3, 1],
         [1, 0, 1, 0, 1, 2]]) , 4);
assert.deepEqual(capture([[0, 1, 1],
         [1, 9, 1],
         [1, 1, 9]]) ,9 );

