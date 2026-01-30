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
// ...........
console.log("JS loaded");

const btn = document.getElementById("darkBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
const topBtn = document.getElementById("topBtn");

// show button after scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// go to top on click
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('#message');
const error = document.querySelector('#error');
form.addEventListener('submit',(e) =>{
  e.preventDefault();
  if(!name.value.trim()){
    // alert('Name is Required!!');
    error.innerText = '!!!Name is Required !!!';
  }
  else if(name.value.length< 4){
    error.innerText = '!!!Name should be at least of four letters!!!';
  }
  else if(!email.value.trim()){
    // alert('!!!Email is Required!!!');
    error.innerText = '!!!Email is Required!!!';
  }
  else if(!msg.value.trim()){
    // alert('!!!You must add message to send it!!!');
    error.innerText = '!!!You must add message to send it!!!'
  }
})