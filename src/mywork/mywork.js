const sampleImgs = document.querySelectorAll(".sample");
const sampleDescr = document.querySelectorAll("div.description");
const sampleCont = document.getElementById("worksamplecontainer");

const workSamps = document.querySelectorAll(".worksample");
const rightButton = document.getElementById("right-arrow");
const leftButton = document.getElementById("left-arrow");

// sampleImgs.forEach((img) => {
//   img.addEventListener("mouseenter", () => {
//     img.classList.add("hover");
//   });
// });

// for (let img of sampleImgs) {
//     img.addEventListener("mouseenter", () => {
//       if (img.classList.contains("active")) {
//         img.classList.add(".hover");
//       }
//     });
//   }
let activeSample = 0;
workSamps[activeSample].classList.add("active");

rightButton.addEventListener("click", () => {
  activeSample++;
  if (activeSample > workSamps.length - 1) {
    activeSample = 0;
  }
  makeActive();

  //more code goes here after functions created
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
    sample.classList.remove("active");
  });

  workSamps[activeSample].classList.add("active");
}
