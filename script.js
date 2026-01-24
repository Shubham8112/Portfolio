console.log("javascript file loaded successfully");
let num1 = 10;
let num2 = 5;
console.log("Sum:", num1 + num2);
//conditional example
if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}else{
    console.log(`${num2} is greater than ${num1}`);
}
//for loop example
for(let i = 0;i<num2;i++){
    console.log(i);
}
//array example
let arr1= [2,4,6,8,10];
// arr1.forEach(element => {
//     console.log("Element:", element);
// });
console.log(arr1);
//push example:- push new entry at the end
arr1.push(12);
console.log("After push:", arr1);
//pop example:- remove last entry
arr1.pop();
console.log("After pop:", arr1);
//shift:- remove first entry
arr1.shift();
console.log("After shift:", arr1);
//unshift:- add new entry at the start
arr1.unshift(0);
console.log("After unshift:", arr1);
//object in javascript: key-value pair
const student = {
    name: "Ram",
    age: 21,
    marks:80
}
console.log(`Name: ${student.name},Age: ${student.age}, Marks: ${student.marks}`);
//
const students = [
    {Name: "Shubham", Age:22, Marks:79},
    {Name: "Ravi" ,Age:20, Marks:85},
    {Name: "Ankit" ,Age:23, Marks:90}
];
for(let i=0;i<students.length;i++){
    console.log(`Name: ${students[i].Name}, Age: ${students[i].Age}, Marks: ${students[i].Marks}`);
}