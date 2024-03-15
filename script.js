const items = [{
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

const itemTemplate = document.querySelector("#item-template");
const shopItems = document.querySelector("#shop-items");

//функция создания шаблона-карточки
function makeItemByTemplate(item) {

    const cardProductTemplate = itemTemplate.content.cloneNode(true); // клон шаблона карточки
    const tags = cardProductTemplate.querySelector(".tags"); // поиск в template не возможен, он невидим. В его клоне искать.

    cardProductTemplate.querySelector("h1").textContent = item.title; //поиск и запись в контент клона шаблона карточки
    cardProductTemplate.querySelector("p").textContent = item.description;
    cardProductTemplate.querySelector("img").src = item.img;
    cardProductTemplate.querySelector("span").textContent = item.price;

    //перебор свойства - массива tags  в каждом объекте и создание желтой плашки для каждого наименования тега
    item.tags.forEach((tag) => {
        const divForTag = document.createElement("div");
        divForTag.classList.add("tag");
        divForTag.textContent = tag;
        tags.append(divForTag); //добавление плашки, по условию задачи, в div class="tags"
    });

    return cardProductTemplate;
};

//Функция отрисовки карточки
function renderItems(arr) {

    arr.forEach((item) => {

        const newItemTemplate = makeItemByTemplate(item);
        shopItems.append(newItemTemplate);
    });
};

renderItems(items);