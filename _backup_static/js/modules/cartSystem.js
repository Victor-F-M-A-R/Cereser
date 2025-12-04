/*
 * Casa Cereser - Cart System Module
 * Handles cart state and UI interactions
 */

export function initCartSystem() {
    const cartBtn = document.querySelector('.btn-cart');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartDrawer = document.querySelector('.cart-drawer');
    const cartOverlay = document.querySelector('.cart-overlay');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalEl = document.querySelector('.cart-total');

    let cart = [];

    // Open/Close Cart
    function toggleCart() {
        cartDrawer.classList.toggle('open');
        cartOverlay.classList.toggle('open');
    }

    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    // Add to Cart
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.dataset.id;
            const name = btn.dataset.name;
            const price = parseFloat(btn.dataset.price);

            addToCart(id, name, price);
            if (!cartDrawer.classList.contains('open')) {
                toggleCart();
            }
        });
    });

    function addToCart(id, name, price) {
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        renderCart();
    }

    // Remove from Cart
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        renderCart();
    }

    // Render Cart
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; margin-top: 2rem; color: var(--color-text-muted);">Sua cesta está vazia.</p>';
        } else {
            cart.forEach(item => {
                total += item.price * item.quantity;
                const itemEl = document.createElement('div');
                itemEl.style.cssText = 'display: flex; justify-content: space-between; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;';
                itemEl.innerHTML = `
                    <div>
                        <div style="font-weight: 600;">${item.name}</div>
                        <div style="font-size: 0.9em; color: #666;">${item.quantity}x R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                    </div>
                    <button class="remove-item" data-id="${item.id}" style="color: #999; font-size: 0.8em;">Remover</button>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
        }

        cartTotalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

        // Re-attach listeners for dynamic elements
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeFromCart(e.target.dataset.id);
            });
        });
    }
}
