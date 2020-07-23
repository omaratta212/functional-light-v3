"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber() {}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
	pickNumber();
}

console.log(luckyLotteryNumbers);
