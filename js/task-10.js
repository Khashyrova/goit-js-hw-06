// Завдання 10 

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input 
// і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція 
// елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки 
/* <div>, скільки вказано в amount і додає їх у div#boxes. */

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor
//  для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

console.log(boxesEl)
function createBoxes() {
  const divs = [];
  let size = 30;
  for (let i = 0; i < +inputEl.value; i += 1) {
    size += 10 * i
    const div = document.createElement('div');
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
  };
  return boxesEl.append(...divs);
   
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  inputEl.value = 0;
  return (boxesEl.innerHTML = '');
}
