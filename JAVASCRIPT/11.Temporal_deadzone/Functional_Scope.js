/*

function sayHello(){
    const fullname = "Earth";
    console.log("Hello Duniya "+fullname)
}
console.log(fullname); // Reference Error
sayHello();

*/
 

console.log(fname);   //undefined
{
    var fname = "sami";
    let fname1 = "sami";
    const fname2 = "sami";
}
console.log(fname); // sami -> -> becoz its not a block scoped it leaks from the block
console.log(fname1); //Error -> becoz of block scoped
console.log(fname2); //Error -> becoz of block scoped




//what does the difference here var doesn't accessed out of block(function block) ,in normal block it does ?

/*                                                 // clarity 

//code - 1: it refers that it's a normal block so it leaks from that block
console.log(fname);   //undefined
{
    var fname = "sami";
  
}
console.log(fname); // sami -> -> becoz its not a block scoped it leaks from the block


// code -2 : its comes under functional block so no chance for leaks........
function sayHello(){
    var fullname = "Earth";
    console.log("Hello Duniya "+fullname)
}
console.log(fullname); // Reference Error
sayHello();

*/



// example program

function mul1(num1){
    return function mul2(num2){
        return num1*num2;
    }
}

let a = mul1(2);
let b = mul1(2);

console.log(a(3));
console.log(b(4));