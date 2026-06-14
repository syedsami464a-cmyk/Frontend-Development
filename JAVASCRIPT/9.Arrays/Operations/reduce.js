/*

let arr = [1,2,3,4,5];  // var iterate each element in this list
let ans = arr.reduce((acc,curr) =>{
    return acc+curr;
})
console.log(ans);

*/

let arr = [1,2,3,4,5];  // var iterate each element in this list
let ans = arr.reduce((acc,curr) =>{
    return acc+curr;
},0) //initially making acc value to be 0.
console.log(ans); 

/* both above 2 codes refers to same */

