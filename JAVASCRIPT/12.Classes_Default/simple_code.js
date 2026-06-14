// Class name
class Human{
    //properties
    name = "sami";
    age = 19;
    weight = 60;
    greet = function(){
        return "Hello Guys";
    }

    // behaviour
    running(){
        console.log("I'm running");
    }
    walking(){
        console.log("I'm walking");
    }
}

// object -> which is reference to the class

const obj = new Human();
console.log(obj.running());  // getting undefined because i haven't used any return statement we need to take over of obj.running()
obj.running();
console.log(obj.age);
console.log(obj.greet)   // [Function: greet]
console.log(obj.greet()) // Hello Guys