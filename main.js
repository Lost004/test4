"use strict"

let btn = document.querySelector('.btn')
let txt = document.querySelector('#txt')
let dx = document.querySelector('.dx')
let ext = document.querySelector('.ext')

function rndm(){
    const alphabet  = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
       let rndnm='';
        for(let i=0;i<txt.value;i++){
            rndnm +=alphabet[Math.floor(Math.random() *alphabet.length )] ;
        }
ext.innerHTML= rndnm
}
btn.addEventListener('click', rndm)

   

