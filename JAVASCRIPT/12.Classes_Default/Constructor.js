class Human{    
    age;
    name;
    height;
    weight;
    color = "White"
    //properties
    constructor(name,ht,wt,age){
        this.name = name; //order1
        this.height = ht; //order2
         this.weight = wt; //order3
        this.age = age; //order4
        
    }
    // order wise follows so take care while using this
    showDetails(){
        // “JavaScript constructor me values automatic assign hoti hain kya? Ya bas order ke hisaab se hi hoti hain”
        //console.log(`Hello ${this.name},Your age is ${this.age} . Your Height is ${this.weight} and Weight is ${this.height}`);

        // so change it as 
        console.log(`Hello ${this.name},Your age is ${this.age} . Your Height is ${this.height} and Weight is ${this.weight}`);
    }

}

let obj1 = new Human("Sami",169,60,19);

let obj2 = new Human("Saif",160,60,18);

obj1.showDetails();
obj2.showDetails();