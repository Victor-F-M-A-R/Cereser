export default function Footer() {
    return (
        <footer className="site-footer" style={{
            backgroundColor: '#3E1E24',
            color: '#FDFBF7',
            padding: '4rem 0 2rem 0',
            marginTop: '4rem'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    {/* Column 1: Links */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 600 }}>Contato</h4>
                        <ul style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: 2 }}>
                            <li>Home</li>
                            <li>Novidades</li>
                            <li>Vinhos</li>
                            <li>Contate-nos</li>
                            <li>Termos de Serviço</li>
                        </ul>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 600 }}>Links</h4>
                        <ul style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: 2 }}>
                            <li>Sobre a Cereser</li>
                            <li>Trocas e devoluções</li>
                            <li>Política de privacidade</li>
                            <li>Segurança na compra</li>
                        </ul>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 600 }}>Newsletter</h4>
                        <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '1rem' }}>
                            Inscreva-se para receber nossas novidades.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input type="email" placeholder="O seu endereço de email" style={{
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.3)',
                                padding: '0.6rem 1rem',
                                color: 'white',
                                borderRadius: '30px',
                                flex: 1,
                                fontSize: '0.8rem'
                            }} />
                            <button style={{
                                background: 'white',
                                color: '#3E1E24',
                                border: 'none',
                                padding: '0.6rem 1.5rem',
                                borderRadius: '30px',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}>
                                Inscrever
                            </button>
                        </div>

                        {/* Payment Icons */}
                        <div style={{ marginTop: '2rem' }}>
                            <p style={{
                                fontSize: '0.75rem',
                                marginBottom: '0.75rem',
                                opacity: 0.7,
                                letterSpacing: '0.05em'
                            }}>
                                Pagamento
                            </p>
                            <div style={{
                                display: 'flex',
                                gap: '16px',
                                alignItems: 'center'
                            }}>
                                <img src="/icons/visa.svg" alt="Visa" style={{ height: '40px', width: 'auto', opacity: 0.9 }} />
                                <img src="/icons/mastercard.svg" alt="Mastercard" style={{ height: '40px', width: 'auto', opacity: 0.9 }} />
                                <img src="/icons/americanexpress.webp" alt="American Express" style={{ height: '48px', width: 'auto', opacity: 0.9 }} />
                                <img src="/icons/pix.svg" alt="Pix" style={{ height: '40px', width: 'auto', opacity: 0.9 }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    opacity: 0.5
                }}>
                    <p>Copyright © 2025 Casa Cereser. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
