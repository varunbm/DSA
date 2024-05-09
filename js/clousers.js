function outer(){
    let counter = 0;
    console.log("Outer scope",counter);
    function inner(){
        console.log("Inner scope",counter);
        counter++;
        console.log(counter);
    }
    return inner;
}
let fn = outer();
// fn();
// fn();

// Time optimization ============
function one(){
    let arr = []
    console.log("Only once")
    for(let i=0;i<=1000000;i++){
        arr[i] = i * i;
    }
    return function(index){
        console.log(arr[index])
    }
}
const closure = one();
console.time("5")
closure(5)
console.timeEnd("5")
console.time("15")
closure(15)
console.timeEnd("15")
console.time("25")
closure(25)
console.timeEnd("25")
console.time("1000000")
closure(1000000)
console.timeEnd("1000000")




