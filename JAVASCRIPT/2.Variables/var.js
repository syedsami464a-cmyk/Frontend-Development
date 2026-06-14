// var -> can be functional and globally (windows) workable 

/*
code - 1:

var a = 10;
var a = "Sami";
a = true;
console.log(a);
*/

/*
var age = 25;
if (true){
    console.log(age);
}
*/

function solve(){
    var age = 25;
    console.log(age);
}
console.log(age); // doesn't works bcoz of 
solve()
