const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaaaaaaaack samee hehehheheeh";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHl2cjEyaWprczNvYjZnYWc4YmFxamZqYmszc3poNnY3bmF4djhybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/O2Xwmb3Pg9GG8xVvKI/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});