


const open = document.getElementById('open')
const close = document.getElementById('close')
const socialfooter = document.getElementById('social-footer')

open.addEventListener('click', () => socialfooter.classList.add('show-nav'))

close.addEventListener('click', () => socialfooter.classList.remove('show-nav'))