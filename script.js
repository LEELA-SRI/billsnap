"use strict";
let leftie = document.querySelector('.left')
let menuh = document.querySelector('.menu')
let closeh = document.querySelector('.close')
let right = document.querySelector('.right')
let chevUp=document.getElementsByClassName('fa-circle-chevron-up')

let chevDown=document.getElementsByClassName('fa-circle-chevron-down')
let formElt=document.querySelectorAll('form')


// if (window.innerWidth >= 767) right.classList.remove(".overlay");

menuh.addEventListener('click', function () {
  menuh.classList.toggle('d-none')
  closeh.classList.toggle('d-none')
  leftie.classList.toggle('d-none')
  right.classList.toggle('overlay')

})
closeh.addEventListener('click', function () {
  menuh.classList.toggle('d-none')
  closeh.classList.toggle('d-none')
  leftie.classList.toggle('d-none')
  right.classList.toggle('overlay')

})

for (let i=0;i<chevDown.length;i++){
    chevDown[i].addEventListener('click',function(){
        chevUp[i].classList.remove('d-none')
        chevDown[i].classList.add('d-none')
        formElt[i].classList.add('d-none')
    
})
}
for (let i=0;i<chevUp.length;i++){
chevUp[i].addEventListener('click',function(){
    chevUp[i].classList.add('d-none')
    chevDown[i].classList.remove('d-none')
    formElt[i].classList.remove('d-none')
})}

