// Why ? 
// To avoid passing same values again and again
// TO create a Higher order functions
// To create a pure functions 

function f(a){
    return function (b){
        return a+b
    }
}

console.log(f(5)(6))

// Example - 2
function evaluate(operation){
    return function(a){
        return function(b){
            if (operation === "sum") return a + b;
            if (operation === "sub") return a - b;
            if (operation === "mul") return a * b;
            if (operation === "div") return a / b;
            else return "Invalid operation"
        }
    }
}

// console.log(evaluate("sum")(2)(2))
const mul = evaluate("mul")

console.log(mul(2)(2))
console.log(mul(5)(5))

// Example - 3 - Infinite currying 
function add(a){
    return function(b){
        if(b) return add(a+b)
        return a
    }
}

console.log(add(3)(3)(3)())

// Example - 4 - DOM manipulation
function updateElement(id){
    return function(content){
        // document.querySelector(`#${id}`).textContent = content
    }
}

const updateHeading = updateElement('heading');
updateHeading('Hello, world')
updateHeading('Hello')
updateHeading('Bye')

// Example - 5 - Convert normal function to currying function
// Ex function(a,b,c) to function(a)(b)(c)
function curry(func){
    return function curriedFunction(...args){
        console.log('----',...args)
        if(args.length >= func.length){
            return func(...args)
        }else{
            return function(...next){
                console.log(...args,...next)
                return curriedFunction(...args,...next)
            }
        }
    }
}

function sum(a,b,c){
    return a+b+c
}
const totalSum = curry(sum)
console.log(totalSum(1)(2)(3))