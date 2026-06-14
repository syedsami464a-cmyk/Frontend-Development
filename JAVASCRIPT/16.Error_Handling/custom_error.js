// code - 1: 
// try{
//     console.log(x);
// }
// catch(err){
//     console.log(err)  // ReferenceError: x is not defined
//     throw new Error("Bhai first declare karo"); // Error: Bhai first declare karo
// }

// Error type is totally changed here........  i.e., custom error


//code - 2:

function checkAge(age){
    if (age>=18){
        return "Access Granted.."
    }
    else{
        let error = new Error ("Age must be strictly greater than 18");
        error.name = "Validation Error";
        throw error;
    }
}

try{
    console.log(checkAge(18));
    console.log(checkAge(13));

}
catch(err){
    console.log(`${err.name} : ${err.message}`);
}



function checkAge(age){
    if (age<18){
        let error = new Error("Age must be greater than or equal top 18");
        error.name = "Validation Error";
    }
    return "Eligible Person";
}

try{
    console.log(checkAge(13));
    console.log(checkAge(19));
}
catch(err){
    console.log(`${err.name} : ${err.message1}`); // message is built in type.. used to describe the error
}

// my self coding practise


function checkAge(age){
    if (age<18){
        let error = new Error("Age must be greater than or equal top 18");
        error.name = "Validation Error";
        throw error // throw error with we can generate error
    }
    return "Eligible Person";
}

try{
    console.log(checkAge(13));
    console.log(checkAge(19));
}
catch(err){
    console.log(`${err.name} : ${err.message}`);
}