//Closures - Create a function within another function, then the inner function is the closure
// inner function is usually returned so that the outer function variables can be used at a later time
//What is lexical scope - A variable defined outside a function can be accessed inside 
                    //a function, but not the other way around.
// Example 
function outerFunction(){
    var name = "Closures"
    function innerFunction(){
        console.log(name)
    }
    return innerFunction
}

let func = outerFunction()
func()

// Example 2
function one(){
    let arr = []
    for(let i=0; i<10000000; i++){
        arr[i] = i * i
    }

    function two(index){
        return console.log(arr[index])
    }
    return two
    // two(2)
}

let temp = one()
console.time("2")
// one()
temp(2)
console.timeEnd("2")

// Example - 3
// Call only once 

function Once(){
    let called = 0;
    return function(){
        if(called === 0){
            console.log("Called")
            called++
        }
        else{
            console.log("Already called")
        }
    }
}
let subscribed = Once()
subscribed()
subscribed()
subscribed()
subscribed()
subscribed()

// Example - Call once

function Once_1(func){
    let ran;

    return function(){
        if(func){
            ran = func.apply(this);
            func = null;
        }
        return ran;
    }
}

let sam = Once_1(() => console.log("Hello"))
sam()
sam()
sam()
sam()

//Example - 4
// Module pattern - function
var module = function(){
    function privateMethod(){
        console.log("Private method called")
    }
    function publicMethod(){
        console.log("Public method called")
    }
    return publicMethod
}

let mod = module()
mod()