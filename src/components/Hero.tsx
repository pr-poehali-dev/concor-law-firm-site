const heroImage = 'https://cdn.poehali.dev/projects/fe7081a4-a58f-442b-8dd6-abc2687e9ae0/files/4257baee-7c1d-4de6-9e8f-6ae3a73ad329.jpg';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(14,14,14,0.92) 0%, rgba(26,48,40,0.75) 50%, rgba(14,14,14,0.6) 100%)' }} />
      <div className="noise-texture absolute inset-0 opacity-30" />

      {/* Gold vertical accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block"
        style={{ background: 'linear-gradient(180deg, transparent 0%, var(--gold) 30%, var(--gold) 70%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span className="section-label">Профессиональная защита</span>
          </div>

          <h1
            className="font-cormorant font-light mt-6 leading-none animate-fade-up"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              color: 'var(--white)',
              animationDelay: '0.3s',
              opacity: 0,
            }}
          >
            Право на вашей
            <br />
            <em
              className="not-italic font-light"
              style={{ color: 'var(--gold)' }}
            >
              стороне.
            </em>
          </h1>

          <p
            className="font-golos text-lg mt-8 leading-relaxed animate-fade-up"
            style={{
              color: 'rgba(248,246,242,0.7)',
              maxWidth: '520px',
              animationDelay: '0.5s',
              opacity: 0,
            }}
          >
            Юридическая фирма КОНКОР — комплексная правовая поддержка бизнеса и частных лиц. Опыт, точность, результат.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <button
              className="btn-gold"
              onClick={() => handleScroll('#consult')}
            >
              Записаться на консультацию
            </button>
            <button
              className="btn-outline-gold"
              onClick={() => handleScroll('#services')}
            >
              Наши услуги
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-20 pt-10 animate-fade-up"
            style={{
              borderTop: '1px solid rgba(201,168,76,0.25)',
              animationDelay: '0.9s',
              opacity: 0,
            }}
          >
            {[
              { num: '15+', label: 'лет на рынке' },
              { num: '2 400+', label: 'выигранных дел' },
              { num: '98%', label: 'довольных клиентов' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-cormorant font-semibold"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--gold)', lineHeight: 1 }}
                >
                  {stat.num}
                </div>
                <div
                  className="font-golos text-xs mt-1 uppercase tracking-widest"
                  style={{ color: 'rgba(248,246,242,0.5)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1.2s', opacity: 0 }}
      >
        <span className="section-label" style={{ color: 'rgba(201,168,76,0.6)' }}>scroll</span>
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.6) 0%, transparent 100%)' }}
        />
      </div>
    </section>
  );
}
