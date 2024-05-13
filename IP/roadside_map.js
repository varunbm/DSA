let arr = [1,2,3,4,5,6,7,8]

const myMap = arr.map((val,i,arr) => {
    return val * 3
})

console.log(myMap)

// Polyfills ============

Array.prototype.polyMap = function(cb){
    let arr = [];
    for(let i=0; i<this.length;i++){
        arr.push(cb(this[i]))
    }
    return arr
}

const myPolyMap = arr.polyMap((val,i,arr) => {
    return val * 3
})

console.log(myMap)