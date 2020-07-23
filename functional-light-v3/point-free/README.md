# Point-Free

This is an exercise to practice point-free style.

## Instructions

1. Refactor the `output(..)`, `printIf(..)`, and `isLongEnough(..)` functions to use point-free style.

2. Hints:
	- Some browsers require `console.log(..)` to run against the `console` context , so `f = console.log; f(..)` fails (because of lost `this` binding).

	Use `.bind(..)` to be safe.

	- `printIf(..)` can be expressed in terms of a `when(..)` that looks like:

	```js
	function when(fn) {
		return function(predicate){
			return function(...args){
				if (predicate(...args)) {
					return fn(...args);
				}
			};
		};
	}
	```

	- `isLongEnough(..)` is the negation of `isShortEnough(..)`.
