async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}
//send email
const submitButton = document.getElementById('sendButton');
const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const url = 'https://functionsite.azurewebsites.net/api/ContactForm?code=MfEKY_yBSvRN-8NKD-G0Vkp27i1a1RqgKku4vJsvAOgUAzFuQ_hO3A==';
const submitDiv = document.createElement('div');
const acceptedMessage = document.getElementById('acceptedText');




submitButton.addEventListener('click', async () => {
  inputs.forEach((element) => {
    if (inputs.value) {
      element.disabled = true;
    }
  })
  if (textArea.value) { textArea.disabled = true };


  const data = {
    name: inputs[0].value,
    replyEmail: inputs[1].value,
    message: textArea.value
  }
  await postData(url, data);

  acceptedMessage.innerHTML = "Thank you, your message was submitted!";
  acceptedMessage.classList.add('fade-out');

})


//open/close social footer
const open = document.getElementById('open')
const close = document.getElementById('close')
const socialfooter = document.getElementById('social-footer')

open.addEventListener('click', () => socialfooter.classList.add('show-nav'));

close.addEventListener('click', () => socialfooter.classList.remove('show-nav'))



const message = document.getElementById('acceptedText')


//acceptedText.innerHTML = "Thank you, your message was submitted!"