// Q1 - What is function definition
function first(){
    return 
}
//Q2 - what is function expression
const first1 = function(){
    return
}

// Functions can be passes to another function as parameters, just like a variable
function square(num){
    return num * num
}

function displayResults(fn){
    console.log(`Square is : ${fn(100)}`)
}

displayResults(square);

// Q3 - IIFE
(function sqr(num){
    return num *num
})(5)
// 25

// Q4 - Function scope
var n1 = 20, n2 = 3, name = "scope"
function multiply(){
    return n1 * n2; // n1 and n2 from global scope 
}
console.log(multiply())

function getScore(){
    var n1 = 5, n2 = 5; // Local scope
    function add(){
        return n1 + n2;
    }
    return add();
}

console.log(getScore())

// Q5 - Scope question 
for(let i=0; i<5;i++){ // Since i is LET, so it will create a block scope every time for loop runs
// If i was VAR then no block scope // o/p - 55555
    setTimeout(function(){
        console.log(i)
    },i*1000)
}

// Q6 - Hoisting 
// Q7 - Rest and spread options
// Q8 - Callbacks 
// Q9 - Arrow function 
// Q10 - Difference between arrow functions and normal functions.
    // 1) Syntax 
    // 2) Return 
    // 3) Access to arguments key word 
    // 4) this keyword behaviour