// code-1 :

// const t1 = performance.now()

// for (let i=0;i<=100;i++){
//     let para = document.createElement('p')
//     para.textContent = "Para" + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now()

// console.log("Time taken by code-1: "+(t2-t1)); // Time taken by code-1: 1.7000000000116415



// code-2 :

// const t3 = performance.now()

// let mydiv = document.createElement('div')

// for(let i = 0;i<100;i++){
//     let para = document.createElement('p')
//     para.textContent = "Para" + i;
//     mydiv.appendChild(para);
// }

// const t4 = performance.now()

// document.body.appendChild(mydiv)

// console.log("Time taken by code-2: "+(t4-t3))  // performance.js:32 Time taken by code-2: 0.3000000000174623


// code-3 :

t8 = performance.now()
let fragment = document.createDocumentFragment();
for (let i = 1;i<=100;i++){
    let para = document.createElement('p')
    para.textContent = 'This is para '+ i + "abc";

    fragment.appendChild(para);
}

document.body.appendChild(fragment);

t9 = performance.now()

console.log(t9-t8)