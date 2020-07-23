"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num,nums) {
	if (!nums.includes(num)) {
		nums = [num,...nums];
		nums.sort(function asc(a,b){ return a - b; });
	}
	return nums;
}

var luckyLotteryNumbers = [];
const howMany = 6;

while (luckyLotteryNumbers.length < howMany) {
	luckyLotteryNumbers = pickNumber(
		lotteryNum(),
		Object.freeze(luckyLotteryNumbers)
	);
}

console.log(luckyLotteryNumbers);
