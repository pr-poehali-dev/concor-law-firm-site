export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--black)', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-cormorant text-3xl font-bold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                КОНКОР
              </span>
              <div className="font-golos text-xs tracking-widest uppercase mt-1" style={{ color: 'rgba(248,246,242,0.35)' }}>
                Юридическая фирма
              </div>
            </div>
            <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(248,246,242,0.5)', maxWidth: 280 }}>
              Профессиональная правовая защита ваших интересов с 2009 года. Опыт. Точность. Результат.
            </p>
          </div>

          <div>
            <div className="section-label mb-5">Навигация</div>
            <div className="flex flex-col gap-3">
              {[
                ['Главная', '#home'],
                ['Услуги', '#services'],
                ['О компании', '#about'],
                ['Блог', '#blog'],
                ['Вопросы', '#faq'],
                ['Контакты', '#contacts'],
              ].map(([label, href]) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className="font-golos text-sm text-left hover-gold"
                  style={{ color: 'rgba(248,246,242,0.5)', transition: 'color 0.3s ease' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="section-label mb-5">Контакты</div>
            <div className="flex flex-col gap-3">
              <p className="font-golos text-sm" style={{ color: 'rgba(248,246,242,0.5)' }}>
                +7 (495) 000-00-00
              </p>
              <p className="font-golos text-sm" style={{ color: 'rgba(248,246,242,0.5)' }}>
                info@konkor.ru
              </p>
              <p className="font-golos text-sm" style={{ color: 'rgba(248,246,242,0.5)' }}>
                г. Москва, Башня ОКО
              </p>
              <button
                className="btn-gold mt-4 text-center"
                onClick={() => handleNav('#consult')}
              >
                Записаться
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}
        >
          <span className="font-golos text-xs" style={{ color: 'rgba(248,246,242,0.25)' }}>
            © 2026 КОНКОР. Все права защищены.
          </span>
          <div className="flex gap-6">
            <button className="font-golos text-xs hover-gold" style={{ color: 'rgba(248,246,242,0.25)', transition: 'color 0.3s ease' }}>
              Политика конфиденциальности
            </button>
            <button className="font-golos text-xs hover-gold" style={{ color: 'rgba(248,246,242,0.25)', transition: 'color 0.3s ease' }}>
              Пользовательское соглашение
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
