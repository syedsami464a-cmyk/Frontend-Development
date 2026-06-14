/*
sayHello();
function sayHello(){
    console.log("HEllo")
} 
*/

/*
console.log(greet); //hosting is not process in function in additional i used let variable so no process
let greet = function(a,b){
    console.log("HEllo Guys!");
}
console.log(greet); //[Function: greet]
*/

/*
function greetMe(greet,myname){
    console.log("HEllo ",myname);
    greet()
}
function greet(){
    console.log("Greeting for the day");
}

greetMe(greet,"Sami");
*/


function solve(number1){
    return function(number2){
        return number1*number2;
    }
}
let ans = solve(5);  // sends 5 to number1
let finalAns = ans(10); //sends 10 to number2
console.log(finalAns); // 50

// example program

function mul1(num1){
    return function mul2(num2){
        return num1*num2;
    }
}

let a = mul1(2);
let b = mul1(2);

console.log(a(3)); // 6
console.log(b(4)); // 8