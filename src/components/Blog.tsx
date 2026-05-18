const posts = [
  {
    tag: 'Страховые выплаты',
    date: '12 мая 2026',
    title: 'Как получить страховую выплату при ранении: пошаговое руководство',
    excerpt: 'Какие документы нужны, в какие сроки подавать заявление и что делать, если страховая компания отказала в выплате.',
    readTime: '7 мин',
  },
  {
    tag: 'Статус ветерана',
    date: '4 мая 2026',
    title: 'Статус ветерана боевых действий в 2026 году: кто имеет право и как оформить',
    excerpt: 'Полный перечень оснований для присвоения статуса, необходимые документы и типичные причины отказа военкоматов.',
    readTime: '9 мин',
  },
  {
    tag: 'Семьям погибших',
    date: '25 апреля 2026',
    title: 'Выплаты семьям погибших военнослужащих: что положено по закону',
    excerpt: 'Единовременные выплаты, пенсия по потере кормильца, льготы на жильё — всё, на что имеют право вдовы и дети.',
    readTime: '8 мин',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-28" style={{ background: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="section-label">Знания</span>
            <h2
              className="font-cormorant font-light mt-4 leading-tight gold-line"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: 'var(--black)' }}
            >
              Правовой блог
            </h2>
          </div>
          <p
            className="font-golos mt-8 lg:mt-0 lg:max-w-xs text-sm leading-relaxed"
            style={{ color: 'var(--gray-warm)' }}
          >
            Практические статьи о правах военнослужащих, ветеранов и их семей.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0" style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="p-10 cursor-pointer group"
              style={{
                borderRight: i < 2 ? '1px solid rgba(201,168,76,0.15)' : 'none',
                transition: 'background 0.3s ease',
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-golos text-xs uppercase tracking-widest"
                  style={{
                    color: 'var(--gold)',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    padding: '3px 10px',
                  }}
                >
                  {post.tag}
                </span>
                <span className="font-golos text-xs" style={{ color: 'var(--gray-warm)' }}>
                  {post.readTime}
                </span>
              </div>

              <h3
                className="font-cormorant text-2xl font-semibold leading-tight mb-4"
                style={{ color: 'var(--black)', transition: 'color 0.3s ease' }}
              >
                {post.title}
              </h3>

              <p
                className="font-golos text-sm leading-relaxed mb-8"
                style={{ color: 'var(--gray-warm)' }}
              >
                {post.excerpt}
              </p>

              <div
                className="flex items-center justify-between"
                style={{ borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: '1.5rem' }}
              >
                <span className="font-golos text-xs" style={{ color: 'rgba(107,101,96,0.7)' }}>
                  {post.date}
                </span>
                <span
                  className="font-golos text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--gold)' }}
                >
                  Читать →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-outline-gold">Все статьи</button>
        </div>
      </div>
    </section>
  );
}