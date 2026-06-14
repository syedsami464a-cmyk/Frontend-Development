// Good Practice

// function changeText(){
//     let para = document.getElementById('fpara')
//     fpara.textContent = "Hello Saif";
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changeText);

// fpara.removeEventListener('click',changeText);




// Bad Practice

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',function (){
//     let para = document.getElementById('fpara')
//     fpara.textContent = "Hello Saif";
// });

// // this doesn't make any change in the code that means this removeEvent doesn't remove the event of action
// // if you are writin like this means there will be two objects will creating there.. son doesnt't effect to previous one
// fpara.removeEventListener('click',function (){
//     let para = document.getElementById('fpara')
//     fpara.textContent = "Hello Saif";
// });


// this comes under capturing phase bcoz of extra parameter true  ,but bydefault it is in bubbling phase.. 
function changeText(event){
    console.log(event);
    let para = document.getElementById('fpara');
    fpara.textContent = "Hello Saif";
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click',changeText,true);