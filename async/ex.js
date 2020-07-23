"use strict";

const countdownLength = 5;

var timer = rxjs.interval(1000).pipe(
	rxjs.operators.take(countdownLength),
);
var countdown =
	rxjs.merge(rxjs.of(-1),timer)
	//.pipe(
		// rxjs.operators. --whatever--
	//);

countdown.subscribe(
	console.log.bind(console),
	null,
	console.log.bind(console,"Complete!")
);


// *************************************

function formatCountdown(counter) {
	// TODO
}

function formatTime(time) {
	var minutes = Math.floor(time / 60);
	var seconds = time % 60;
	if (seconds < 10) seconds = `0${seconds}`;
	return `${minutes}:${seconds}`;
}
