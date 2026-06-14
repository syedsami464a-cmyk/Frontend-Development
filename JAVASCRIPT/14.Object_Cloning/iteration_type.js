obj = {
    fname : "sami",
    age:19
};

let dest = {}

for (let key in obj){
    // let newkey = key;
    // let newval = obj[key];
    // dest[newkey] = newval;
    dest[key] = obj[key];
}

obj.fname = "saif";

console.log(obj);   // original , change of original done by  ""obj.fname = "saif";"" which doesn't impact on clone
console.log(dest);
