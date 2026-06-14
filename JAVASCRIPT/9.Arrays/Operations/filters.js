/*

let arr = [1,2,3,4,5,6,7,8];
let arrAnswer = arr.filter((number) => {
    return number%2===0;
})
console.log(arrAnswer);

*/

/*

let arr = [1,2,3,4,5,6,7,8];
let arrAnswer = arr.filter((num) => {
    if (num%2 === 0)
        return true;
    else
        return false;
})
console.log(arrAnswer);

*/

let arr = [1,2,'sami','saif'];
let ans = arr.filter((val) => {
    if (typeof(val) === "number"){ // "number"
        return true;
    }
    else{
        return false;
    }
})

console.log(ans);