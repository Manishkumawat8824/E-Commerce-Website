// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = cart.length;
    }

    // Add to cart
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.dataset.productId;
            addToCart(productId);
        }
    });

    function addToCart(productId) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('Product added to cart!');
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }

    // Initialize
    updateCartCount();
});
