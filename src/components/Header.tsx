import Link from 'next/link';

export default function Header({ onOpenCart }: { onOpenCart: () => void }) {
    return (
        <header className="site-header" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1.5rem 0',
            background: 'transparent',
            color: '#FFFFFF' // Pure White
        }}>
            <div className="container header-inner" style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr', // 3 columns: Nav, Logo, Actions
                alignItems: 'center',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 2rem'
            }}>
                {/* Left Nav */}
                <nav className="nav-desktop">
                    <ul style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        <li><Link href="/" className="nav-link" style={{ color: '#FFFFFF' }}>Home</Link></li>
                        <li><Link href="/#novidades" className="nav-link" style={{ color: '#FFFFFF' }}>Novidades</Link></li>
                        <li><Link href="/#vinhos" className="nav-link" style={{ color: '#FFFFFF' }}>Vinhos</Link></li>
                        <li><Link href="/#historia" className="nav-link" style={{ color: '#FFFFFF' }}>História</Link></li>
                    </ul>
                </nav>

                {/* Center Logo */}
                <Link href="/" className="logo" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    color: '#FFFFFF',
                    whiteSpace: 'nowrap'
                }}>
                    CASA CERESER
                </Link>

                {/* Right Actions */}
                <div className="header-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <button className="btn-icon" aria-label="Buscar" style={{ padding: '8px', color: '#FFFFFF' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                    <button className="btn-icon" aria-label="Favoritos" style={{ padding: '8px', color: '#FFFFFF' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button className="btn-cart" aria-label="Carrinho" onClick={onOpenCart} style={{ position: 'relative', padding: '8px', color: '#FFFFFF' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"></path><path d="M3 6H21"></path><path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"></path></svg>
                        <span style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            background: '#FFFFFF',
                            color: '#3E1E24',
                            fontSize: '0.6rem',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>0</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
