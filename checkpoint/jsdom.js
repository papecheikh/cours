let boutonPlus = document.querySelectorAll('.plus');
let boutonMoins = document.querySelectorAll('.moins');
let boutonAjout = document.querySelector('.ajout');

boutonPlus.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
boutonMoins.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});

boutonAjout.addEventListener('click', addArticle);

function increaseQuantity(){
    this.previousElementSibling.value =  parseInt(this.previousElementSibling.value) +1 ;
    sousTotal(this);

}


function decreaseQuantity(){
    if( this.nextElementSibling.value > 0){
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
        sousTotal(this) 
    }
    
}

function sousTotal(elt){
    let prix = parseInt(elt.parentElement.nextElementSibling.innerText);
    let nombre = parseInt(elt.previousElementSibling.value);
    let subt = prix*nombre;

    elt.parentElement.nextElementSibling.nextElementSibling.innerText = subt + ' dh';
}


function loadNewElement(){

    let boutonPlus = document.querySelectorAll('.plus');
    let boutonMoins = document.querySelectorAll('.moins');

    boutonPlus.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
    boutonMoins.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});
}

