import { menu as data } from "./data";

export default function menupage() {
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-list";
    content.appendChild(menuContainer);
    data.forEach((menu) => {

        const title = document.createElement("h1");
        title.textContent = menu.category[0].toUpperCase() + menu.category.slice(1);
        menuContainer.appendChild(title);

        menu.items.forEach((item) => {
            const menuItemContainer = document.createElement("div");
            menuItemContainer.className = "menu-item";
            menuContainer.appendChild(menuItemContainer);

            const dishName = document.createElement("p");
            dishName.className = "dish-name";
            dishName.textContent = item.name;
            menuItemContainer.appendChild(dishName);

            const dots = document.createElement("span");
            dots.className = "dots";
            menuItemContainer.appendChild(dots)

            const dishPrice = document.createElement("p");
            dishPrice.className = "dish-price";
            dishPrice.textContent = `$ ${item.price}`;
            menuItemContainer.appendChild(dishPrice);
        })
    })
}

