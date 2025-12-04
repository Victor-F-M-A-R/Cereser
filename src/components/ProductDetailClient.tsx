'use client';

import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function ProductDetailClient({ product }: { product: Product | undefined }) {
    const { addToCart, favorites, toggleFavorite } = useCart();

    if (!product) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '5rem' }}>
                <h2>Produto não encontrado.</h2>
                <Link href="/" className="btn btn-outline" style={{ marginTop: '1rem', color: '#2C0404', borderColor: '#2C0404' }}>
                    Voltar para Home
                </Link>
            </div>
        );
    }

    const isFav = favorites.includes(product.id);

    return (
        <div className="container" style={{ padding: '8rem 0 4rem 0', maxWidth: '1100px', margin: '0 auto', width: '90%' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'start',
                justifyContent: 'center'
            }}>
                {/* Left Column: Image */}
                <div className="detail-image-wrapper reveal active" style={{
                    background: '#FDFBF7',
                    borderRadius: '12px',
                    padding: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '600px'
                }}>
                    <img src={product.image} alt={product.name} style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }} />
                </div>

                {/* Right Column: Content */}
                <div className="detail-content reveal active delay-100" style={{ padding: '2rem 0' }}>
                    <div className="detail-header" style={{ marginBottom: '2rem' }}>
                        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: '#3E1E24', marginBottom: '0.5rem' }}>{product.name}</h1>
                        <p style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>{product.region} • {product.year}</p>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3E1E24', marginTop: '1.5rem' }}>R$ {product.price.toFixed(2).replace('.', ',')}</p>
                    </div>

                    <div className="detail-description" style={{ marginBottom: '3rem', lineHeight: 1.8, color: '#444' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            {product.description} Este vinho representa a excelência da viticultura italiana,
                            colhido manualmente nas encostas ensolaradas e envelhecido com precisão para atingir
                            o equilíbrio perfeito entre estrutura e elegância.
                        </p>
                        <p>
                            No paladar, revela-se uma experiência sensorial única, com camadas complexas de sabores
                            que evoluem na taça. Ideal para momentos especiais ou para presentear quem aprecia
                            a verdadeira arte da enologia.
                        </p>
                    </div>

                    <div className="detail-specs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem', padding: '2rem', background: '#F9F7F2', borderRadius: '8px' }}>
                        <div className="spec-item">
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', marginTop: '0', color: '#4A0404' }}>Características</h4>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>{product.characteristics}</p>
                        </div>
                        <div className="spec-item">
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', marginTop: '0', color: '#4A0404' }}>Harmonização</h4>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>{product.harmonization}</p>
                        </div>
                    </div>

                    <div className="detail-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <button
                            className="btn"
                            onClick={() => addToCart(product)}
                            style={{
                                width: '100%',
                                height: '56px',
                                background: '#4A0404',
                                color: 'white',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            Adicionar à Cesta
                        </button>
                        <button
                            className="btn"
                            onClick={() => toggleFavorite(product.id)}
                            style={{
                                width: '100%',
                                height: '56px',
                                background: 'transparent',
                                color: '#4A0404',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                border: '1px solid #4A0404',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill={isFav ? '#4A0404' : 'none'} stroke="currentColor" strokeWidth="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            {isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
