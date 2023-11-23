function loadMenu() {
  function fillRow(name, price) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${name} :</td> <td>${price}€</td>`;
    return tableRow;
  }
  function fillCategory(category) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td class="category">${category}</td>`;
    return tableRow;
  }

  function displayMenu(menuData) {
    const menuTable = document.getElementById("menu");

    menuData.menu.forEach((category) => {
      menuTable.appendChild(fillCategory(category.category));
      category.items.forEach((item) => {
        menuTable.appendChild(fillRow(item.name, item.price));
      });
    });
  }
  fetch("./menu.json")
    .then((response) => response.json())
    .then((menuData) => {
      // Call the displayMenu function with the loaded menu data
      displayMenu(menuData);
    })
    .catch((error) => console.error("Error fetching menu data:", error));
}

export function renderMenu() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = '';
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<div id="textContent"><table id="menu"></table></div>`;
contentDiv.appendChild(newDiv);
loadMenu();
}
