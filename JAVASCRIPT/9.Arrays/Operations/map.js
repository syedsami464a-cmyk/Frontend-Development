let arr = [10,20,30,40];
let ansArray = arr.map((number) => {
    return number*number;
})
console.log(ansArray);

/*
let answ = (x,y) =>{
    return x*y;
}

console.log(answ(10,20));
*/

let array = [1,2,3,4,5];
let ansArray1 = array.map((num,idx) => {
    console.log(num);
    console.log(idx);
})