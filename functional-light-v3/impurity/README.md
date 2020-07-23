# Impurity

This is a two-part exercise to practice two techniques for containing function impurity.

## Instructions (Part 1)

In this part of the exercise, you will contain the function impurity of `sortStudentsByName(..)` using a wrapper function.

**NOTE:** Do not modify the contents of `sortStudentsByName(..)` for this exercise.

1. Move and modify `getStudentsByName(..)` so that it wraps around `sortStudentsByName(..)` (and calls it internally).

2. `getStudentsByName(..)` should receive the current list of students, and return a new sorted list of students.

3. Make sure that calling `getStudentsByName(..)` doesn't have a side-effect of modifying the global `students` array.

4. The `studentsTest1` and `studentsTest3` tests at the bottom of the exercise should all print `true`.

## Instructions (Part 2)

In this part of the exercise, you will contain the function impurity of `sortStudentsByID(..)` using an adapter function.

**NOTE:** Do not modify the contents of `sortStudentsByID(..)` for this exercise.

1. Modify `getStudentsByID(..)` so that it is an adapter that calls `sortStudentsByID(..)`.

2. `getStudentByID(..)` should receive the current list of students, and return a new sorted list of students.

3. Make sure that calling `getStudentsByID(..)` doesn't have a side-effect of modifying the global `students` array.

4. All tests (`studentsTest1`, `studentsTest2`, and `studentsTest3`) at the bottom of the exercise should all print `true`.
