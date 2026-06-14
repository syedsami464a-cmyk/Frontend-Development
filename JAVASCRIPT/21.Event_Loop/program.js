// // synchronous code

// console.log('SamiSyed')
// console.log('SaifSyed')
// console.log('ABCD')
// console.log(1+2)

// // output:
// // SamiSyed
// // SaifSyed
// // ABCD
// // 3

// // Asynchronous code

// function sayMyName(){
//     console.log("ABCDEFGHIJ");
// }

// function sayMyName1(){
//     console.log("ABCD");
// }

// console.log("Samisyed");
// setTimeout(sayMyName,5000);
// console.log("End");

// //output :
// // Samisyed
// //  End
// //  ABCDEFGHIJ


// console.log('Syed')
// console.log("sami")
// setTimeout(sayMyName1,2000)
// console.log('Hello')


 let btn = document.getElementById("myBtn");

    // ✅ Correct way in JavaScript
    btn.addEventListener("click", function onclick() {
      console.log('You Clicked the button');
    });

    console.log('Hi!');

    setTimeout(function timeout() {
      console.log("Click the button");
    }, 5000);

    console.log('welcome to this page');