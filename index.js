const button = document.querySelector("#cookiebtn");
const Counter = document.querySelector("#cookiecounter");
const counterSecs = document.querySelector("#counterSec");
let countCookie = 0;
Counter.innerText = countCookie;
button.addEventListener("click", counterClick);
function counterClick(){
  countCookie++;
  Counter.innerText = countCookie;
}

button.addEventListener("click", cookieScale);
function cookieScale(){
   button.addEventListener("mousedown", () => {
  button.style.transform = "scale(0.9)";
  button.style.transition = "0.3";
});

button.addEventListener("mouseup", () => {
  button.style.transform = "scale(1)";
   button.style.transition = "0.3";
});
}