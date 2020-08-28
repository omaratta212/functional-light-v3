"use strict";

const increment = x => x + 1
const decrement = x => x - 1
const double = x => x * 2
const half = x => x / 2


const pipe = (...fns) => (value) => {
    let result = value
    for(const fn of fns){
        result = fn(result)
    }
    return result
}

const compose = (...fns) => pipe(...fns.reverse())


const f1 = compose(increment,decrement);
const f2 = pipe(decrement,increment);
const f3 = compose(decrement,double,increment,half);
const f4 = pipe(half,increment,double,decrement);
const f5 = compose(increment);
const f6 = pipe(increment);

console.log( f1(3) === 3 )
console.log( f1(3) === f2(3) )
console.log( f3(3) === 4 )
console.log( f3(3) === f4(3) )
console.log( f5(3) === 4 )
console.log( f5(3) === f6(3) )
