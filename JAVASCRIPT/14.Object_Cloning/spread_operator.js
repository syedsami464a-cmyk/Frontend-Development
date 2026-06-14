// here in this code you are different reference to same object i.e., you are not making any "clone"

// obj = {
//     fname : "sami",
//     age:19
// };
// let dest = obj;

// obj.fname = "saif";

// console.log(obj);
// console.log(dest);

// cloning -1: spread operator

obj = {
    fname : "sami",
    age:19
};

let dest = {...obj};

obj.fname = "saif";

console.log(obj);   // original , change of original done by  ""obj.fname = "saif";"" which doesn't impact on clone
console.log(dest);  // clone 