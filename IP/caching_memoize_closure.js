// Implement caching or memoized function 

function myMemoize(func){
    let cacheValue = {}; // cacheValue = {"5,6" : 30}
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!cacheValue[argsCache]){
            cacheValue[argsCache] = func.call(this, ...args);
        }
        return cacheValue[argsCache];
    }
}


const costlyMultiply = function(a,b){
    for(let i=0;i<10000000; i++){}
    return a*b;
}

let memoizedMultiply = myMemoize(costlyMultiply)

console.time("First Call")
console.log(memoizedMultiply(2,2))
console.timeEnd("First Call")

console.time("Second Call")
console.log(memoizedMultiply(2,2))
console.timeEnd("Second Call")