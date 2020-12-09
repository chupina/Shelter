

const burgerButton = document.getElementById('burger-menu-icon');
const menu = document.querySelector('.menu');
const list = document.querySelector('.list');



// Burger-menu

burgerButton.addEventListener('click',(event)=>{
   
    event.stopPropagation();
    burgerButton.classList.toggle('opened');
    menu.classList.toggle('opened');
     document.body.classList.toggle('no-scroll');
           
    });
 
    menu.addEventListener('click',(event)=>{
      event.stopPropagation();
      burgerButton.classList.remove('opened');
      menu.classList.remove('opened');
      document.body.classList.remove('no-scroll');
    });

    list.addEventListener('click',(event)=>{
      event.stopPropagation();
      
    });