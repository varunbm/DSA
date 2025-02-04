function sum(a,b,c){
    return a+b+c
}

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}

const addCurry = curry(sum)
console.log(addCurry(2)(3)(5));

const add2 = addCurry(2)
const add3 = add2(3)
const add5 = add3(5)

console.log(add5);