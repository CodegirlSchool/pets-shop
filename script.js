document.addEventListener("DOMContentLoaded", function () {
  const items = [
    {
      title: "Корм для кошек",
      description: "Сбалансированный рацион для здоровья вашего питомца.",
      img: "cat_food.jpg",
      price: "15.99",
      tags: ["кошки", "корм"]
    },
    {
      title: "Игрушка для собак",
      description: "Прочная игрушка, подходящая для активных прогулок.",
      img: "dog_toy.jpg",
      price: "9.99",
      tags: ["собаки", "игрушка"]
    }
  ];

  const shopItemsContainer = document.getElementById("shop-items");
  const nothingFound = document.getElementById("nothing-found");

  function renderItems(itemsToRender) {
    shopItemsContainer.innerHTML = '';
    itemsToRender.forEach(item => {
      const newItem = document.createElement("div");
      newItem.classList.add("shop-item");

      newItem.innerHTML = `
        <img src="${item.img}">
        <div class="content">
          <div class="tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <h1>${item.title}</h1>
          <p>${item.description}</p>
          <span class="price">$${item.price}</span>
        </div>
      `;
      shopItemsContainer.appendChild(newItem);
    });
  }

  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", function () {
    const searchInput = document.getElementById("search-input").value.trim().toLowerCase();
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchInput));

    if (filteredItems.length > 0) {
      renderItems(filteredItems);
      nothingFound.textContent = '';
    } else {
      shopItemsContainer.innerHTML = '';
      nothingFound.textContent = "Ничего не найдено.";
    }
  });
});
