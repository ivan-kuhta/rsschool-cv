const yearEl = document.querySelector('#year');
const countYear = Math.floor((new Date() - new Date('February 12, 1998')) / 31536000000);
yearEl.innerText = `${countYear} років`;


