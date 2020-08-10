console.log('works');

// References
const cardContainer = document.querySelector('card-container');
const confirmOrderBtn = document.querySelector('.confirm-order');
const vegetarianFood = document.querySelector('#vegetarian-food');
const spicyFood = document.querySelector('#spicy-food');
const tasteMenu = document.querySelector('.taste-menu');
const list = document.querySelector('.list');
const cardOrder = document.querySelector('#cards-order');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');
const inputEl = document.querySelector('input');


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

const generateCards = () => {
  const html = foods.map(food => `
      <li class="items" id="${food.id}">${food.title}
        <span>${food.price}</span>
        <button type="add" class="add-btn">Add</button>
      </li>`
  )
    .join('');
  list.innerHTML = html;
}; generateCards();

spicyFood.addEventListener('change', function () {
  if (this.checked) {
    const foodList = foods.filter(food => food.spicy)
    const myFood = foodList.map(food =>
      `
                  <li class="items" id="${food.id}">${food.title}
                    <span>${food.price}</span>
                    <button type="add" class="add-btn">Add</button>
                  </li>
              `
    ).join('');
    list.innerHTML = myFood;
  };
});

vegetarianFood.addEventListener('change', function () {

  if (this.checked) {
    const filteredVegetarianFood = foods.filter(food => food.vegetarian)
    const mapedVeg = filteredVegetarianFood.map(food => `
                  <li class="items" id="${food.id}">${food.title}
                    <span>${food.price}</span>
                    <button type="add" class="add-btn">Add</button>
                  </li>
              `
    ).join('');
    list.innerHTML = mapedVeg;
  };
});

inputEl.addEventListener('change', function () {
  if (spicyFood.checked && vegetarianFood.checked) {
    const filteredVegetarianFood = foods.filter(food => food.vegetarian && food.spicy);
    const mapedBothVegAndSpicy = filteredVegetarianFood.map(food => `
                  <li class="items" id="${food.id}">${food.title}
                    <span>${food.price}</span>
                    <button type="add" class="add-btn">Add</button>
                  </li>
              `
    ).join('');
    list.innerHTML = mapedBothVegAndSpicy;
  };
});

// Add the food list into order list

listsOrder = [];
const addOrder = (e) => {
  if (e.target.matches('button.add-btn')) {
    const order = event.target.closest('.items');
    const items = {
      id: order.querySelector('.items').textContent,
      title: order.querySelector('.items').textContent,
      price: order.querySelector('span').textContent
    };

    listsOrder.push(order);
    const myOrderHtml = `
      <li class="items" id="${items.id}">
              <div>${items.title}</div>
              <span>&times;</span>
              <span class="price">${items.price}</span>
          </div>
      </li>
  `;
    cardOrder.insertAdjacentHTML('beforeend', myOrderHtml)
  }

};

// Submit the bill
const handleSubmit = (event) => {
  event.preventDefault();
  innerModal.innerHTML = `
      <h2>Thank you</h2>
      <p>Your order is confirmed, we are going to fix your food, and we delivere it to you when it's ready</p>
      <p>The total amount is</p>
      <button type="button" class="close-modal">Close</button>
    `
  outerModal.classList.add('open');
};

// close the modal
const closeModal = (event) => {
  const isOutside = !event.target.closest('.inner-modal');
  if (isOutside) {
    outerModal.classList.remove('open');
  };
};

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    outerModal.classList.remove('open');
  };
});

// Listen to events
confirmOrderBtn.addEventListener('click', handleSubmit);
window.addEventListener('click', addOrder);
outerModal.addEventListener('click', closeModal);

