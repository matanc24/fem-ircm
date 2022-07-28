const submitButton = document.querySelector('.submit-btn');
const cardContent1 = document.querySelector('.card-content-1');
const cardContent2 = document.querySelector('.card-content-2');
const ratingBtns = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let starsScore;

const onSubmit = () => {
  cardContent1.classList.add('hide');
  cardContent2.classList.remove('hide');
  score.textContent = starsScore;
};
const handleRating = (e) => {
  ratingBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  if (e.target.classList.contains('rating-btn')) {
    e.target.classList.add('active');
  } else {
    e.target.parentElement.classList.add('active');
  }
  starsScore = e.target.textContent;
};
ratingBtns.forEach((btn) => {
  btn.addEventListener('click', handleRating);
});
submitButton.addEventListener('click', onSubmit);
