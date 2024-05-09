//forEach...
// 1) It does not return any value, therefore it cant be chained, that transforms the data, 
// like map() and filter
// 2) Does not allow us to break or continue the loop or loop backwards, use for...in or for...of
// 3) We can change the "this" context via second argument, forEach(callBack, thisArg), so that any references
// to "this" inside your callback point to your object
// 4) forEach will skip the empty slots 
let arr = ['a','b','c','d'];
arr.forEach((item, index) => {
    console.log(item,index)
})

// In summary, the for...of statement is used to iterate over the values of an iterable object, 
// while the for...in statement is used to iterate over the properties of an object.

// for...in example
// It’s a type of loop that allows you to access each property and value of an object 
// without knowing the specific name of the property.
var person = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

for (var prop in person) {
    console.log(prop + ': ' + person[prop]);
}


// for...of example
let iterableObject = [1, 2, 3, 4, 5];
for (let value of iterableObject) {
  console.log(value);
}