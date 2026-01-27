// function add(a, b){
//    console.log("Sum inside function:", a + b);
//    return a + b;
// }
// console.log(add(5, 3)); 
// add(10, 15);
// function bmi(weight, height){
//    let bmiValue = weight / (height * height);
//    return bmiValue;
// }
// let value = bmi(80, 1.5);
// if(value < 18.5) {
//     console.log("Underweight");
// }else if(value >= 18.5 && value < 24.9){
//     console.log("Healthy");
// }else if(value >= 25 && value < 29.9){
//     console.log("Overweight");
// }else{
//     console.log("Obese");
// }
function calculate(num1, num2, operation){
//    if(operation === "add"){
//        return num1 + num2;
//     }else if(operation === "subtract"){     
//          return num1 - num2;
//     }else if(operation === "multiply"){
//          return num1 * num2;
//     }
//     else if(operation === "divide"){
//          return num1 / num2;
//     }   else{
//          return "Invalid operation";
//     }       
    switch(operation){
        case 'add': 
            return num1 + num2;
        case 'sub': 
            return num1 - num2;
        case 'mul': 
            return num1 * num2;
        case 'div': 
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}
console.log(calculate(26, 55, "add"));   