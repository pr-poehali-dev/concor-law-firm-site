import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <section id="contacts" className="py-28" style={{ background: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="section-label">Контакты</span>
          <h2
            className="font-cormorant font-light mt-4 gold-line-center"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: 'var(--black)' }}
          >
            Мы здесь
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-0" style={{ border: '1px solid rgba(201,168,76,0.18)' }}>
          {[
            {
              icon: 'MapPin',
              title: 'Адрес',
              lines: ['г. Москва, Пресненская набережная, 8с1', 'Башня ОКО, офис 42-18'],
            },
            {
              icon: 'Phone',
              title: 'Телефон',
              lines: ['+7 (495) 000-00-00', 'Пн–Пт: 9:00 — 19:00'],
            },
            {
              icon: 'Mail',
              title: 'Email',
              lines: ['info@konkor.ru', 'Ответим в течение часа'],
            },
          ].map((c, i) => (
            <div
              key={c.title}
              className="p-10 flex flex-col items-start"
              style={{
                borderRight: i < 2 ? '1px solid rgba(201,168,76,0.18)' : 'none',
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-6"
                style={{ border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)' }}
              >
                <Icon name={c.icon} size={20} fallback="Circle" />
              </div>
              <div className="section-label mb-3">{c.title}</div>
              {c.lines.map((line, j) => (
                <p
                  key={j}
                  className="font-golos"
                  style={{
                    color: j === 0 ? 'var(--black)' : 'var(--gray-warm)',
                    fontSize: j === 0 ? '1rem' : '0.875rem',
                    fontWeight: j === 0 ? 500 : 400,
                    marginTop: j === 0 ? 0 : 4,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Social / CTA strip */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 px-10 py-8"
          style={{ background: 'var(--green-dark)' }}
        >
          <span className="font-cormorant text-2xl font-light" style={{ color: 'var(--white)' }}>
            Готовы обсудить вашу ситуацию?
          </span>
          <button
            className="btn-gold flex-shrink-0"
            onClick={() => {
              const el = document.querySelector('#consult');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Записаться на консультацию
          </button>
        </div>
      </div>
    </section>
  );
}
