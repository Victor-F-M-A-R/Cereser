'use client';

import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, delay }: { product: Product; delay: number }) {
    const { addToCart, favorites, toggleFavorite } = useCart();
    const isFav = favorites.includes(product.id);

    return (
        <article className={`product-card reveal delay-${delay}`} style={{
            gridColumn: 'span 3', // 4 cols on desktop
            background: '#FDFBF7',
            padding: '1.5rem',
            borderRadius: '8px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}>
            {/* Heart Top Right */}
            <button
                onClick={() => toggleFavorite(product.id)}
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 2
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill={isFav ? '#3E1E24' : 'none'} stroke={isFav ? '#3E1E24' : '#D1D1D1'} strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>

            {/* Image */}
            <Link href={`/product/${product.id}`} style={{ width: '100%', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{ height: '220px', width: 'auto' }}>
                    <img src={product.image} alt={product.name} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
                </div>
            </Link>

            {/* Content */}
            <div className="product-info" style={{ width: '100%' }}>
                <h3 style={{
                    fontFamily: 'var(--font-interface)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#2A2A2A',
                    marginBottom: '0.25rem'
                }}>
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>

                <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    {product.region}
                </p>

                <span style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#2A2A2A',
                    marginBottom: '1rem'
                }}>
                    R$ {product.price.toFixed(2).replace('.', ',')}
                </span>

                <button
                    className="btn-primary"
                    onClick={() => addToCart(product)}
                    style={{
                        width: '100%',
                        padding: '0.6rem 1rem',
                        fontSize: '0.75rem'
                    }}
                >
                    Adicionar ao Carrinho
                </button>
            </div>
        </article>
    );
}
