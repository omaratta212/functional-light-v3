"use strict";

function lotteryNum() {
    return (Math.round(Math.random() * 100) % 58) + 1;
}

function withOutDuplicates(numbers) {
    return [...new Set(numbers)]
}

function pickNumber(num, currentNumbersArray) {
    const numbers = [...currentNumbersArray, num]
    const uniqNumbers = withOutDuplicates(numbers)
    return uniqNumbers.sort((a, b) => a - b)
}

var luckyLotteryNumbers = [];
const WINNERS_COUNT = 6

while (luckyLotteryNumbers.length < WINNERS_COUNT) {
    const currentNumbers = Object.freeze(luckyLotteryNumbers)

    luckyLotteryNumbers = pickNumber(
        lotteryNum(),
        currentNumbers
    )
}

console.log(luckyLotteryNumbers);
