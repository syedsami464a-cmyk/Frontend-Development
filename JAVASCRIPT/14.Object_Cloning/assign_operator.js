obj = {
    fname : "sami",
    age:19
};

let dest = Object.assign({},obj);

obj.fname = "saif";

console.log(obj);   // original , change of original done by  ""obj.fname = "saif";"" which doesn't impact on clone
console.log(dest);
