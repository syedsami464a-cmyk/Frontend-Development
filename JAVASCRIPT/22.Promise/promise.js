
// let fpara = new Promise((resolve,reject) =>{
//     console.log('Sami'); // Promise {<pending>}
//     resolve(1000);
// })


// let fpara = new Promise((resolve,reject)=>{
//     console.log("sami");
//     reject(new Error("Internal Server Error"));
// });

// according to my search (resolve,research are parameters we can use anything in place of that (resol,resul), or (r,rr) or anything..

// function -> type:1

// let fpara = new Promise((resolve,reject)=>{
//     console.log("sami");
//     resolve("Success")
//     reject(new Error("Internal Server Error"));  
// });


// function -> type:2

// let fpara = new Promise(function(resolve,reject){
//     console.log("sami");
//     resolve("Success")
//     reject(new Error("Internal Server Error"));  
// });

// // result holds the resolve value
// fpara
// .then(result =>{
//     console.log("Resolved: "+result);
// })


// // err = Error("Internal Server Error")
// // err.message = "Internal Server Error"
// .catch(err=>{
//     console.log("Rejected: "+err.message);
// });



// let para = new Promise((resolve,result) =>{
//     setTimeout(()=>{
//         console.log('HEllo GUys')
//         // resolve(2000)
//     },7000);
//     resolve(2000)
   
// })  

//////////////////// or \\\\\\\\\\\\\\\\\\\\\\\

let para = new Promise((resolve,result) =>{
    setTimeout(function sayMyname(){
        console.log('HEllo GUys')
        resolve(2000) // preferred most
    },7000);
    // resolve(2000)
}) 