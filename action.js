let container = document.querySelector(".container");
let thankState = document.querySelector(".thank__state");
const submit = document.querySelector(".btn--submit");
const rates = document.getElementById("rating");
const rateNumber = document.querySelectorAll(".btn--class");
let selectedRating = null;


submit.addEventListener("click", () => {
  if (selectedRating) {
    thankState.classList.remove("hidden--state");
    container.style.display = "none";
  }else{
    alert("Please select a rating before submitting.")
  }
});

rateNumber.forEach((e) => {
    e.addEventListener("click", () => {
      selectedRating=e.innerHTML;
      rates.innerHTML = selectedRating;
      console.log(selectedRating);
    });
  });

