//compile time

// try{
//     console.log(1 // syntax error -> compile time error
// }
// catch{
//     console.log('Make it correct syntax');
// }


// runtime error

try{
    console.log(x);
}
catch{
    console.log('Arey first nv declare chey ra,next print ra'); // Arey first nv declare chey ra,next print ra
}

try{
    console.log(x);
}
catch(e){
    console.log(`Your Error: ${e}`);  // Your Error: ReferenceError: x is not defined
}

