console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person{
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    //to override the Object.prototype.toString()
    toString(){
       return Object.entries(this).toString();
    }
   
    addHobby(hobby){
    this.hobbies.push(hobby);
    }

    removeHobby(hobby){
        let findIndex = this.hobbies.indexOf(hobby);
        let firstValues = this.hobbies.slice(0, findIndex);
        let lastValues = this.hobbies.slice(findIndex + 1);
        this.hobbies = firstValues.concat(lastValues);
        //OR this.hobbies = this.hobbies.filter((rmHobby)=> rmHobby != hobby)
        //OR let findIndex = this.hobbies.indexOf(hobby);
        //this.hobbies.splice(findIndex, 1)
    }

    greeting(){
        console.log(`Hello someone!`)
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person{
    constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies)
        this.occupation = occupation;
    }
    greeting(){
        console.log(`Hello coder!`)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let person = new Person("Leanne", 1, "Cody, WY", ["coding", "working", "parenting", "tattooing"]);
person.addHobby("makeup");
person.addHobby("nails")
person.removeHobby("working")


let coder = new Coder("Bob", 3, "California", ["surfing", "working", "mountain climbing", "cooking"], "full stack web dev");
coder.addHobby("gym")
coder.removeHobby("working")

console.log(coder.toString())

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator{
    result = 0;
    
    add(a, b){
     let res;

     if(b == undefined){
     res = this.result + a;
     }else{
     res = a + b;
     }

     this.result = res;
     return this.result;
    }

    subtract(a, b){
     let res;

     if(b == undefined){
     res = this.result - a;
     }else{
     res = a - b;
     }

     this.result = res;
     return this.result;
    }

    multiply(a, b){
     let res;

     if(b == undefined){
     res = this.result * a;
     }else{
     res = a * b;
    }

    this.result = res;
    return this.result;
    }

    divide(a,b){
    let res;

     if(b == undefined){
     res = this.result / a;
     }else{
     res = a / b;
     }

    this.result = res;
    return this.result;
    }

    display(){
        console.log(this.result);
    }
}


let calc = new Calculator();

calc.add(10);
calc.subtract(2);
calc.multiply(4);
calc.divide(2);
calc.display();
