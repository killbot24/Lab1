class BMI{//Defines class
    constructor(height, weight){{//takes in args for class
        this.height=height;//Sets height
        this.weight=weight;
    }
    calculateBMI(){
        let bmi= this.weight / (this.height ** 2);// Does math
        return bmi;
    }
    
}
let MyBmi = new BMI(2,90);// creates instance with defined varibles
let calculatedBMI=MyBmi.calculateBMI();//Calls method
console.log(calculatedBMI);//Prints to console

