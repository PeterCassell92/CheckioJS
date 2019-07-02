// 

var assert = require("assert");
// convert 00:00:00 format time into valid datetime string.
function timeToDateTime(time){
	return ("01 Jan 1970 " + time + " UTC+0000"); ;
}
// functions to get all matches including all capture groups.
function collectGroup(regExp, str) {
    const matches = [];
    while (true) {
        const match = regExp.exec(str);
        if (match === null) break;
        // Add capture of group 1 to `matches`
        match.forEach(function(elem){ matches.push(elem);})
        matches.push(match[1]);
    }
    return matches;
}
//get multiplier for seconds, minutes, hours.
function timeModifier(char){
	switch (char){
		case 's' : return 1;
		case 'm' : return 60;
		case 'h' : return 3600;
		default: return 1;
	}
}
//evaluate the error string and extract the key time information (offset and period) in units of seconds.
function evalTimeError(errorstring){
	var regObj = new RegExp( /([+-]?\d+) (\w)/ug);
	var output = collectGroup(regObj, errorstring);

	var offset = Number(output[1])*timeModifier(output[2]);
	var period = Number(output[5])*timeModifier(output[6]);

	return [offset.valueOf(), period.valueOf()];
}

function brokenClock(start, wrongtime, error){
	var truetime;
	var dif;
	var re  = /\d\d:\d\d:\d\d/i;
	var myarray = evalTimeError(error);
	var offset = myarray[0];
	var period = myarray[1];
	var errorcount;
	//create date objects for start and 
	start = new Date(timeToDateTime(start));
	wrongtime = new Date(timeToDateTime(wrongtime));

	//time difference in milliseconds
	dif = wrongtime.getTime() - start.getTime();

	//number of error cycles
	errorcount = ((dif / (offset + period))/1000);

	// get true time by working out time error across the period and accounting for remaining time that is not part of an error cycle.
	truetime = new Date(((errorcount)*(period*1000)) + start.getTime());
	console.log(truetime.toUTCString().match(re)[0]);

	return truetime.toUTCString().match(re)[0];
}

assert(brokenClock('00:00:00', '00:00:15', '+5 seconds at 10 seconds') ==  '00:00:10');
assert(brokenClock('06:10:00', '06:10:15', '-5 seconds at 10 seconds') ==  '06:10:30');
assert(brokenClock('13:00:00', '14:01:00', '+1 second at 1 minute') ==  '14:00:00');
assert(brokenClock('01:05:05', '04:05:05', '-1 hour at 2 hours') ==  '07:05:05');
assert(brokenClock('00:00:00', '00:00:30', '+2 seconds at 6 seconds') ==  '00:00:22');