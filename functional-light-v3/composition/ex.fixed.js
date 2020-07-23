"use strict";

function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

function compose(...fns) {
	return pipe(...fns.reverse());
}

function pipe(...fns) {
	return function piped(result) {
		for (let fn of fns) {
			result = fn(result);
		}
		return result;
	};
}

var f1 = compose(increment,decrement);
var f2 = pipe(decrement,increment);
var f3 = compose(decrement,double,increment,half);
var f4 = pipe(half,increment,double,decrement);
var f5 = compose(increment);
var f6 = pipe(increment);

console.log( f1(3) === 3 );
console.log( f1(3) === f2(3) );
console.log( f3(3) === 4 );
console.log( f3(3) === f4(3) );
console.log( f5(3) === 4 );
console.log( f5(3) === f6(3) );
