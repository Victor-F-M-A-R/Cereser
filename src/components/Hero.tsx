export default function Hero() {
    return (
        <section id="hero" style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            {/* IMAGEM DE FUNDO (Limpa) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}>
                {/* Using banner.webp as hero-ritual.jpg is missing */}
                <img
                    src="/images/banner.webp"
                    alt="Ritual do Vinho"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* OVERLAY MÍNIMO (Apenas para garantir leitura sem matar a foto) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.25)', /* Muito sutil */
                zIndex: -1
            }}></div>

            {/* CONTEÚDO REFINADO: Branco Puro & Nome Correto */}
            <div style={{ zIndex: 10, padding: '0 20px' }}>

                {/* TÍTULO: Branco, Fino, Elegante */}
                <h1 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: 'clamp(3rem, 6vw, 4.5rem)', /* Levemente maior para leitura */
                    color: '#FFFFFF', /* BRANCO PURO */
                    opacity: 1,
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                    textShadow: '0 2px 20px rgba(0,0,0,0.4)' /* Sombra para garantir leitura */
                }}>
                    CASA CERESER
                </h1>

                {/* SUBTÍTULO */}
                <p style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: '400',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                    color: '#FFFFFF', /* BRANCO PURO */
                    opacity: 1,
                    letterSpacing: '0.05em',
                    marginTop: '0'
                }}>
                    A essência da Itália a cada gole
                </p>

                {/* Separador */}
                <div style={{
                    width: '80px',
                    height: '1px',
                    background: '#FFFFFF',
                    margin: '2.5rem auto',
                    opacity: 0.7
                }}></div>
            </div>
        </section>
    );
}
