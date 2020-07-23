# Immutability

This is an exercise to practice with assignment and value immutability.

## Instructions

1. Define `pickNumber(..)` so that it's a pure function. It should the list of lottery numbers and a new lottery number (randomly generated using `lotteryNum()`) to add to the list.

2. `pickNumber(..)` should always keep the list of lottery numbers sorted in ascending order. Also, no duplicates!

3. Hint: Array's `sort()` (with no argument) does not do numeric sorting but alphanumeric sorting. You'll need to pass a custom compartor function to get true numeric sorting.

## Bonus

Instead of a read-only array (via `Object.freeze(..)`), use Immutable.js's `List` data structure to manage the additions to `luckyLotteryNumbers`.
