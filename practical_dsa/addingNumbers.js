// Sum of N natural numbers
// Input = n
// Output - Sum of N numbers

// First method
function Sum(n){
    let sum_val = 0;
    for(let i=0; i<=n;i ++){
        sum_val += i;
    }
    return sum_val;
}

console.log(Sum(3))

//Second method
function sum2(n){
    return n*(n+1)/2
}