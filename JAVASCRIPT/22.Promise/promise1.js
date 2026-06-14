
let promise1 = new Promise ((resolve,reject) => {
    let success = true; // Then ka message is Success
    //let success = false;   // Error: Rejected
    if (success){
        //resolve("Success")
        resolve(10)
    }
    else{
        //reject("Rejected")
        reject(-1)
    }
})

// promise1.then((message) =>{  // message = "Success"
//     console.log("Then ka message is "+message);
// }).catch(err=>{  // err = "Rejected"
//     console.log("Error: "+err);
// })

//using multiple "then" 

//////////////////// Type-1: \\\\\\\\\\\\\\\\\\\

// promise1.then((message)=>{  // message = "Success"
//     console.log("First Message: "+message);
//     return "Promised Fulfilled to Second Message"
// }).then((message)=>{        // message = "Promised Fulfilled to Second Message"
//     console.log("Secong Message: "+message)
//     return "Promised Fulfilled to Third Message"
// }).then((message)=>{        // message = "Promised Fulfilled to Third Message"
//     console.log("Third Message: "+message)
// })


///////////////////// Type-2: \\\\\\\\\\\\\\\\\\\\\

promise1.then((message)=>{  // message = "Success"  // message=10
    console.log("First Message: "+message);
    //return "Promised Fulfilled to Second Message"
    return 20;
}).then((message)=>{        // message = "Promised Fulfilled to Second Message"  // message = 20;
    console.log("Secong Message: "+message)
    //return "Promised Fulfilled to Third Message"
    return 30;
}).then((message)=>{        // message = "Promised Fulfilled to Third Message"   // message = 30;
    console.log("Third Message: "+message)
}).finally(()=>{
    console.log("I will run forever")
})

