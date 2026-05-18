import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Banknote',
    title: 'Страховые выплаты',
    desc: 'Получение единовременных страховых выплат при гибели, ранении, травме. Оспаривание отказов страховщика и Министерства обороны.',
  },
  {
    icon: 'Award',
    title: 'Статус ветерана и льготы',
    desc: 'Оформление статуса ветерана боевых действий, инвалида военной травмы. Получение положенных льгот, выплат и компенсаций.',
  },
  {
    icon: 'Shield',
    title: 'Уголовная защита',
    desc: 'Защита военнослужащих по воинским преступлениям, самовольному оставлению части, дисциплинарным нарушениям.',
  },
  {
    icon: 'Heart',
    title: 'Помощь семьям',
    desc: 'Получение выплат семьям погибших военнослужащих, оформление наследства, пенсии по потере кормильца.',
  },
  {
    icon: 'Home',
    title: 'Жильё военнослужащих',
    desc: 'Получение служебного жилья, военной ипотеки, субсидии на покупку жилья. Споры с Росвоенипотекой и Министерством обороны.',
  },
  {
    icon: 'FileCheck',
    title: 'Оспаривание приказов',
    desc: 'Обжалование незаконных приказов о привлечении к ответственности, о переводе, увольнении и снижении звания.',
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
            Помогаем военнослужащим, ветеранам и их семьям получить всё, что положено по закону.
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
            Получить бесплатную консультацию
          </button>
        </div>
      </div>
    </section>
  );
}