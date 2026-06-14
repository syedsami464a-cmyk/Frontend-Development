let arr = [1,3,4,2,4];
arr.push(9);
console.log(arr);
arr.pop(9); // removes our requires element
arr.pop(); //removes the left most or first element
console.log(arr);

// shift -> removes the first element
arr.shift()
console.log(arr)
// unshift -> adding element in the first item
arr.unshift('sami');
console.log(arr)

// slice -> takes out the shallow copy
let brr = [1,3,4,2,4,4,5,6,7,9];
console.log(brr.slice(2,5));

// splice you can add,remove,place element at any place
// splice(start,end,value)

let abrr = ["sami", "raj", "umar", "sairam"];
console.log(abrr.splice(1, 2, "Syed")); 
console.log(abrr);

