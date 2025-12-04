/*
 * Casa Cereser - Product Renderer
 */

import { products } from '../data/products.js';
import { initFavorites } from './favorites.js';

export function initProductRenderer() {
    const gridContainer = document.querySelector('.grid-main');
    const productDetailContainer = document.querySelector('#product-detail');
    const favoritesSystem = initFavorites();

    // Render Grid (Home Page)
    if (gridContainer) {
        gridContainer.innerHTML = '';
        products.forEach((product, index) => {
            const delay = (index % 3) * 100 + 100; // Staggered delay
            const article = document.createElement('article');
            article.className = `product-card reveal delay-${delay}`;
            article.style.gridColumn = 'span 4';

            article.innerHTML = `
                <div class="card-image-wrapper">
                    <a href="product.html?id=${product.id}" style="display:block; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
                        <img src="${product.image}" alt="${product.name}" class="card-image">
                    </a>
                    <div class="card-actions">
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Adicionar</button>
                        <button class="btn btn-icon btn-favorite" data-id="${product.id}" aria-label="Favoritar">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title"><a href="product.html?id=${product.id}">${product.name}</a></h3>
                    <div class="product-meta">${product.region}, ${product.year}</div>
                    <span class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                </div>
            `;
            gridContainer.appendChild(article);
        });

        // Attach Favorite Listeners
        document.querySelectorAll('.btn-favorite').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                favoritesSystem.toggleFavorite(id);
            });
        });

        favoritesSystem.updateFavoriteIcons();
    }

    // Render Detail (Product Page)
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = products.find(p => p.id === productId);

        if (product) {
            document.title = `${product.name} | Casa Cereser`;

            productDetailContainer.innerHTML = `
                <div class="product-detail-grid">
                    <div class="detail-image-wrapper reveal">
                        <img src="${product.image}" alt="${product.name}" class="detail-image">
                    </div>
                    <div class="detail-content reveal delay-100">
                        <div class="detail-header">
                            <h1>${product.name}</h1>
                            <p class="detail-meta">${product.region} • ${product.year}</p>
                            <p class="detail-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                        </div>
                        
                        <div class="detail-description">
                            <p>${product.description}</p>
                        </div>

                        <div class="detail-specs">
                            <div class="spec-item">
                                <h4>Características</h4>
                                <p>${product.characteristics}</p>
                            </div>
                            <div class="spec-item">
                                <h4>Harmonização</h4>
                                <p>${product.harmonization}</p>
                            </div>
                        </div>

                        <div class="detail-actions">
                            <button class="btn btn-primary add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Adicionar à Cesta</button>
                            <button class="btn btn-outline btn-favorite" data-id="${product.id}">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                                Favoritar
                            </button>
                        </div>
                    </div>
                </div>
            `;

            // Attach Listeners for Detail Page
            const favBtn = productDetailContainer.querySelector('.btn-favorite');
            favBtn.addEventListener('click', () => favoritesSystem.toggleFavorite(product.id));

            favoritesSystem.updateFavoriteIcons();

        } else {
            productDetailContainer.innerHTML = '<div class="container" style="text-align:center; padding: 5rem;"><h2>Produto não encontrado.</h2><a href="/" class="btn btn-outline">Voltar para Home</a></div>';
        }
    }
}
