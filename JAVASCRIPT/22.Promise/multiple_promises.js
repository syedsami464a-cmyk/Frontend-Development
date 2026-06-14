let promise = new Promise((resolve,reject) =>{
    setTimeout(resolve,1000,"Zero");
})

let promise1 = new Promise((resolve,reject) =>{
    setTimeout(resolve,2000,"First");
})

let promise2 = new Promise((resolve,reject) =>{
    setTimeout(reject,3000,"Second");
})

// Promise.all([promise,promise1,promise2])
// .then((values)=>{
//     console.log(values) // (3) ['Zero', 'First', 'Second']
// })

Promise.all([promise1,promise2,promise])
.then((values)=>{
    console.log(values) // (3) ['First', 'Second', 'Zero']
})
.catch((error)=>{
    console.error("Error: "+error)  // > Error: Second
})
