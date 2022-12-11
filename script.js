const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

const containerShop = document.querySelector('#shop-items');

const CardTemplate =  document.querySelector('#item-template');

const productFound = document.querySelector('#nothing-found');

productFound.textContent = 'Ничего не найдено';


function weUsTemplateCard(itemsShop) {

  const { title, description, tags, price, img } = itemsShop;/*декструктурируем, и в результате получаем переменные со значением свойств items*/ 
  

  const shopCard = CardTemplate.content.cloneNode(true);
  shopCard.querySelector('h1').textContent = title;
  shopCard.querySelector('p').textContent = description;
  shopCard.querySelector('img').src = img;
  shopCard.querySelector('.price').textContent = `${price} Руб.`;

  const tagsCard = shopCard.querySelector('.tags');
  tags.forEach((itemTag) => {
    const tagsElement = document.createElement('span');
    tagsElement.textContent = itemTag;
    tagsElement.classList.add('tags');

    tagsCard.append(tagsElement);
  })

  return shopCard;
};

items.forEach(item => {
  const itemsShop = item;
  const shopCard = weUsTemplateCard(itemsShop);
  containerShop.append(shopCard);
});

/*Добавление Поиска на сайт*/ 
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');

function productSeachWhenClicked() {
 const seachInputValue = searchInput.value.toLowerCase().trim();
 const resultFilter = items.filter((item) => 
  item.title.toLowerCase().trim().includes(seachInputValue)
)
  if (!resultFilter.length) {
    containerShop.append(productFound);
  } else {
    resultFilter.forEach((item) => 
    containerShop.append(weUsTemplateCard(item)));
  }
};

searchButton.addEventListener('click',productSeachWhenClicked);

