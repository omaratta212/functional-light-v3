"use strict";

const countdownLength = 5;

var timer = rxjs.interval(1000).pipe(
	rxjs.operators.take(countdownLength),
);
var countdown =
	rxjs.merge(rxjs.of(-1),timer)
	.pipe( rxjs.operators.map(formatCountdown) );

countdown.subscribe(
	console.log.bind(console),
	null,
	console.log.bind(console,"Complete!")
);


// *************************************

function formatCountdown(counter) {
	return formatTime(countdownLength - counter - 1);
}

function formatTime(time) {
	var minutes = Math.floor(time / 60);
	var seconds = time % 60;
	if (seconds < 10) seconds = `0${seconds}`;
	return `${minutes}:${seconds}`;
}
