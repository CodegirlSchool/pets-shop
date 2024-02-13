const items = [{
  title: "Игрушка мячик",
  description: "Ваш питомец будет счастлив!",
  tags: ["cat", "dog"],
  price: 500,
  img: "./img/1.jpeg",
  rating: 4,
},
{
  title: "Игрушка лабиринт",
  description: "Поможет в развитии интеллекта!",
  tags: ["cat", "dog"],
  price: 900,
  img: "./img/2.jpeg",
  rating: 5,
},
{
  title: "Игрушка для котят",
  description: "Отвлечет вашего питомца!",
  tags: ["cat"],
  price: 300,
  img: "./img/3.jpeg",
  rating: 4.3,
},
{
  title: "Миска «Котик»",
  description: "Подойдет и для собак!",
  tags: ["cat", "dog"],
  price: 660,
  img: "./img/4.jpeg",
  rating: 4,
},
{
  title: "Лоток розовый",
  description: "Теперь вы можете забыть о проблемах с туалетом",
  tags: ["cat"],
  price: 400,
  img: "./img/5.jpeg",
  rating: 5,
},
{
  title: "Сухой корм для кошек",
  description: "Специальная формула для милых усатиков!",
  tags: ["cat"],
  price: 200,
  img: "./img/6.jpeg",
  rating: 4,
},
{
  title: "Сухой корм для собак",
  description: "Содержит полный комплекс витаминов",
  tags: ["dog"],
  price: 300,
  img: "./img/7.jpeg",
  rating: 4,
},
{
  title: "Игрушка для собак",
  description: "Теперь вы можете не переживать за личные вещи",
  tags: ["dog"],
  price: 500,
  img: "./img/8.jpeg",
  rating: 1,
},
{
  title: "Лежанка",
  description: "Идеальное место для отдыха!",
  tags: ["cat", "dog"],
  price: 1500,
  img: "./img/9.jpeg",
  rating: 2,
},
{
  title: "Поилка для собак",
  description: "Возьмите с собой в путешествие",
  tags: ["dog"],
  price: 800,
  img: "./img/10.jpeg",
  rating: 5,
},
{
  title: "Переноска",
  description: "Путешествуйте с комфортом!",
  tags: ["cat", "dog"],
  price: 3500,
  img: "./img/11.jpeg",
  rating: 3,
},
{
  title: "Поводок для собак",
  description: "Для чудесных прогулок вместе",
  tags: ["dog"],
  price: 800,
  img: "./img/12.jpeg",
  rating: 4,
},
];

const itemsContainer = document.querySelector("#shop-items");
const itemsTemplate = document.querySelector("#item-template");
const nothingFound = document.getElementById('nothing-found');

function prepareShopItem(shopItem) {
const { title, description, tags, img, price, rating } = shopItem;

const item = itemsTemplate.content.cloneNode(true);

item.querySelector("h1").textContent = title;
item.querySelector("p").textContent = description;
item.querySelector("img").src = img;
item.querySelector(".price").textContent = `${price}P`;

const ratingContainer = item.querySelector(".ratings");
for (let i = 0; i < rating; i++) {
  const star = document.createElement("i");
  star.classList.add("fa", "fa-star");
  ratingContainer.append(star);
}

const tagsHolder = item.querySelector(".tags");
tags.forEach((tag) => {
  const element = document.createElement("span");
  element.textContent = tag;
  element.classList.add("tag");
  tagsHolder.append(element);
});

return item;
}

let currentState = [...items];

function renderItems(arr) {
nothingFound.textContent = "";
itemsContainer.innerHTML = "";

arr.forEach((item) => {
  itemsContainer.append(prepareShopItem(item));
});

if (!arr.length) {
  nothingFound.textContent = "Ничего не найдено";
}
}

renderItems(currentState);

function sortByAlphabet(a, b) {
if (a.title > b.title) {
  return 1;
}
if (a.title < b.title) {
  return -1;
}
return 0;
}

const sortControl = document.querySelector("#sort");

sortControl.addEventListener("change", (event) => {
const selectedOption = event.target.value;
switch (selectedOption) {
  case "expensive": {
      currentState.sort((a, b) => b.price - a.price);
      break;
  }
  case "cheap": {
      currentState.sort((a, b) => a.price - b.price);
      break;
  }
  case "rating": {
      currentState.sort((a, b) => b.rating - a.rating);
      break;
  }
  case "alphabet": {
      currentState.sort((a, b) => sortByAlphabet(a, b));
      break;
  }
}
renderItems(currentState);
});

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function applySearch() {
const searchString = searchInput.value.trim().toLowerCase();
currentState = items.filter((el) =>
  el.title.toLowerCase().includes(searchString)
);
currentState.sort((a, b) => sortByAlphabet(a, b));
sortControl.selectedIndex = 0;
renderItems(currentState);
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);
