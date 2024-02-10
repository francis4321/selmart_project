let sendOtfBtn = document.getElementById('send-otf-btn');
let verifyOtfBox = document.getElementById('verify-otf');
let verifyOtfBtn = document.getElementById('verify-btn');
let newPassword = document.getElementById('new-passcode');

//---A function to display the verify OTF pop up when the send OTF button is clicked
sendOtfBtn.addEventListener('click', ()=>{
    // verifyOtfBox.style.visibility = 'visible';
})


verifyOtfBtn.addEventListener('click', ()=>{
    newPassword.style.visibility = 'visible';
})