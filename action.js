let container= document.querySelector(".container");
let thankState=document.querySelector(".thank__state");
const submit =document.querySelector(".btn--submit");
const rates=document.getElementById("rating");
const rateNumber=document.querySelectorAll(".btn--class");

submit.addEventListener("click",()=>{
    thankState.classList.remove("hidden--state");
    container.style.display="none"
})

rateNumber.forEach((e)=>{
 e.addEventListener("click",()=>{
    rates.innerHTML=e.innerHTML;
    console.log(e.innerHTML);
 })
})