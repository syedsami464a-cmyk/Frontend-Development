/*

-> forEach loop 

let arr = [10,20,30];
arr.forEach((value,index) =>{
    console.log("Number :", value,"index: ",index);
});

-> for-in loop 

let arr1 = [10,20,30,40];
for (let key in arr1){
    console.log(key);
}

-> for-of loop 

let arr2 = [10,20,30,40];
for (let val of arr2){
    console.log(val);
}

*/

//simple programs

//let getSum = function(arr){
// let getSum 
let getSum = ((arr)=>{
    sum = 0
    arr.forEach((value) =>{
        sum += value;
    })
    return sum;
})
    


let arr = [10,20,30,40,50];
let totalSum = getSum(arr)
console.log(totalSum);