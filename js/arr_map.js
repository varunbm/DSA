// 1) Loops through the list and returns a new value of each element, creates a new array.
// 2) Array.map is an immutable pattern, as it creates a new array from an existing array 
// also ...spread operator returns new object instead of mutating existing object.
// 3) Does not allow us to break or continue the loop or loop backwards ( reverse), use for...in or for...of
// 4) map will skip the empty slots 

let arr = [1,2,3,4,5,6,7,8]

const newArr = arr.map(x => { x* 2})

// console.log(newArr)

let items = [
    {id: 1, name: 'Super burger', price: 399}, 
    {id: 2, name: 'Jumbo fries', price: 199}, 
    {id: 3, name: 'Big Slurp', price: 299}
]
const newItem = items.map((item,i) => {
    if(item.id === 2){
      return {
            ...item,
          price : item.price / 2
      };
    }
    return item
});

// console.log(newItem)
// console.log(items)

const newItems2 = items.map(x => x.price)

// ================= Polyfills =================
Array.prototype.myMap = function(){
    let newArray = [];
    for(let i=0; i<this.length; i++){
        newArray.push(this[i].price * 2)
    }
    return newArray;
}

const newItem3 = items.myMap()
console.log(newItem3);