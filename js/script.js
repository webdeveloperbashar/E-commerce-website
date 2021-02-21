//sub-category show and hide function
let subCategory = document.querySelector(".sub-category");
let showAndHideCat = document.querySelector(".showAndHideCat");
showAndHideCat.addEventListener('click', ()=>{
    subCategory.classList.toggle("showCategory");
})
// toggler button work function
let collapses = document.getElementById('collapses');
let menuBar = document.querySelector('.menuBar');
let menuShow = document.querySelector('.menuShow')
collapses.addEventListener('click', ()=>{
    menuBar.classList.toggle('menuShow');
})

let ul = document.querySelector('.menuBar ul');
let li = document.querySelectorAll('#li')
li.forEach(function (el) {
    el.addEventListener('click', function () {
        ul.querySelector('.actives').classList.remove('actives');

        el.classList.add('actives');
    });
})
//Slider control
let slides = document.querySelectorAll(".slide");
// let prev = document.querySelector(".prev");
// let next = document.querySelector(".next")

let index = 0;

// prev.addEventListener("click", ()=>{
//     slidePrev()
// });

function slidePrev() {
    if(index === 0){
        index = slides.length - 1;
    }else{
        index--;
    }
    slideChange()
}

// next.addEventListener("click", ()=>{
//     slideNext()
// })

function slideNext() {
    if(index === slides.length - 1){
        index = 0;
    }else{
        index++;
    }
    slideChange()
}

function slideChange() {
    slides.forEach((items)=>{
        items.classList.remove("actives")
    })
    slides[index].classList.add("actives");
}

setInterval(slideNext, 8000);


