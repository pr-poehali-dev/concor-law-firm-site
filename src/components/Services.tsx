import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Briefcase',
    title: 'Корпоративное право',
    desc: 'Регистрация и ликвидация компаний, сделки M&A, корпоративные споры, договорная работа.',
  },
  {
    icon: 'Scale',
    title: 'Судебная защита',
    desc: 'Представление интересов в арбитражных судах и судах общей юрисдикции всех инстанций.',
  },
  {
    icon: 'Building2',
    title: 'Недвижимость',
    desc: 'Сопровождение сделок, земельные споры, регистрация прав, долевое строительство.',
  },
  {
    icon: 'FileText',
    title: 'Налоговое право',
    desc: 'Налоговые проверки, споры с ФНС, оптимизация налогообложения, защита активов.',
  },
  {
    icon: 'Shield',
    title: 'Уголовная защита',
    desc: 'Защита по экономическим и должностным преступлениям, доследственные проверки.',
  },
  {
    icon: 'Users',
    title: 'Трудовые споры',
    desc: 'Защита прав работников и работодателей, трудовые договоры, увольнения, взыскания.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28" style={{ background: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="section-label">Практика</span>
            <h2
              className="font-cormorant font-light mt-4 leading-tight gold-line"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: 'var(--black)' }}
            >
              Наши услуги
            </h2>
          </div>
          <p
            className="font-golos mt-8 lg:mt-0 lg:max-w-xs leading-relaxed"
            style={{ color: 'var(--gray-warm)', fontSize: '0.95rem' }}
          >
            Каждое дело — уникально. Мы выстраиваем индивидуальную стратегию под ваши задачи.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card-service p-10 group cursor-pointer"
              style={{
                borderColor: i % 3 !== 2 && i !== services.length - 1 ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.12)',
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-6"
                style={{
                  border: '1px solid rgba(201,168,76,0.3)',
                  color: 'var(--gold)',
                  transition: 'background 0.3s ease',
                }}
              >
                <Icon name={s.icon} size={20} fallback="FileText" />
              </div>
              <h3
                className="font-cormorant font-semibold text-2xl mb-3"
                style={{ color: 'var(--black)' }}
              >
                {s.title}
              </h3>
              <p
                className="font-golos text-sm leading-relaxed"
                style={{ color: 'var(--gray-warm)' }}
              >
                {s.desc}
              </p>
              <div
                className="flex items-center gap-2 mt-6 text-xs font-golos font-semibold tracking-widest uppercase"
                style={{ color: 'var(--gold)', opacity: 0, transition: 'opacity 0.3s ease' }}
              >
                <span>Подробнее</span>
                <Icon name="ArrowRight" size={14} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button
            className="btn-outline-gold"
            onClick={() => {
              const el = document.querySelector('#consult');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Обсудить вашу задачу
          </button>
        </div>
      </div>
    </section>
  );
}
