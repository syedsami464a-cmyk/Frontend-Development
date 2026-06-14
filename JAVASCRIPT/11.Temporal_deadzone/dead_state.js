/*
console.log(marks);
console.log("Hello Guys");
console.log("This is Sami syed");
const marks = 20;  // this will present bcoz error not been accessed by below line of code
*/                    //  -> it is under temporal deadzone
//console.log(marks);






console.log(marks); // ❌ ReferenceError (marks is in Temporal DeadZone)
const marks = 20;
console.log(marks); // ✅ Works after initialization
