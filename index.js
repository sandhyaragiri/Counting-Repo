const cookiebtn = document.querySelector("#cookiebtn");
const counterDisplay = document.querySelector("#counter");


let counter = 0;
cookiebtn.addEventListener("click", function(){
  counter ++;
  counterDisplay.innerText = counter;
});