import sideNavData from "./sideNavData.js";

const quoteOne = document.querySelectorAll(".quote-one");
const quoteTwo = document.querySelectorAll(".quote-two");
const loadBox = document.getElementById("load-box");
const feDev = document.getElementById("fe-dev");
const opera = document.getElementById("opera");
const dogMom = document.getElementById("dog-mom");
const interactiveNav = document.getElementById("interactive-nav");
const seeMore = document.getElementById("click-to-see");
const myWork = document.getElementById("my-work-section");
const experience = document.getElementById("experience-section");
const contact = document.getElementById("contact-section");

//open interactive nav on click
$(seeMore).click(function () {
  if (interactiveNav.classList.contains("-translate-x-full")) {
    interactiveNav.classList.remove("-translate-x-full");
    interactiveNav.classList.add("translate-x-0");
  } else {
    interactiveNav.classList.add("-translate-x-full");
    interactiveNav.classList.remove("translate-x-0");
  }
});

//set innerHTML of interactive nav
$(document).scroll(function () {
  const currentLocation = $(interactiveNav).offset();
  const workLocation = $(myWork).offset();
  const experienceLocation = $(experience).offset();
  const contactLocation = $(contact).offset();
  if (currentLocation.top >= contactLocation.top) {
    $(interactiveNav).html(sideNavData[3].innerHtml);
  } else if (currentLocation.top >= experienceLocation.top) {
    $(interactiveNav).html(sideNavData[2].innerHtml);
  } else if (currentLocation.top >= workLocation.top) {
    $(interactiveNav).html(sideNavData[1].innerHtml);
  } else $(interactiveNav).html(sideNavData[0].innerHtml);
});

//load box function
$(window).on("load", function () {
  $(loadBox).delay(5000).fadeOut(1000);

  $(quoteOne).addClass("active");
  $(quoteTwo).addClass("active");

  setTimeout(function () {
    $("body").removeClass("h-full overflow-hidden");
    $("html").removeClass("h-full overflow-hidden");
  }, 7500);

  setTimeout(function () {
    $(feDev).addClass("opacity-100 flipY").removeClass("opacity-0");
    $(opera).addClass("opacity-80").removeClass("opacity-0");
    $(dogMom).addClass("opacity-60").removeClass("opacity-0");
  }, 6000);
});

//scroll smooth to navigation links
function scrollToAnchor(targetId) {
  var aTag = $("div[id='" + targetId + "']");
  $("html,body").animate({ scrollTop: aTag.offset().top - 10 }, "slow");
}

$("#link-home").click(function () {
  scrollToAnchor("home-section");
});

$("#link-work").click(function () {
  scrollToAnchor("my-work-section");
});

$("#link-experience").click(function () {
  scrollToAnchor("experience-section");
});

$("#link-contact").click(function () {
  scrollToAnchor("contact-section");
});

//fade in elements on page scroll
$(document).ready(function () {
  $(window).scroll(function () {
    $(".fade").each(function (i) {
      var bottom_of_element = $(this).offset().top + 200;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });
});

//CONTACT FORM
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response;
}
//send email
const submitButton = document.getElementById("sendButton");
const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const url =
  "https://functionsite.azurewebsites.net/api/ContactForm?code=MfEKY_yBSvRN-8NKD-G0Vkp27i1a1RqgKku4vJsvAOgUAzFuQ_hO3A==";
const submitDiv = document.createElement("div");
const acceptedMessage = document.getElementById("acceptedText");

// const message = document.getElementById("acceptedText");

submitButton.addEventListener("click", async () => {
  inputs.forEach((element) => {
    if (element.value) {
      element.disabled = true;
    }
  });
  if (textArea.value) {
    textArea.disabled = true;
  }

  const data = {
    name: inputs[0].value,
    replyEmail: inputs[1].value,
    message: textArea.value,
  };
  if (data.name && data.replyEmail && data.message) {
    await postData(url, data);

    acceptedMessage.innerHTML = "Thank you, your message was submitted!";
    acceptedMessage.classList.add("fade-out");
  }
});
