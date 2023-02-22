// Завдання 2
// HTML містить порожній список ul#ingredients.
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridiensLiItems = document.querySelector('#ingredients')

const ingredientsLi = ingredients.map((ingridient) => {

  const liEl = document.createElement('li');
  liEl.textContent = ingridient;
  liEl.classList = 'item';

  console.log(liEl);

  return liEl;
});

ingridiensLiItems.append(...ingredientsLi);
  