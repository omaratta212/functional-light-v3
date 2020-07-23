"use strict";

var students = [
    {id: 260, name: "Kyle"},
    {id: 729, name: "Susan"},
    {id: 42, name: "Frank"},
    {id: 74, name: "Jessica"},
    {id: 491, name: "Ally"}
];

/*
** Part 1
*
* One way of avoiding side effects is containing the damage by limiting the scope of the impure function
* So now I don't need to worry about sortStudentsByName polluting the outer scope
*/
function getStudentsByName(students) {
    // Copy the outer students array
    students = [...students]

    // Call the sort function withing the scope of getStudentsByName
    return sortStudentsByName()

    function sortStudentsByName() {
        // Don't modify this function
        students.sort(function byName(s1, s2) {
            if (s1.name < s2.name) return -1;
            else if (s1.name > s2.name) return 1;
            else return 0;
        });
        return students;
    }
}

/*
** Part 2
*
* Another way is making an intermediate function that does the following steps
* 1. Copy the outer value
* 2. Perform some operation by calling the impure function and storing it's return value
* 3. Reset the outer changes value using the copied one
* 4. Return the stored value of the impure function call!
*/
function sortStudentsByID() {
    // Don't modify this function
    students.sort(function byID(s1, s2) {
        return s1.id - s2.id;
    });
    return students;
}

function getStudentsByID(currentStudents) {
    const outerStudents = [...currentStudents]
    const newStudents = sortStudentsByID()

    students = outerStudents
    return newStudents
}

/*
** Test cases
*/

var studentsTest1 = getStudentsByName(students);
console.log(studentsTest1[0].name === "Ally");
console.log(studentsTest1[1].name === "Frank");
console.log(studentsTest1[2].name === "Jessica");
console.log(studentsTest1[3].name === "Kyle");
console.log(studentsTest1[4].name === "Susan");

var studentsTest2 = getStudentsByID(students);
console.log(studentsTest2[0].id === 42);
console.log(studentsTest2[1].id === 74);
console.log(studentsTest2[2].id === 260);
console.log(studentsTest2[3].id === 491);
console.log(studentsTest2[4].id === 729);

var studentsTest3 = students;
console.log(studentsTest3[0].id === 260 && studentsTest3[0].name === "Kyle");
console.log(studentsTest3[1].id === 729 && studentsTest3[1].name === "Susan");
console.log(studentsTest3[2].id === 42 && studentsTest3[2].name === "Frank");
console.log(studentsTest3[3].id === 74 && studentsTest3[3].name === "Jessica");
console.log(studentsTest3[4].id === 491 && studentsTest3[4].name === "Ally");
