let navIcon = document.querySelector('.nav-icon');
let navPopUp = document.querySelector('.nav-pop-up');
let closeBtn = document.getElementById('close-btn');

navIcon.addEventListener('click', ()=>{
    navPopUp.style.display = 'block';
})

closeBtn.addEventListener('click', ()=>{
    navPopUp.style.display = 'none';
})