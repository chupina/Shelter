const pets =[];//8
let fullPetsList = []; //48

const burgerButton = document.getElementById('burger-menu-icon');
const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
const petsSlider =  document.getElementById('pets__card-list');
const nextSlide = document.querySelector('#next__slide');
const prevSlide = document.querySelector('#prev__slide');



// fetch the pets from json file

fetch('../pets.json')
.then((response)=>{response.json()
  .then((pets)=>{
    console.log(pets)
    fullPetsList = (()=>{
      let tempArr = [];
       for(let i=0; i<6; i++){
        const newPets = [...pets];
        for(let j = pets.length; j>0;j--){
          let randIdx = Math.floor(Math.random() * j);
          const randEl = newPets.splice(randIdx,1)[0];
          newPets.push(randEl);
        }
        tempArr = [...tempArr, ...newPets];
       }
       
       return tempArr;
     })();
     petsSlider.appendChild(createCards(fullPetsList));
     
   

  }

  )}
  );

  let createCards = (dataArr)=>{
    let petsCards = document.createDocumentFragment();
    for(i=0; i<dataArr.length; i++){
      let card = document.createElement('li');
      card.classList.add('pet-card');
      card.setAttribute('id',`${i}`)
      card.innerHTML = `<img src=${dataArr[i].img}><div class="pet-card__title">${dataArr[i].name}</div><button class="pet-card__button" data-name="${dataArr[i].name}" >Learn more</button>`;
      petsCards.append(card);
    }
    return petsCards;
  }


 
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
