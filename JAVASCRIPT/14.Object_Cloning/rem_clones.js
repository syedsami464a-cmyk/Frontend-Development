//4. JSON.parse(JSON.stringify(obj))

// obj = {
//     fname : "sami",
//     age:19
// };


// let dest = JSON.parse(JSON.stringify(obj));


// obj.fname = "saif";

// console.log(obj);   // original , change of original done by  ""obj.fname = "saif";"" which doesn't impact on clone
// console.log(dest);


//5.structuredClone(obj)

obj = {
    fname : "sami",
    age:19
};


let dest = structuredClone(obj);



obj.fname = "saif";

console.log(obj);   // original , change of original done by  ""obj.fname = "saif";"" which doesn't impact on clone
console.log(dest);


