let user = {
    name: "John",
    surname: "Smith"
}

let arr = [1,2,3]

for(key in user){
    console.log(key)
    console.log(user[key])
}

for(i of arr){ // of - Array values and if we use (i in arr) this gives us the index, in cant use on objects
    console.log(i) 
}

// Interview questions 
// 1 Multiply
let obj1 = {
    a: 100,
    b: 200,
    c: "Text"
}

function mul(obj){
 for(key in obj){
    if(typeof obj[key] == "number"){
        obj[key] = obj[key] * 2;
    }
 }
}
 mul(obj1)

 console.log(obj1)

//  2) 
let a = {}
let b = {key: "b"}
let c = {key: "c"}

a[b] = 123 // Cant assign objects a key, means a[{key: "b"}] = 123, this is not possible.
a[c] = 456 // when we do that, it will look like a["[object Object]"] so 456 will be replaces with 123

console.log(a[b]) // 456

// 3) what is JSON.stringify and JSON.parse

let user1 = {
    name: "John",
    age: 30
}
const strObj = JSON.stringify(user1) // converts obj to string
console.log(strObj)
localStorage.setItem("test", strObj)
console.log(JSON.parse(strObj)) // converts string to obj 
localStorage.getItem("test") // this is return object in string format 
JSON.parse(localStorage.getItem("test")) // returns Object


// 4) object destructuring 
let user2 = {
    name: "John",
    age: 30, 
    fullname: {
        firstname: "John",
        lastname: "Doe"
    }
}

let {name:myName} = user2 // name from user2 obj, renaming to myName
console.log(myName)

let {fullname:{firstname}} = user2 // nested objects destructuring...

// 5 - Whats the output 
function getItems(fruitList, favoriteFruit, ...args){ // in rest operator, should be always last
    return [...fruitList, ...args, favoriteFruit] // spread operators can be in the middle
}

console.log(getItems(["banana", "apple"],"pear", "orange", "grapes"));

// 6 - Object referencing... 
let c1 = {greetings: "Hey"}
let d;

d = c1; // just copying the reference 
c1.greetings = "Hello"
console.log("****",d.greetings) // Hello
console.log(d == c1) // true

// ======= Similar to above example
let person = {name: "John"}
const members = [person]

person = null
console.log(members) // o/p - [{name: "John}]

// person.name = null
console.log(members) // o/p - [{name: null}]

// 7 - Object cloning

let c2 = {greetings: "Hey"}
let d2;

d2 = Object.assign({}, c2) // copying the object, this will not clone nested objects
c2.greetings = "Hello"

console.log(d2.greetings) // Hey

// 8 - Object cloning with spread operator

let c3 = {greetings: "Hey"}
let d3;

d3 = {...c3}
c3.greetings = "Hello"

console.log(d3.greetings) // Hey

// 10 - 
const value = {number : 10}
const multi = (x = {...value}) => {
    console.log(x.number *= 2)
}

multi() // 20
multi() // 20
console.log(value) // {number : 10}
multi(value) // 20
console.log(value) // {number : 20}
multi(value) // 40

// 11 - whats the o/p
function fun1(person){ // personObj reference we are passing to function
    person.age = 50
    person = {
        name: "Pete",
        age: 40
    } // here, since we are re-assigning the object to new variable original object wont change
    return person // peter, 50

}

const personObj = {
    name: "John",
    age: 30
}

const personObj2 = fun1(personObj)

console.log("personObj", personObj) // John, 50
console.log('personObj2',personObj2) // Pete, 40