const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedValue = document.getElementById("selected-value");
let currentRating = 0;
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    currentRating = button.textContent;
  });

});
submitBtn.addEventListener("click", () => {
  if (currentRating === 0) return;
  selectedValue.textContent = currentRating;
  ratingCard.classList.remove("active");
  thankYouCard.classList.add("active");
});