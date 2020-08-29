"use strict";

/******** Helpers ********/
/**
 * Decide if a number is Odd.
 * @param {number} number to check.
 * @returns {Boolean} true if odd
 */
const isOdd = (number) => number % 2 === 1

/**
 * Decide if a number is even.
 * @param {number} number to check.
 * @returns {Boolean} true if even
 */
const isEven = (number) => !isOdd(number)

/**
 * Get function that returns some number.
 * @param {number} number to return.
 * @returns {Function} That only returns the number
 */
const getNum = number => () => number

/**
 * Adds two numbers together.
 * @param {number} x. The first number to add.
 * @param {number} y. The second number to add.
 * @returns {number} The sum of x and y.
 */
const add = (x, y) => x + y

/**
 * Takes two function that each return a number, and adds the returned numbers from each.
 * @param {Function} fn1. The first function.
 * @param {Function} fn2. The second function.
 * @returns {number} The addition of the two returned numbers.
 */
const add2 = (fn1, fn2) => add(fn1(), fn2())


/******** App Logic ********/
/* Define functions that gets some numbers */
const five = getNum(5)
const six = getNum(6)
const ten = getNum(10)
const twinty = getNum(20)

/**
 * Takes an array of functions that each return a number and returns the addition of all the returned numbers.
 * @param {Array.<Function>} fns. Array of functions that returns numbers.
 * @returns {number} The addition of all the returned numbers.
 */
const addn = (fns) => {
    function reducer(acc, next) {
        return function () { // Wrapper to delay the work
            return add2(acc, next)
        }
    }

    return fns.reduce(reducer)() // Calling the returned huge function
}


/**
 * The crazy one-liner version of addn
 * @param {Array.<Function>} fns. Array of functions that returns numbers.
 * @returns {number} The addition of all the returned numbers.
 */
const crazyAddn = (fns) => fns.reduce((acc, next) => () => add2(acc, next))()

// Define Array of duplicates .
const numbers = [...Array(20).keys(), ...Array(20).keys()]

// Remove the duplicates.
const uniqueNumbers = [...new Set(numbers)]

// Remove odd numbers and keep even ones.
const eventNumbers = uniqueNumbers.filter(isEven)

// Get array of functions that each returns a number from the even numbers.
const numFns = eventNumbers.map(getNum)




/******** Tests ********/

const addnFns = addn(numFns)
console.log({addnFns})

const testAddn = addn([five, six, ten, twinty])
const crazyTest = crazyAddn([five, six, ten, twinty])
console.log({testAddn, crazyTest})
