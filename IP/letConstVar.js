//scope
//block scoping
{
    var a = 5;
}

console.log(a)
//shadow scope
//declaration
const bc = [1,2,3,4];
console.log(bc)
Object.freeze(bc);

bc[0] = 10
bc[1] = 20

console.log(bc)


// 
const myObj = {
    name: 'foo',
    age: 20,
    gender: 'male',
    sayName: function(){
        console.log(this.name)
    }
}
Object.freeze(myObj);
myObj['name'] = "Varun"

console.log(myObj)

// ===================
let num = 10
function increment(num){
    num++
    console.log(`Inside function ${num}`)
}

console.log(`Before the call ${num}`)
increment(num);