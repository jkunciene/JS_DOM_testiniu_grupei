"use strict"
const darbas = document.querySelector('#uzduotis');
const svarba = document.querySelector('#priority');


const addBtn = document.getElementById('mygtukas');
addBtn.addEventListener('click', function(e){
    e.preventDefault();
    addToDo();
})

console.log(addBtn);

function addToDo(){
    console.log(darbas.value);
    console.log(svarba.value);

    
}