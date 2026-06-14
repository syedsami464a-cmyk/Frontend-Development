// Type - 1:

// let paras = document.querySelectorAll('p');

// for (let i=0 ; i< paras.length ; i++){
//     let para = paras[i]
//     para.addEventListener('click',function(){
//         alert('You have Clicked on para : '+(i+1));
//     })
// }


// Type - 2:

// let paras = document.querySelectorAll('p');
// function alertpara(event){
//     // alert("You have clicked on para"+(i+1)) -> it doesn't work i doesn't iterate here..
//     alert("You have clicked on "+ event.target.textContent)
// }

// for (let i=0;i< paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',alertpara);
// }

// Type - 3:

    // function alertpara(event){
    //     alert("You have Clicked on Paras: "+event.target.textContent);
    // }

    // let mydiv = document.getElementById('wrapper');
    // document.addEventListener('click',alertpara);


// Type - 4:


    function alertpara(event){
        if (event.target.nodeName === 'SPAN'){
        alert("You have Clicked on Paras: "+event.target.textContent);
        }
    }

    let mydiv = document.getElementById('wrapper');
    document.addEventListener('click',alertpara);