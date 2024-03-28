const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
        rating: 4.4,
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
        rating: 3.1,
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
        rating: 5.0,
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
        rating: 4.7,
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
        rating: 4.9,
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
        rating: 3.2,
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
        rating: 2.9,
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
        rating: 3.4,
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
        rating: 4.8,
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
        rating: 3.2,
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
        rating: 3.7,
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
        rating: 4.1,
    },
];

const itemTemplate = document.querySelector("#item-template"); // шаблон карточки товара
const shopItems = document.querySelector("#shop-items"); // контейнер для карточек товаров
const nothingFound = document.querySelector("#nothing-found"); // текст, если поиск не дал результатов

// ФУНКЦИЯ создания карточки конкретного товара
function makeProductByTemplate(item) {

    const cardProductTemplate = itemTemplate.content.cloneNode(true); // клон шаблона карточки товара
    const tagsHolder = cardProductTemplate.querySelector(".tags"); // "плашка" для тега, поиск в template не возможен, он невидим. В его клоне искать.
    const ratingContainer = cardProductTemplate.querySelector(".rating"); // контейнер для рейтинга

    // разбор объекта (товара) на переменные - деструктуризация свойств объекта
    const { title, description, tags, price, img, rating } = item;

    // наполнение информацией из объекта
    cardProductTemplate.querySelector("h1").textContent = title; // поиск и запись в контент карточки
    cardProductTemplate.querySelector("p").textContent = description;
    cardProductTemplate.querySelector("img").src = img;
    cardProductTemplate.querySelector("span").textContent = `${price}Р`;

    // создание рейтинга товара
    for (let i = 0; i < rating; i++) { // для создания звездочек
        const starRating = document.createElement("i");
        starRating.classList.add("fa", "fa-star");
        ratingContainer.append(starRating);
    }

    //кнопка Купить, функционал в разработке
    const footer = cardProductTemplate.querySelector(".footer"); // контейнер для рейтинга и цены
    const btnBuy = document.createElement("button");
    btnBuy.classList.add("btn");
    btnBuy.textContent = "Купить";
    footer.after(btnBuy);

    btnBuy.onclick = function() {
        alert("Функция в разработке");
    };

    // перебор свойства - массива tags  в объекте и создание желтой плашки для каждого наименования тега
    item.tags.forEach((tag) => {
        const divForTag = document.createElement("div");
        divForTag.classList.add("tag");
        divForTag.textContent = tag;
        tagsHolder.append(divForTag); //добавление плашки, по условию задачи, в div class="tags"
    });

    return cardProductTemplate; //возврат карточки созданного товара
};

//ФУНКЦИЯ-ПОМОЩНИК для сортировки товаров по алфавиту
function sortByAlphabet(a, b) {
    // сравнение со свойством title
    // если title первого товара алфавитно больше второго...
    if (a.title > b.title) {
        return 1;
    }
    // если title второго товара больше
    if (a.title < b.title) {
        return -1;
    }
    // если они равны
    return 0;
}

//ФУНКЦИЯ отрисовки карточек 
function renderItems(arr) { // параметр вставки - массив, карточки товаров которого нужно отрисовывать

    // сброс текста "Ничего не найдено" после предыдущего поиска
    nothingFound.textContent = "";

    // очистка контейнера с товарами в случае, если там что-то было
    shopItems.innerHTML = "";

    arr.forEach((item) => {
        // вызов функции makeProductByTemplate для создания карточки каждого товара и помещение их в контейнер для карточек товаров
        shopItems.append(makeProductByTemplate(item));
    });

    if (!arr.length) { // если массив товаров пустой
        nothingFound.textContent = "Ничего не найдено"; // отображение данного текста
    }
};

renderItems(items.sort((a, b) => sortByAlphabet(a, b))); // вызов функции для отрисовки карточек и сразу сортировкой по алфавиту "по умолчанию"

//РЕАЛИЗАЦИЯ ПОИСКА НА САЙТЕ
let resultSearch = [...items]; // товары после применения поиска / фильтров
const searchBtn = document.querySelector("#search-btn"); //кнопка поиска
const searchInput = document.querySelector("#search-input"); //поле для поиска

// placeholder
searchInput.placeholder = "Найти товары";

// ФУНКЦИЯ для отображения в поле ввода русских букв на случай, если при вводе слова был включен англ язык клавиатуры 
function convertSearch(strSearch) {
    const keysMap = {
        'a': 'ф',
        'b': 'и',
        'c': 'с',
        'd': 'в',
        'e': 'у',
        'f': 'а',
        'g': 'п',
        'h': 'р',
        'i': 'ш',
        'j': 'о',
        'k': 'л',
        'l': 'д',
        'm': 'ь',
        'n': 'т',
        'o': 'щ',
        'p': 'з',
        'q': 'й',
        'r': 'к',
        's': 'ы',
        't': 'е',
        'u': 'г',
        'v': 'м',
        'w': 'ц',
        'x': 'ч',
        'y': 'н',
        'z': 'я',
        ',': 'б',
        '<': 'б',
        '.': 'ю',
        '>': 'ю',
        ';': 'ж',
        ':': 'ж',
        "'": 'э',
        '"': 'э',
        '`': 'ё',
        '~': 'ё',
        '\\': 'ё',
        '|': 'ё',
        '[': 'х',
        '{': 'х',
        ']': 'ъ',
        '}': 'ъ',
        ' ': ' ',
    };

    let res = "";
    for (let symb of strSearch) {
        if (keysMap[symb]) {
            symb = keysMap[symb];
            res += symb;
        }
    }
    return res;
}

// ФУНКЦИЯ поиска по товарам (она же сбрасывает фильтры)
function searchShopItem() {
    let search = searchInput.value.toLowerCase().trim(); // введенное слово в строку поиска с убранными пробелами и приведенное к нижнему регистру

    if (/[a-zA-Z]/.test(search)) { //проверка на содержание латинских символов
        searchInput.value = convertSearch(search); // замена латинских символов на русские
        search = convertSearch(search);
    }

    resultSearch = items.filter((elem) => // отфильтрованный массив по задананным параметрам или поиску
        elem.title.toLowerCase().includes(search) // содержится ли в title введенное слово в строку поиска 
    );

    resultSearch.sort((a, b) => sortByAlphabet(a, b)); // сортировка этих товаров по алфавиту (по умолчанию)
    sortSelection.selectedIndex = 0; // чтобы в селекторе первым полем тоже стояло "по алфавиту" (как сделана сортировка "по умолчанию")
    renderItems(resultSearch); // отрисовка результатов поиска
}

searchBtn.addEventListener("click", searchShopItem); // обработчик события запуска поиска при клике на кнопку
searchInput.addEventListener("search", searchShopItem); // "search" - событие возникает после того, как пользователь нажимает на клавишу Enter или нажимает кнопку "x" (отмена) в элементе input с type = "search".

//СОРТИРОВКА ТОВАРОВ
const sortSelection = document.querySelector("#sort"); // селект-переключатель с выбором опции сортировки
sortSelection.addEventListener("change", (event) => { // обработчик события выбора опции из селекта

    const selectedOption = event.target.value; // атрибут value, что выбрал пользователь
    // в зависимости от вида сортировки упорядочивание массива товаров
    switch (selectedOption) {
        case "expensive": // сначала дорогие
            {
                resultSearch.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap": // сначала дешевые
            {
                resultSearch.sort((a, b) => a.price - b.price);
                break;
            }
        case "rating": // от более высокого рейтинга к более низкому
            {
                resultSearch.sort((a, b) => b.rating - a.rating);
                break;
            }
        case "alphabet": // по алфавиту
            {
                resultSearch.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }
    renderItems(resultSearch); // отрисовка массива после упорядочивания
});