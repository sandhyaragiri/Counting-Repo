const button = document.querySelector("#cookiebtn");
const Counter = document.querySelector("#cookiecounter");
const counterSecs = document.querySelector("#counterSec");
let countCookie = 0;
let cookieSeconds = 0;
Counter.innerText = countCookie;
button.addEventListener("click", function(){
  countCookie++;
  Counter.innerText = countCookie;
});

//perseconds
setInterval(()=>{
  cookieSeconds ++;
  Counter.innerText = cookieSeconds;
}, 1000);

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