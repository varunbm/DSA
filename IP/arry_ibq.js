let students = [
    {name: 'John', rollNumber: 1, marks: 80},
    {name: 'Doe', rollNumber: 10, marks: 69},
    {name: 'Black', rollNumber: 31, marks: 35},
    {name: 'Panther', rollNumber: 91, marks: 55},
]

// Q1 - Return names in caps
// 1) Using for loop
let namesInCaps = [];
for(let i=0; i< students.length;i++){
    namesInCaps.push(students[i].name.toUpperCase());
}
console.log(namesInCaps)

// 2) Using map
let namesInCaps2 = students.map((student) => {
    return student.name.toUpperCase();
})
console.log(namesInCaps2)

// 3) Using forEach

let namesInCaps3 = []
students.forEach((student,i) => {
    // namesInCaps3.push(student.name.toUpperCase())
    students[i] = {
        ...student,
        name: student.name.toUpperCase()
    }
})

console.log(students)

// Q2 - Return students with marks more than 50
let moreThan50Arr = students.filter(student => {
    return student.marks > 50
})

console.log(moreThan50Arr)

// Q3 - Return students with marks more than 50
let moreThan50ArrAndRollnumMorethan15 = students.filter(student => {
    return student.marks > 50 && student.rollNumber > 15
})

console.log(moreThan50ArrAndRollnumMorethan15)

// Q4 - Sum of marks of all students
let marksTotal = students.reduce((acc, next) => {
    return acc + next.marks
},0)

console.log(marksTotal)

// Q5 - return only names of students who marks more than 50 

let onlyNames = students.filter((student) => {
    return student.marks > 50
}).map(student => student.name)

console.log(onlyNames)

// Q6 - Return total marks of students marks more than 60 after 20 added to who scored less than 60

let marks = students
    .map(student => {
        if (student.marks < 60){
            student.marks += 20
        } 
        return student
    })
    .filter(student => student.marks > 60)
    .reduce((acc, student) => acc + student.marks, 0)


console.log(marks)