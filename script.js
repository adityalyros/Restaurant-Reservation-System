document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [
        {
            category: "Appetizers",
            name: "Bruschetta",
            description: "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil."
        },
        {
            category: "Appetizers",
            name: "Caprese Salad",
            description: "Fresh mozzarella, tomatoes, and basil, seasoned with salt, pepper, and olive oil."
        },
        {
            category: "Main Course",
            name: "Spaghetti Carbonara",
            description: "Pasta with bacon, eggs, Parmesan cheese, and black pepper."
        },
        {
            category: "Main Course",
            name: "Margherita Pizza",
            description: "Pizza topped with tomato sauce, mozzarella cheese, and fresh basil."
        },
        {
            category: "Desserts",
            name: "Tiramisu",
            description: "Coffee-flavored Italian dessert made with ladyfingers, mascarpone cheese, and cocoa."
        },
        {
            category: "Desserts",
            name: "Chocolate Lava Cake",
            description: "Rich chocolate cake with a melted chocolate center."
        }
    ];

    const appetizersMenu = document.querySelector("#appetizers .menu-items");
    const mainCourseMenu = document.querySelector("#main-course .menu-items");
    const dessertsMenu = document.querySelector("#desserts .menu-items");

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
            <img src="dish.jpg" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
        `;

        if (item.category === "Appetizers") {
            appetizersMenu.appendChild(menuItem);
        } else if (item.category === "Main Course") {
            mainCourseMenu.appendChild(menuItem);
        } else if (item.category === "Desserts") {
            dessertsMenu.appendChild(menuItem);
        }
    });
});
