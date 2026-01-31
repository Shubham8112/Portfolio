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
const emailregex =  /^\S+@\S+\.\S+$/;
form.addEventListener('submit',(e) =>{
  e.preventDefault();
  error.style.color = ""; 
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
  }else if(!emailregex.test(email.value.trim())){
    // alert('Enter valid Email');
     error.innerText = 'Enter a valid Email!';
  }else if(!msg.value.trim()){
    // alert('!!!You must add message to send it!!!');
    error.innerText = '!!!You must add message to send it!!!';
  }
  else {
  error.style.color = "green";
  error.innerText = "Form submitted successfully!";
  form.reset();
}
})

