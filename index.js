const button = document.querySelector("#cookiebtn");
const Counter = document.querySelector("#cookiecounter");
const counterSecs = document.querySelector("#counterSec");
let countCookie = 0;
button.addEventListener("click", counterClick);
function counterClick(){
  countCookie++;
  Counter.innerText = countCookie;
}