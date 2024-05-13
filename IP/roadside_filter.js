let arr = [1,2,3,4,5,6,7,8,9]

const myFiler = arr.filter((val) => {
    return val % 2 == 0
})

console.log(myFiler)

// =================================================================
Array.prototype.myPolyFiler = (cb) => {
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i])) newArr.push(this[i]);
    }
    return newArr;
}

const myPolyFilerResult = myPolyFiler.call(arr,(val) => {
    return val % 2 == 0
});


console.log(myPolyFilerResult)