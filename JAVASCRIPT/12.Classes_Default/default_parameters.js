/*
function Fname(fname="sami"){
    return fname;
}

console.log(Fname("saif")); 

console.log(Fname()); //default parameter
*/

/*
//function Fname(fname="sami",lname = "syed"){
function Fname(fname="sami",lname = fname.toUpperCase()){
    //console.log(fname);
    //console.log(lname);
    // return fname,lname; -> not process because ,(comma) is also a operator
    return [fname,lname] // output: [ 'sami', 'SAMI' ]
}

console.log(Fname()); 

*/


/*
function Fname(fname="sami",lname = [1,2,3,"sami",true]){
    return [fname,lname]
}

console.log(Fname());  // output :  [ 'sami', [ 1, 2, 3, 'sami', true ] ]

*/


//making default paramter as function

// function age(){
//     return 20;
// }

// let age = function(){
//     return 20;
// } 


age = () => {
    return 20;
}

function Fname(fname="sami",lname = age()){
    
    return [fname,lname]
}

console.log(Fname());
