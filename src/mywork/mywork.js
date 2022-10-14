const sampleImgs = document.querySelectorAll(".sample");
const sampleDescr = document.querySelectorAll("div.description");
const sampleCont = document.getElementById("worksamplecontainer");

const workSamps = document.querySelectorAll(".worksample");
const rightButton = document.getElementById("right-arrow");
const leftButton = document.getElementById("left-arrow");

let activeSample = 0;
workSamps[activeSample].classList.add("active");

rightButton.addEventListener("click", () => {
  activeSample++;
  if (activeSample > workSamps.length - 1) {
    activeSample = 0;
  }
  makeActive();
});

leftButton.addEventListener("click", () => {
  activeSample--;
  if (activeSample < 0) {
    activeSample = workSamps.length - 1;
  }
  makeActive();
});

function makeActive() {
  workSamps.forEach((sample) => {
    if (sample.classList.contains("active")) {
      sample.classList.remove("active");
    }
  });

  workSamps[activeSample].classList.add("active");
}
