// Checks if any value meets the criteria and returns true
let arr = [1,2,3]

let isEven = arr.some(function(item){
    return item % 2 === 0
})

console.log(isEven)

// Checks if all values meet the criteria and returns true

let isAllEven = arr.every(function(item){
    return item % 2 === 0
})

console.log(isAllEven)

let items = [
    {id: 1, name: 'Super burger', price: 399, stock: true}, 
    {id: 2, name: 'Jumbo fries', price: 199, stock: true}, 
    {id: 3, name: 'Big Slurp', price: 299, stock: false}
]

const inStock = items.every((item) => item.stock)
console.log(inStock)

if(!inStock){
    console.log(`Sorry item ${items.find(val => !val.stock).name} is not in stock`)
}