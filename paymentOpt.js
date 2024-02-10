let payOptBtn = document.getElementById('payment-btn');
let deliveryInfoBtn = document.getElementById('delivery-btn');
let reviewBtn = document.getElementById('review-conf-btn');
let payOptContainer = document.querySelector('.payment-opt-container');
let deliInfoContainer = document.querySelector('.delivery-info-container');
let reviewContainer = document.querySelector('.review-container');
let footerContainer = document.querySelector('.footer');
let congratsPopUp = document.querySelector('.congrats-pop-up');
let confOrderBtn = document.getElementById('conf-order-btn');
let blur = document.getElementById('blur');

//---A function to display the payment option container when the pay opt button is clicked
payOptBtn.addEventListener('click', ()=>{
    payOptBtn.classList.add('active-checkout-btn');
    deliveryInfoBtn.classList.remove('active-checkout-btn');
    reviewBtn.classList.remove('active-checkout-btn');
    payOptContainer.style.visibility= 'visible';
    deliInfoContainer.style.visibility= 'hidden';
    reviewContainer.style.visibility= 'hidden';

    footerContainer.style.margin= '150px 0 -150px 0';
})

//---A function to display the delivery info container when the delivery info button is clicked
deliveryInfoBtn.addEventListener('click', ()=>{
    payOptBtn.classList.remove('active-checkout-btn');
    deliveryInfoBtn.classList.add('active-checkout-btn');
    reviewBtn.classList.remove('active-checkout-btn');
    payOptContainer.style.visibility= 'hidden';
    deliInfoContainer.style.visibility= 'visible';
    reviewContainer.style.visibility= 'hidden';

    footerContainer.style.margin= '90px 0 -150px 0';
})

//---A function to display the review container when the review button is clicked
reviewBtn.addEventListener('click', ()=>{
    payOptBtn.classList.remove('active-checkout-btn');
    deliveryInfoBtn.classList.remove('active-checkout-btn');
    reviewBtn.classList.add('active-checkout-btn');
    payOptContainer.style.visibility= 'hidden';
    deliInfoContainer.style.visibility= 'hidden';
    reviewContainer.style.visibility= 'visible';

    footerContainer.style.margin= '550px 0 0 0';
})

//---A function to display the congrats pop up when the confirm order button is clicked
confOrderBtn.addEventListener('click', ()=>{
    congratsPopUp.style.visibility= 'visible';
    
    blur.classList.toggle('active')
})