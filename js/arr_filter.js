// 1) Conditionally return certain elements from the array into new arrays
// 2) Its commonly used to remove elements from array by excluding them from the result
// 3) I want a new array containing just the elements I need
// 4) Inside filter, its evaluates expression to either true or false.
// 5) Array elements that are evaluated to true will be stored in the new array and the elements
// evaluated to false will be excluded
// 6)Filter will shallow clone your object reference to the new array
// 7) Filter is similar to to Find, but returns multiple elements

let items = [
    {id: 1, name: 'Super burger', price: 399}, 
    {id: 2, name: 'Jumbo fries', price: 199}, 
    {id: 3, name: 'Big Slurp', price: 299}
]

const expensiveItems = items.filter(item => item.price > 199).length
// shallow copy example... 
// expensiveItems[0].name = "New name";
console.log(expensiveItems)

// ============== polyfill ============
Array.prototype.myFilter = function(){
    let newArray = [];
    for(let i=0;i<this.length;i++){
        if(this[i].price > 199){
            newArray.push(this[i])
        }
    }
    return newArray;
}

const fromPolyfill = items.myFilter()
console.log('***********',fromPolyfill)
