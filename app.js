let hamburger_menu = document.querySelector('.hamburger-menu');
let nav =  document.querySelector('.nav-ul');

hamburger_menu.addEventListener('click',(e)=>{
    hamburger_menu.classList.toggle('open');
    nav.classList.toggle('show');
    console.log('heloo');
})
    
