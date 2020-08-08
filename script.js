console.log('works');

// References
const cardContainer = document.querySelector('card-container');
const confirmOrderBtn = document.querySelector('.confirm-order');
const vegetarianFood = document.querySelector('#vegetarian-food');
const spicyFood = document.querySelector('#spicy-food');
const tasteMenu = document.querySelector('.taste-menu');
const list = document.querySelector('.list');


// cards array object
const foods = [
  {
    id: 'ravitoto',
    price: 5000,
    title: 'Ravitoto',
    spicy: true,
    vegetarian: false,
  },
  {
    id: 'pasta',
    price: 4000,
    title: 'Pasta',
    spicy: true,
    vegetarian: true,
  },
  {
    id: 'burger',
    price: 5000,
    title: 'Burger',
    spicy: false,
    vegetarian: false,
  },
  {
    id: 'rice',
    price: 2000,
    title: 'Rice and Leaves',
    spicy: false,
    vegetarian: true,
  },
  {
    id: 'mofogasy',
    price: 500,
    title: 'Mofogasy',
    spicy: false,
    vegetarian: false,
  },
];

spicyFood.addEventListener('change', function () {
  if (this.checked) {
    foods
      .filter(food => food.spicy)
      .map(food => {
        const html = `
                  <li class="items">${food.title}
                    <span>${food.price}</span>
                    <button type="add" class="add-btn">Add</button>
                  </li>
              `;
        list.insertAdjacentHTML('beforeend', html)
      });
  // }else {
  //   return foods.map(food => {
  //     const html = `
  //               <li class="items">${food.title}
  //                 <span>${food.price}</span>
  //                 <button type="add" class="add-btn">Add</button>
  //               </li>
  //           `;
  //     html.style.display="none";
  // });
};

vegetarianFood.addEventListener('change', function () {
  if (this.checked) {
    foods
      .filter(food => food.vegetarian)
      .map(food => {
        const html = `
                  <li class="items">${food.title}
                    <span>${food.price}</span>
                    <button type="add" class="add-btn">Add</button>
                  </li>
              `;
        list.insertAdjacentHTML('beforeend', html)
      });
  }else if (this.checked) {
     foods
       .filter(food => food.spicy === true && food.vegetarian === true)
       .map(food => {
        const html = `
                  <li class="items">${food.title}
                    <span>${food.price}</span>
                    <button type="add" class="add-btn">Add</button>
                  </li>
              `;
        list.insertAdjacentHTML('beforeend', html)
      });
  };
});


// confirmOrderBtn.addEventListener('click', generateCards);
