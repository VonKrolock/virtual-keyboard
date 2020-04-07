let textArea = document.querySelector("#write");
let key = document.querySelector("#keyboard");
let keyTwo = document.querySelector("#keyboardTwo");
let containerTwo = document.querySelector('#containerTwo');
let charsUpperCase = document.querySelectorAll(".alt");
let chars = document.querySelectorAll(".char");
let shift = document.querySelector(".shift");
let shiftTwo = document.querySelector(".shiftTwo");
let caps = document.querySelector('.caps');
let capsTwo = document.querySelector('.capsTwo');
let del = document.querySelectorAll('.delete');
let lang = document.querySelector('.lang');
let langTwo = document.querySelector('.langTwo')
let enter = document.querySelectorAll('.return');
let tab = document.querySelectorAll('.tab');
let shiftOn = false;
let capsOn = false;

// Tab Event
tab.forEach(a=>a.addEventListener('click',()=>textArea.innerHTML += '\t' ));

//Enter event
enter.forEach(a=>a.addEventListener('click',()=>textArea.innerHTML += '\n' ));

// Chars events
chars.forEach(a => a.addEventListener('click',()=>{ textArea.innerHTML += a.innerHTML;}))
charsUpperCase.forEach(a => a.addEventListener('click',()=>{ textArea.innerHTML += a.innerHTML;}))

//Del event
del.forEach(a => a.addEventListener('click',()=> textArea.innerHTML = textArea.innerHTML.slice(0,-1).replace(/&nbsp;/g," ") ));

//Caps event
caps.addEventListener('click',()=>{capsOn = !capsOn;
            capsOn ? key.classList.add("caps") : key.classList.remove("caps")})

capsTwo.addEventListener('click',()=>{capsOn = !capsOn;
            capsOn ? keyTwo.classList.add("capsTwo") : keyTwo.classList.remove("capsTwo")})  

//Shift events
shift.addEventListener('click',()=>{shiftOn = !shiftOn;
            shiftOn ? key.classList.add("shift") : key.classList.remove("shift")})

shiftTwo.addEventListener('click',()=>{shiftOn = !shiftOn;
            shiftOn ? keyTwo.classList.add("shiftTwo") : keyTwo.classList.remove("shiftTwo")})

//Language events
lang.addEventListener('click',()=>{shiftOn = !shiftOn ? containerTwo.style.display = 'block' : containerTwo.style.display = 'block'});
langTwo.addEventListener('click',fooTwo);
function fooTwo(){
  if(shiftOn ===shiftOn){
    containerTwo.style.display = 'none';
  }
}


