
let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click',function(event){
// with out the below code it will navigate to the code help page
    
    // This code does change the link into click type -> change
    event.preventDefault();
    anchorElement.textContent = "Click accepted";

});