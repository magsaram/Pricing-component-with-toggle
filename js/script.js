const slider = document.querySelector("input");
const annually = document.querySelectorAll(".annually");
const monthly = document.querySelectorAll(".monthly");

slider.addEventListener("click", function () {
  annually.forEach((annually) => annually.classList.toggle("show"));
  monthly.forEach((monthly) => monthly.classList.toggle("show"));
});
