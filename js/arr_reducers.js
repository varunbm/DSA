// I want to reduce my array to just one single value
// syntax================================================
// const reducedValue = array.reduce((prev,next,index,array) => {...}, initialValue)
// prev - sometimes called acc for accumulator as the value is dynamic, it accumulates the callback's value 
//        and is returned on the next iteration 
// next - The current element of the array, sometimes called value
// index - The index of the current element
// array - The array we are looping
// Inside the body of the function we need to return an expression which is then passed to the
// next iteration as prev. Reduce essentially remembers the value from each iteration and keeps 
// providing you it till array completes.
// Second argument - initialValue, allow us to pass an optional initial value to loop(which gets passes
// as "prev" value on the first iteration, with "next" being the first element)
// If no initialValue is set, Reduce will consider first element of array as the "prev" on the first 
// iteration

let arr = [1,2,3,4,5]
const reducedArray = arr.reduce((prev, next) => prev + next)

// console.log(reducedArray)

let items = [
    {id: 1, name: 'Super burger', price: 399}, 
    {id: 2, name: 'Jumbo fries', price: 199}, 
    {id: 3, name: 'Big Slurp', price: 299}
]

const totalPrice = items
                    // .map(item => item.price)
                    .reduce((prev,next) => prev + next.price,0)

console.log(totalPrice)

// WIthout using reduce 
let sum = 0;
for(let i=0; i<items.length; i++){
    sum += items[i].price
}

console.log(sum)