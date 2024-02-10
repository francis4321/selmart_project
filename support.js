let question1 = document.querySelector('.question-1');
let question2 = document.querySelector('.question-2');
let question3 = document.querySelector('.question-3');
let question4 = document.querySelector('.question-4');
let answer1 = document.querySelector('.answer-1');
let answer2 = document.querySelector('.answer-2');
let answer3 = document.querySelector('.answer-3');
let answer4 = document.querySelector('.answer-4');
let q1img = document.getElementById('q1-img');
let q2img = document.getElementById('q2-img');
let q3img = document.getElementById('q3-img');
let q4img = document.getElementById('q4-img');
let display = 0;

question1.addEventListener('click', ()=>{
    if(display == 1){
        answer1.style.display = 'block';
        display = 0;
        q1img.src = './icons/ep_arrow-down-bold.png';
    }
    else{
        answer1.style.display = 'none';
        display = 1;
        q1img.src = './icons/down-arrow.png';
    }
})

question2.addEventListener('click', ()=>{
    if(display == 1){
        answer2.style.display = 'block';
        display = 0;
        q2img.src = './icons/ep_arrow-down-bold.png';
    }
    else{
        answer2.style.display = 'none';
        display = 1;
        q2img.src = './icons/down-arrow.png';
    }
})

question3.addEventListener('click', ()=>{
    if(display == 1){
        answer3.style.display = 'block';
        display = 0;
        q3img.src = './icons/ep_arrow-down-bold.png';
    }
    else{
        answer3.style.display = 'none';
        display = 1;
        q3img.src = './icons/down-arrow.png';
    }
})

question4.addEventListener('click', ()=>{
    if(display == 1){
        answer4.style.display = 'block';
        display = 0;
        q4img.src = './icons/ep_arrow-down-bold.png';
    }
    else{
        answer4.style.display = 'none';
        display = 1;
        q4img.src = './icons/down-arrow.png';
    }
})

