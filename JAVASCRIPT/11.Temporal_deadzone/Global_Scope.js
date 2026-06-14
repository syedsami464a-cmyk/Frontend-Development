var age = 20;
console.log(age);
{
    console.log(age);
}

if (true){
    console.log("From Block:"+age);
}

for(let i = 0;i<2;i++){
    console.log("From loop:"+age);
}

let fun = () =>{
    console.log("FRom function: ",age);
}
fun();