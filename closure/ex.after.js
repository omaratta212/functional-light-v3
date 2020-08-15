"use strict";

/* Crazy one liner. Not so good for readability!  */
// const strBuilder = str => next => typeof next == 'string' ? strBuilder(str+next) : str

/* Same function using normal function definition */
function strBuilder(str) {
    return function nextFn(next) {
        if(typeof next == 'string'){
            return strBuilder(str+next)
        }
        return str
    }
}

const hello = strBuilder("Hello, ")

const kyle = hello("Kyle")
const susan = hello("Susan")
const question = kyle("?")()
const greeting = susan("!")()


console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.")
console.log(hello() === "Hello, ")
console.log(kyle() === "Hello, Kyle")
console.log(susan() === "Hello, Susan")
console.log(question === "Hello, Kyle?")
console.log(greeting === "Hello, Susan!")
