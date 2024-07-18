const progressBar = document.querySelector(".progress-bar");
// const progressBarEnd = document.querySelector(".progress-bar-end");

const barZero = () => {
  progressBar.style.width = "0%";
  progressBar.classList.remove("animate");
};

const barFull = () => {
  setTimeout(() => {
    progressBar.style.width = "100%";
    progressBar.classList.add("animate");
  }, 10); // Small delay to ensure the transition effect
};

const animateProgressBar = () => {
  barZero();
  barFull();
};

animateProgressBar(); // Call the function to animate the progress bar from 0% to 100%

setInterval(animateProgressBar, 7000);
