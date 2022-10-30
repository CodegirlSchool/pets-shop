# Домашнее задание к модулю "Объекты"
Сегодня тебе предстоит ра
зработать интернет-магазин товаров для животных! Ну, по крайней мере, его часть.

Базовый уровень задания обязателен для получения зачета по модулю, продвинутый — по желанию.

## Базовый уровень
Выведи в интерфейсе товары для животных (массив `items`)
- Используй шаблон (template) с `id="item-template"` в [index.html](https://github.com/CodegirlSchool/pets-shop/blob/main/index.html#L43)

- Название [товара](https://github.com/CodegirlSchool/pets-shop/blob/main/script.js#L2) (`title`) помести в `h1`,
описание (`description`) — в `p`, картинку (`img`) — в одноименный тег, цену (`price`) — в `span` с классом `"price"` и массив тегов `tags` — в `div class="tags"`
  ```html
  <div class="shop-item">
    <img src="">
    <div class="content">
      <div class="tags"></div>
      <h1></h1>
      <p></p>
      <span class="price"></span>
    </div>
  </div>
  ```
- Отрисованные объекты подставь внутрь элемента с `id="shop-items"`



## Продвинутый уровень
Добавь поиск на сайт 🔎 

- При клике на кнопку c `id="search-btn"` должно браться значение из поля с `id="search-input"`

- Проверяй, что введенная строка содержится в `title` товара. Если это так, то товар подходит под условие поиска.

- Будет здорово, если сделаешь поиск нечувствительным к регистру и лишним пробелам.

- Если под условие поиска подошел хотя бы один товар, отобрази массив результатов в элементе с `id="shop-items"`. 

- Для очистки контейнера от результатов предыдущего поиска используй свойство `innerHTML`

  Например, следующий код очистит контейнер от его содержимого:
  ```html
  container.innerHTML = '';
  ```
  (здесь container — элемент с `id="shop-items"`)

- Если не нашлось ни одного товара, подходящего под условие поиска, показывай текст "Ничего не найдено". Для этого используй элемент с `id="nothing-found"`. Не забудь его спрятать (очистить его содержимое) перед следующим поиском


Желаю удачи! 😊
