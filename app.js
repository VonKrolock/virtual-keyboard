const textArea = document.querySelector('#write');
const key = document.querySelector('#keyboard');
const keyTwo = document.querySelector('#keyboardTwo');
const containerTwo = document.querySelector('#containerTwo');
const charsUpperCase = document.querySelectorAll('.alt');
const chars = document.querySelectorAll('.char');
const shift = document.querySelector('.shift');
const shiftTwo = document.querySelector('.shiftTwo');
const caps = document.querySelector('.caps');
const capsTwo = document.querySelector('.capsTwo');
const del = document.querySelectorAll('.delete');
const lang = document.querySelector('.lang');
const langTwo = document.querySelector('.langTwo');
const enter = document.querySelectorAll('.return');
const tab = document.querySelectorAll('.tab');
let shiftOn = false;
let capsOn = false;

// Tab Event
tab.forEach((a) => a.addEventListener('click', () => { textArea.innerHTML += '\t'; }));

// Enter event
enter.forEach((a) => a.addEventListener('click', () => { textArea.innerHTML += '\n'; }));

// Chars events
chars.forEach((a) => a.addEventListener('click', () => { textArea.innerHTML += a.innerHTML; }));
charsUpperCase.forEach((a) => a.addEventListener('click', () => { textArea.innerHTML += a.innerHTML; }));

// Del event
del.forEach((a) => a.addEventListener('click', () => { textArea.innerHTML = textArea.innerHTML.slice(0, -1).replace(/&nbsp;/g, ' '); }));

// Caps event
caps.addEventListener('click', () => {
  capsOn = !capsOn;
  // eslint-disable-next-line no-unused-expressions
  capsOn ? key.classList.add('caps') : key.classList.remove('caps');
});

capsTwo.addEventListener('click', () => {
  capsOn = !capsOn;
  // eslint-disable-next-line no-unused-expressions
  capsOn ? keyTwo.classList.add('capsTwo') : keyTwo.classList.remove('capsTwo');
});

// Shift events
shift.addEventListener('click', () => {
  shiftOn = !shiftOn;
  // eslint-disable-next-line no-unused-expressions
  shiftOn ? key.classList.add('shift') : key.classList.remove('shift');
});

shiftTwo.addEventListener('click', () => {
  shiftOn = !shiftOn;
  // eslint-disable-next-line no-unused-expressions
  shiftOn ? keyTwo.classList.add('shiftTwo') : keyTwo.classList.remove('shiftTwo');
});

// Language events
lang.addEventListener('click', () => { shiftOn = !shiftOn ? containerTwo.style.display = 'block' : containerTwo.style.display = 'block'; });
// eslint-disable-next-line no-use-before-define
langTwo.addEventListener('click', fooTwo);
function fooTwo() {
  // eslint-disable-next-line no-self-compare
  if (shiftOn === shiftOn) {
    containerTwo.style.display = 'none';
  }
}
