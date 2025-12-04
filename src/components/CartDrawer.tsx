'use client';

import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
    const { cart, isCartOpen, toggleCart, removeFromCart } = useCart();

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <>
            <div
                className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
                onClick={toggleCart}
            ></div>
            <aside className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>Sua Adega</h3>
                    <button className="close-cart" onClick={toggleCart} aria-label="Fechar carrinho">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" stroke="#2C0404" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-text-muted)' }}>
                            Sua cesta está vazia.
                        </p>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                                <div>
                                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                                    <div style={{ fontSize: '0.9em', color: '#666' }}>
                                        {item.quantity}x R$ {item.price.toFixed(2).replace('.', ',')}
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    style={{ color: '#999', fontSize: '0.8em' }}
                                >
                                    Remover
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-footer">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 600 }}>
                        <span>Total</span>
                        <span className="cart-total">R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Finalizar Compra</button>
                </div>
            </aside>
        </>
    );
}
