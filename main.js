const container = document.querySelector('#container');
const cards_length = 16;
const cards= [];

let previouseShowCard = undefined;

let icons  = [
  'air-freshener',
  'palette',
  'mug-hot',
  'book',
  'coins',
  'igloo',
  'cog',
  'life-ring',
];
// copy the icons again (double them)
icons.push(...icons);

for(let i = 0; i < 100; i++) {
  const index1 = Math.floor(Math.random() * icons.length) 
  const index2 = Math.floor(Math.random() * icons.length) 

  const temp = icons[index1];
  icons[index1] = icons[index2]
  icons[index2] = temp
}

for(let i = 0; i < cards_length; i++) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = ` 
  <div class="front">
    <i class="fas fa-${icons[i]}"></i>
  </div>
  <div class="back">
    
  </div>
  `
  cardElement.addEventListener('click', () => {
    if(!cardElement.classList.contains('show')) {
      cardElement.classList.add('show');
    } 

    if(!previouseShowCard ) {
      previouseShowCard = cardElement;
    } else {
      const iconOne = previouseShowCard.querySelector('i').classList[1];
      const iconTwo = cardElement.querySelector('i').classList[1];

      if(iconOne !== iconTwo) {
        const temp = previouseShowCard;
        setTimeout(() => {
          temp.classList.remove('show');
          cardElement.classList.remove('show');
        },1000)
      }
      previouseShowCard = undefined;
    }

  })
  cards.push(cardElement);
  container.appendChild(cardElement)
}