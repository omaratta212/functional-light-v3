"use strict";

// function foo() { return 42; }
// function bar() { return 10; }
function add(x,y) { return x + y; }
// add( foo(), bar() );		// 52
function add2(fn1,fn2) { return add( fn1(), fn2() ); }
// add2( foo, bar );		// 52

function constant(v) {
	return function f(){
		return v;
	};
}
// add2( constant(42), constant(10) );		// 52


// with reduce:
function addn(fns) {
	return fns.reduce(function reducer(composedFn,fn){
		return function f(){
			return add2(composedFn,fn);
		};
	})();
}

// with recursion:
// function addn([fn0,fn1,...rest]) {
// 	if (rest.length == 0) return add2(fn0,fn1);

// 	return addn(
// 		[
// 			function f(){
// 				return add2(fn0,fn1);
// 			},
// 			...rest
// 		]
// 	);
// }

// with iteration:
// function addn(fns) {
// 	while (fns.length > 2) {
// 		let [fn0,fn1,...rest] = fns;
// 		fns = [
// 			function f(){
// 				return add2(fn0,fn1);
// 			},
// 			...rest
// 		];
// 	}
// 	return add2(fns[0],fns[1]);
// }


var vals = [7,4,8,0,10,7,3,2,5,9,12,6,4,1,7,8];

addn(
	vals
	.reduce(function reducer(a,v){
		if (!~a.indexOf(v)) return a.concat(v);
		return a;
	},[])
	//.filter(function(v,i,arr){
	//    return i == arr.indexOf(v);
	//})
	.filter(function filterer(v){
		return v % 2 == 0;
	})
	.map(constant)
);
// 42
