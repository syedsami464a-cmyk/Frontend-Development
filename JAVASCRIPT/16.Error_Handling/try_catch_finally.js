try{
    console.log('Starting of try block');
    console.log(x);
    console.log('ending of try block');
}
catch(e){
    console.log(`Your Error is ${e}`);
}

// finally block will definately run either whatever the situation of try_catch block
finally{
    console.log("You are in finally block");
}

/* output: 

    Starting of try block
    Your Error is ReferenceError: x is not defined
    You are in finally block

*/