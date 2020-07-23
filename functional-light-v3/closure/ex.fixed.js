"use strict";

function strBuilder(str) {
	return function next(v){
		if (typeof v == "string") {
			return strBuilder(str + v);
		}
		return str;
	};
}

var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();

console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello() === "Hello, ");
console.log(kyle() === "Hello, Kyle");
console.log(susan() === "Hello, Susan");
console.log(question === "Hello, Kyle?");
console.log(greeting === "Hello, Susan!");
