// Class name
class Human{
    //properties
    name = "sami";
    #age = 19;
    weight = 60;
    greet = function(){
        return "Hello Guys";
    }

    // behaviour
    running(){
        console.log("I'm running",this.#age);
    }
    walking(){
        console.log("I'm walking");
    }
}

// object -> which is reference to the class

const obj = new Human();
obj.running();
console.log(obj.#age);  // getting error private field can't be accessed outside the block

// let me introduce the concept of getter and setter in the next file.............

