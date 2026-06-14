const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
]

let first = arr[0];
let last = arr[arr.length-1];
console.log(first(10,20));
console.log(last(10,20));