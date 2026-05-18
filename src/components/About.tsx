import Icon from '@/components/ui/icon';

const values = [
  { icon: 'Target', title: 'Специализация', desc: 'Военное право — наше основное направление. Мы знаем все тонкости законодательства о статусе военнослужащих.' },
  { icon: 'Eye', title: 'Прозрачность', desc: 'Честно оцениваем перспективы дела. Первичная консультация — бесплатно.' },
  { icon: 'Clock', title: 'Оперативность', desc: 'Понимаем, что промедление стоит денег и прав. Беремся за дело в течение 24 часов.' },
];

const team = [
  { name: 'Алексей Конкорин', role: 'Управляющий партнёр', area: 'Военное право, страховые споры', exp: '18 лет' },
  { name: 'Мария Воронова', role: 'Старший партнёр', area: 'Права семей военнослужащих', exp: '14 лет' },
  { name: 'Дмитрий Захаров', role: 'Партнёр', area: 'Уголовная защита военных', exp: '11 лет' },
];

export default function About() {
  return (
    <section id="about" className="py-28" style={{ background: 'var(--green-dark)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="section-label" style={{ color: 'var(--gold)' }}>О нас</span>
            <h2
              className="font-cormorant font-light mt-4 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: 'var(--white)' }}
            >
              Защищаем интересы
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>с 2009 года</em>
            </h2>
            <div className="w-16 h-px mt-5" style={{ background: 'var(--gold)' }} />
          </div>
          <div>
            <p
              className="font-golos text-base leading-loose"
              style={{ color: 'rgba(248,246,242,0.7)' }}
            >
              КОНКОР — специализированная юридическая компания по защите прав военнослужащих, ветеранов боевых действий и членов их семей. С 2009 года мы помогаем людям получить положенные выплаты, льготы и восстановить нарушенные права.
            </p>
            <p
              className="font-golos text-base leading-loose mt-4"
              style={{ color: 'rgba(248,246,242,0.55)' }}
            >
              Мы знаем, как работают военные ведомства и страховые компании изнутри. Наши юристы прошли практику в военных прокуратурах и судах, что даёт нам реальное преимущество в каждом деле.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-px mb-24" style={{ background: 'rgba(201,168,76,0.15)' }}>
          {values.map((v) => (
            <div
              key={v.title}
              className="p-10"
              style={{ background: 'var(--green-dark)' }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-5"
                style={{ border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)' }}
              >
                <Icon name={v.icon} size={18} fallback="Circle" />
              </div>
              <h3
                className="font-cormorant text-2xl font-semibold mb-3"
                style={{ color: 'var(--white)' }}
              >
                {v.title}
              </h3>
              <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(248,246,242,0.6)' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <span className="section-label">Команда</span>
          <h3
            className="font-cormorant font-light text-4xl mt-3 mb-12"
            style={{ color: 'var(--white)' }}
          >
            Ключевые партнёры
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((p) => (
              <div
                key={p.name}
                className="p-8"
                style={{
                  border: '1px solid rgba(201,168,76,0.2)',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div
                  className="w-16 h-16 mb-5 flex items-center justify-center font-cormorant text-2xl font-semibold"
                  style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    color: 'var(--gold)',
                  }}
                >
                  {p.name.split(' ').map(w => w[0]).join('')}
                </div>
                <div className="font-cormorant text-xl font-semibold" style={{ color: 'var(--white)' }}>
                  {p.name}
                </div>
                <div className="font-golos text-xs uppercase tracking-widest mt-1 mb-3" style={{ color: 'var(--gold)' }}>
                  {p.role}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-golos text-sm" style={{ color: 'rgba(248,246,242,0.6)' }}>{p.area}</span>
                  <span
                    className="font-golos text-xs px-3 py-1"
                    style={{
                      background: 'rgba(201,168,76,0.1)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      color: 'var(--gold-light)',
                    }}
                  >
                    {p.exp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}