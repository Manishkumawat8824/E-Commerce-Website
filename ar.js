// AR functionality
document.addEventListener('DOMContentLoaded', function() {
    const arModal = document.getElementById('ar-modal');
    const closeBtn = document.querySelector('.close');

    // Handle AR button clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('try-ar-btn')) {
            const productId = e.target.dataset.productId;
            openARView(productId);
        }
    });

    function openARView(productId) {
        arModal.style.display = 'block';
        initializeAR(productId);
    }

    closeBtn.onclick = function() {
        arModal.style.display = 'none';
    }

    function initializeAR(productId) {
        const arEntity = document.getElementById('ar-model');
        // Load 3D model based on product ID
        arEntity.setAttribute('gltf-model', `models/product${productId}.gltf`);
    }
});
