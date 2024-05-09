function mul(...args) {
    console.log(args)
//    return args[0] * args[1]
}
let arr = [5,6,6,7]
let obj = {'a': 1, 'b': 2, 'c': 3} // objects not possible
console.log(mul(...arr))

function greeting(name){
    alert(`Hello ${name}`)
}

function processUserInput(cb){
    var name = prompt('Enter your name');
    cb(name)
}

processUserInput(greeting)