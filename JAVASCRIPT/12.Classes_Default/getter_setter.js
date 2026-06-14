// Class name
class Human{
    //properties
    name = "sami";
    #age = 19;
    weight;
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

    // with get we can easily access the private properties
    get fetchAge(){
        return this.#age;
    }

    // with set we can easily modify the private properties
    set modifyAge(age){
        this.#age = age;
    }
}

// object -> which is reference to the class

const obj = new Human();
obj.running();
console.log(obj.fetchAge); // get and set is not a function ,so don't use () outside when accessing it
obj.modifyAge = 30;         // see here i just used setter to modify the age not any calling and all..
console.log(obj.fetchAge);