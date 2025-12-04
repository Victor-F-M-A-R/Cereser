import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  // Categorizing the 12 wines
  const novidades = products.slice(6, 10); // Nebbiolo, Sangiovese, Montepulciano, Primitivo
  const champagnes = products.filter(p => p.name.includes('Prosecco') || p.name.includes('Franciacorta') || p.name.includes('Vermentino')); // Sparkling + White
  const pontuados = products.slice(0, 4); // Barolo, Brunello, Chianti, Amarone (The big reds)
  const outros = products.slice(10, 12); // Nero d'Avola, Vermentino (if not in champagnes)

  // Actually let's just use the first 4 for novidades, next 4 for pontuados, etc to show them all.
  // Or better, let's show ALL of them in a "Coleção Completa" if needed, but the user asked for specific sections before.
  // Let's map them to the existing sections to ensure all 12 are visible somewhere.

  const section1 = products.slice(0, 4);
  const section2 = products.slice(4, 8);
  const section3 = products.slice(8, 12);

  return (
    <>
      <Hero />

      {/* Section: Novidades (First 4) */}
      <section id="novidades" className="container" style={{ padding: '6rem 0' }}>
        <h2 className="section-title reveal active">Novidades</h2>
        <p className="section-subtitle reveal active delay-100">Lançamentos exclusivos da estação</p>

        <div className="grid-main" style={{ gap: '2rem' }}>
          {section1.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 100} />
          ))}
        </div>
      </section>

      {/* Section: Exclusivos (Next 4) */}
      <section id="exclusivos" style={{ background: '#F9F7F2', padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title reveal active">Coleção Exclusiva</h2>
          <p className="section-subtitle reveal active delay-100">Raridades e Edições Limitadas</p>

          <div className="grid-main" style={{ gap: '2rem' }}>
            {section2.map((product, index) => (
              <ProductCard key={`excl-${product.id}`} product={product} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Section: Vinhos Pontuados (Last 4) */}
      <section id="vinhos" className="container" style={{ padding: '6rem 0' }}>
        <h2 className="section-title reveal active">Vinhos Pontuados</h2>
        <p className="section-subtitle reveal active delay-100">Reconhecidos pelos maiores críticos</p>

        <div className="grid-main" style={{ gap: '2rem' }}>
          {section3.map((product, index) => (
            <ProductCard key={`wine-${product.id}`} product={product} delay={index * 100} />
          ))}
        </div>
      </section>

      {/* Section: Nossa história */}
      <section id="historia" className="container" style={{ padding: '4rem 0 8rem 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div className="reveal active" style={{ borderRadius: '12px', overflow: 'hidden', height: '400px' }}>
            <div style={{ flex: 1, minHeight: '400px', position: 'relative' }}>
              {/* CORREÇÃO: Usando .webp conforme verificado na pasta */}
              <img
                src="/images/adega.webP"
                alt="Adega Histórica"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
          <div className="reveal active delay-100">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              color: '#3E1E24',
              marginBottom: '1.5rem'
            }}>
              Nossa história
            </h2>
            <p style={{ lineHeight: 1.8, color: '#666', marginBottom: '2rem' }}>
              Desde 1980, a Casa de Cereser tem sido sinônimo de tradição e qualidade.
              Nossa paixão pelo vinho nos levou a percorrer as regiões mais prestigiadas da Itália
              para trazer até você uma seleção incomparável. Cada garrafa conta uma história de
              terra, sol e dedicação.
            </p>
            <button className="btn-primary">Ler mais</button>
          </div>
        </div>
      </section>
    </>
  );
}
