document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const searchResults = document.getElementById("search-results");

    const foodItems = [
        { name: "Vitamin A", description: "Carrot Salad" },
        { name: "SS birayani", description: "Covai" },
        { name: "SS biriyani", description: "Chennai" },
        { name: "Mario", description: "kurumbampalayam,coimbatore" },
        { name: "Mario", description: "Ganapathy,coimbatore" },
        { name: "Mario", description: "coimbatore" },
        { name: "Vitamin A", description: "Butternut Squash Risotto" },
        { name: "Vitamin A", description: "Mango and Spinach Salad" },
        { name: "Vitamin A", description: "Carrot and Ginger Soup" },
        { name: "Vitamin A", description: "Sweet Potato and Kale Hash" },
        { name: "Vitamin B", description: "Baked Sweet Potato with Chickpeas" },
        { name: "Vitamin B", description: "Egg and Spinach Breakfast Wrap" },
        { name: "Vitamin B", description: "Oatmeal with Bananas and Almonds" },
        { name: "Vitamin B", description: "Lentil Soup" },
        { name: "Vitamin B", description: "Quinoa and Black Bean Salad" },
        { name: "Vitamin C", description: "Citrus Salad" },
        { name: "Vitamin C", description: "Stuffed Bell Peppers" },
        { name: "Vitamin C", description: "Broccoli and Orange Stir-Fry" },
        { name: "Vitamin C", description: "Kiwi and Spinach Smoothie" },
        { name: "Vitamin C", description: "Tomato and Avocado Salsa" },
        { name: "Vitamin K", description: "Kale Salad with Lemon Vinaigrette" },
        { name: "Vitamin K", description: "Sautéed Spinach with Garlic" },
        { name: "Vitamin K", description: "Broccoli and Cheese Casserole" },
        { name: "Vitamin K", description: "Green Smoothie" },
        { name: "Protein", description: "Almond and Spinach Smoothie" },
        { name: "Protein", description: "Sardine and Avocado Toast" },
        { name: "Protein", description: "Creamed Kale with Parmesan" },
        { name: "Calcium ", description: "Creamy Spinach and Ricotta Stuffed Shells" },
        { name: "Calcium ", description: "Almond Milk Chia Pudding" },
        { name: "Calcium ", description: "Sardine Salad on Whole Grain Bread" },
    ];

    const renderResults = (results) => {
        searchResults.innerHTML = ""; // Clear previous results
        if (results.length === 0) {
            searchResults.innerHTML = "<p>No results found.</p>";
            return;
        }
        results.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.className = "result-item";
            resultItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            searchResults.appendChild(resultItem);
        });
    };

    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        const filteredResults = foodItems.filter(item => item.name.toLowerCase().includes(query));
        renderResults(filteredResults);
    });

    
});



    document.getElementById("logout").addEventListener("click", () => {
        alert("You have been logged out.");
        // Redirect to login page or perform logout actions
    });
const restaurants = [
    {
        name: "Restaurant 1",
        cuisine: "Italian",
        price: "medium",
        rating: 4,
        image: "file:///C:/Users/Admin/Pictures/restaurnt.jpg",
        menu: [
            { name: "Pasta", price: 10 },
            { name: "Pizza", price: 12 }
        ]
    },
    {
        name: "Restaurant 2",
        cuisine: "Chinese",
        price: "low",
        rating: 5,
        image: "file:///C:/Users/Admin/Pictures/restaurnt1.jpg",
        menu: [
            { name: "Noodles", price: 8 },
            { name: "Dumplings", price: 10 }
        ]
    },
    {
        name: "Restaurant 3",
        cuisine: "Indian",
        price: "high",
        rating: 4,
        image: "file:///C:/Users/Admin/Pictures/restaurnt3.jpg",
        menu: [
            { name: "Curry", price: 12 },
            { name: "Naan", price: 4 }
        ]
    },
    // Add more restaurant data here
];

function displayRestaurants(filter = {}) {
    const restaurantList = document.querySelector('.restaurant-list');
    restaurantList.innerHTML = ''; // Clear existing restaurant cards

    restaurants.forEach(restaurant => {
        // Filter restaurants based on the selected criteria
        if ((filter.cuisine === 'all' || restaurant.cuisine === filter.cuisine) &&
            (filter.price === 'all' || restaurant.price === filter.price) &&
            (filter.rating === 'all' || restaurant.rating === parseInt(filter.rating))) {

            const card = document.createElement('div');
            card.className = 'restaurant-card';
            card.innerHTML = `
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <h3>${restaurant.name}</h3>
                <p>Rating: ${'★'.repeat(restaurant.rating) + '☆'.repeat(5 - restaurant.rating)}</p>
                <p>Short description of the restaurant.</p>
                <button onclick="viewMenu('${restaurant.name}')">View Menu</button>
            `;
            restaurantList.appendChild(card);
        }
    });
}

function viewMenu(restaurantName) {
    const restaurant = restaurants.find(r => r.name === restaurantName);
    const menuSection = document.getElementById('menu');
    menuSection.innerHTML = `<h2>Menu for ${restaurant.name}</h2>`;
    
    restaurant.menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>$${item.price} <button onclick="addToCart('${item.name}')">Add to Cart</button></p>
        `;
        menuSection.appendChild(menuItem);
    });
}

function addToCart(itemName) {
    alert(`${itemName} has been added to your cart!`);
}

document.getElementById('cuisine').addEventListener('change', function() {
    const filters = {
        cuisine: this.value,
        price: document.getElementById('price').value,
        rating: document.getElementById('rating').value
    };
    displayRestaurants(filters);
});

document.getElementById('price').addEventListener('change', function() {
    const filters = {
        cuisine: document.getElementById('cuisine').value,
        price: this.value,
        rating: document.getElementById('rating').value
    };
    displayRestaurants(filters);
});


document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const totalPriceDisplay = document.getElementById("total-price");
    let totalPrice = 0;

    const addToCart = (itemName, itemPrice) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${itemName} - ₹${itemPrice.toFixed(2)}`;
        cartItems.appendChild(listItem);
        totalPrice += itemPrice;
        totalPriceDisplay.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
    };

    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const menuItem = event.target.closest(".menu-item");
            const itemName = menuItem.querySelector("h3").textContent;
            const itemPrice = parseFloat(menuItem.querySelector(".price").textContent.replace("₹", ""));
            addToCart(itemName, itemPrice);
        });
    });
});




