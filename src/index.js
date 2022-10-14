const quoteOne = document.querySelectorAll(".quote-one");
const quoteTwo = document.querySelectorAll(".quote-two");
const loadBox = document.getElementById("load-box");
const feDev = document.getElementById("fe-dev");
const opera = document.getElementById("opera");
const dogMom = document.getElementById("dog-mom");
const footer = document.getElementById("footer");

$(window).on("load", function () {
  $(loadBox).delay(6000).fadeOut(1000);

  $(quoteOne).addClass("active");
  $(quoteTwo).addClass("active");

  setTimeout(function () {
    $("body").removeClass("h-full overflow-hidden");
    $("html").removeClass("h-full overflow-hidden");
    $(footer).addClass("opacity-50").removeClass("opacity-0");
  }, 10500);

  setTimeout(function () {
    $(feDev).addClass("opacity-100 flipY").removeClass("opacity-0");
    $(opera).addClass("opacity-80").removeClass("opacity-0");
    $(dogMom).addClass("opacity-60").removeClass("opacity-0");
  }, 7500);
});

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
