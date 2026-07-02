const cookiebtn = document.querySelector("#cookiebtn");
const counterDisplay = document.querySelector("#counter");
const cpsDisplay = document.querySelector("#counterSec");
const grandmotherBtn = document.querySelector("#item1");
const bakerBtn = document.querySelector("#item2");


let counter = 0;
let counterSeconds = 0;
counterDisplay.innerText = counter;
cookiebtn.addEventListener("click", function(){
  counter ++;
  counterDisplay.innerText = counter;
});

//perseconds 
grandmotherBtn.addEventListener("click", ()=>{
  if(counter >=100){
    counter -= 100;
    counterSeconds ++;
    cpsDisplay.innerText = `${counterSeconds}/S`;
  } 
  else {
    alert("You can't afford cookies");
  }
});

//BAKER button

bakerBtn.addEventListener("click", ()=>{
  if(counter >=500){
    counter -=500;
    counterSeconds++;
    cpsDisplay.innerText = `${counterSeconds}/S`;
  }

  else {
    alert("You can't afford baker");
  }
});



setInterval(()=>{
   counter = counter + counterSeconds;
  counterDisplay.innerText = counter;
}, 1000);