function fillRow(name, price){
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${name} :</td> <td>${price}€</td>`;
    return tableRow;
}
function fillCategory(category){
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td class="category">${category}</td>`;
    return tableRow;
}


function displayMenu(menuData){
    const menuTable = document.getElementById('menu');

    menuData.menu.forEach(category => {
        console.log(category);
        menuTable.appendChild(fillCategory(category.category));
        category.items.forEach(item =>{
            console.log(item);
            //const tableRow = fillRow(item.name, item.price);
            menuTable.appendChild(fillRow(item.name, item.price));
        });
    });
}
fetch('menu.json')
  .then(response => response.json())
  .then(menuData => {
    // Call the displayMenu function with the loaded menu data
    displayMenu(menuData);
  })
  .catch(error => console.error('Error fetching menu data:', error));
