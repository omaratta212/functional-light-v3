# Data Structures (And FP Review!)

This is an exercise to practice list-operations (map/filter/reduce) on more general data structures. We also revisit a variety of previous FP concepts (point-free, currying, etc).

## Instructions (Part 1)

1. Familiarize yourself with the provided utilities and helpers, like `listSum(..)`, `listProduct(..)`, `mapObj(..)`, etc.

2. Find the `// TODO` comments to implement both `filterObj(..)` and `reduceObj(..)`. The fixed exercise should now print `38886` to the console.

## Instructions (Part 2)

1. Recall/review the following topics:
	- argument manipulation (`binary(..)`)
	- point-free style
	- composition (`compose(..)`, `pipe(..)`)
	- currying
	- list operations (`reduce(..)`)

2. Using only the provided utilities in this exercise, refactor the three separate statements that invoke `mapObj(..)`, `filterObj(..)`, and `reduceObj(..)` into a single list operation that's completely point-free.

3. Hint: `reduce(..)` and `pipe(..)`.
