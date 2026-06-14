
// function outerFunction(){
//     let a = "samisyed";
//     function innerFunction(){
//         console.log(a)
//     }
//     innerFunction();
// }
// outerFunction();  // samisyed -> this is function call which calls the function to perform the operation..



function outerFunction(){
    let a = "samisyed";
    function innerFunction(){
        console.log(a)
    }
    return innerFunction();
} // a = "samisyed" -> will be removed here bcoz of 'a' is block scoped (let used)
let inner = outerFunction();
inner;                         // samisyed -> output
