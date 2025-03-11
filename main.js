// Main functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart
    let cart = [];
    
    // Product data
    const products = [
        {
            id: 1,
            name: "Classic T-Shirt",
            price: 29.99,
            image: "images/products/tshirt1.jpg",
            arModel: "models/tshirt1.gltf"
        },
        // Add more products
    ];

    // Render products
    function renderProducts() {
        const productGrid = document.querySelector('.product-grid');
        products.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });
    }

    // Create product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button class="try-ar-btn" data-product-id="${product.id}">Try with AR</button>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        `;
        return card;
    }

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        const productGrid = document.querySelector('.product-grid');
        productGrid.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });
    });

    // Initialize
    renderProducts();
});
