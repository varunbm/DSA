
// Implicit binding - priority 3
// Explicit binding - priority 2 
// New binding - priority 1
// Default binding - priority 4
// ================================================================
// Implicit binding
const person = {
    name : 'John',
    sayMyName: function(){
        console.log(`my name is ${this.name}`)
    }
}
person.sayMyName()

// Explicit binding
function sayMyName(){
    console.log(`my name is ${this.name}`)
}

sayMyName.call(person)


// New binding
function Person(name){
    this.name = name
}

const p1 = new Person('Varun')
const p2 = new Person('Batman')

console.log(p1.name, p2.name)

// Default binding
