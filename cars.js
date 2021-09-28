class Vehicle{//Defines class
    constructor(make,model,year){//takes in args for class
        this.make=make;//Sets make
        this.model=model;
        this.year=year;
    }
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year:${this.year}`);
    }
    
}

class Cars extends Vehicle{//Extends vehicle class
    constructor(make,model,year,doors){
        super(make,model,year)//Passes args to parent class
        this.doors=doors;
    }
    Information(){
        super.Information();//Calls ther parent class
        console.log(` doors:${this.doors}`);//Prints to console
    } 
}
let cars=new Cars('vw','Gold',2008,4);// creates instance with defined varibles
let t= cars.Information();//Calls imformation method
