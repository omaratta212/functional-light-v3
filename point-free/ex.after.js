"use strict";

const output = console.log
const printIf = when(output)
const isLongEnough = not(isShortEnough)

function when(fn) {
	return function (predicate) {
		return function (...args) {
			if (predicate(...args)) {
				return fn(...args);
			}
		};
	};
}

function not(fn) {
	return (...args) => {
		return !fn(...args)
	}
}

function isShortEnough(str) {
	return str.length <= 5;
}


var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
