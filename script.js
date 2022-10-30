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
    }, {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    }, {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    }, {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    }, {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    }, {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    }, {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    }, {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    }, {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    }, {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    }, {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];


const container = document.querySelector('#shop-items');

function arrCards(arr) {
    arr.forEach((item) => {
        const cardTemplate = document.querySelector('#item-template');
        const titleCard = cardTemplate.content.querySelector('h1');
        titleCard.textContent = item.title;

        const descriptionCard = cardTemplate.content.querySelector('p');
        descriptionCard.textContent = item.description;

        const imgCard = cardTemplate.content.querySelector('img');
        imgCard.src = item.img;

        const priceCard = cardTemplate.content.querySelector('.price');
        priceCard.textContent = item.price;


        const tagsCard = cardTemplate.content.querySelector('.tags');
        tagsCard.textContent = item.tags;


        const newCard = cardTemplate.content.cloneNode(true);
        container.append(newCard);

    });

}
arrCards(items);


const searchButton = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

searchButton.addEventListener('click', function() {
    const nothingFound = document.querySelector('#nothing-found');
    nothingFound.textContent = '';
    container.innerHTML = '';

    const inputValue = searchInput.value.trim().toLowerCase();
    const currentState = items.filter((el) =>
        el.title.toLowerCase().includes(inputValue));

    if (!currentState.length) {
        nothingFound.textContent = 'Ничего не найдено';

    };

    arrCards(currentState);
    searchInput.value = '';
});