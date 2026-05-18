import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    q: 'Консультация бесплатная?',
    a: 'Да. Первичная консультация по вопросам защиты прав военнослужащих — бесплатно. Мы оценим вашу ситуацию и честно скажем, есть ли перспективы дела.',
  },
  {
    q: 'Отказали в страховой выплате — что делать?',
    a: 'Обращайтесь к нам. Мы проверим основания отказа, подготовим жалобу и при необходимости подадим иск в суд. В большинстве случаев отказы удаётся оспорить.',
  },
  {
    q: 'Работаете ли вы с семьями погибших военнослужащих?',
    a: 'Да. Помогаем вдовам, детям и родителям получить единовременные выплаты, пенсию по потере кормильца, оформить льготы на жильё и другие меры поддержки.',
  },
  {
    q: 'Можно ли работать с вами дистанционно?',
    a: 'Да. Мы работаем по всей России. Консультация проходит онлайн, документы передаём через защищённые каналы. Личное присутствие — только если это необходимо в суде.',
  },
  {
    q: 'Какие сроки подачи заявлений на выплаты?',
    a: 'Сроки зависят от вида выплаты. Некоторые требования можно предъявить в течение трёх лет, другие — в строго ограниченный период. Лучше не откладывать и проконсультироваться сразу.',
  },
  {
    q: 'Что нужно для оформления статуса ветерана боевых действий?',
    a: 'Список документов зависит от основания: участие в конкретных военных операциях, наличие наград, ранений. На консультации мы разберём вашу ситуацию и составим чёткий план действий.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28" style={{ background: '#F2EFE9' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Вопросы и ответы</span>
            <h2
              className="font-cormorant font-light mt-4 leading-tight gold-line-center"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: 'var(--black)' }}
            >
              Часто спрашивают
            </h2>
          </div>

          <div className="flex flex-col gap-0" style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(201,168,76,0.15)' : 'none' }}
              >
                <button
                  className="w-full text-left px-8 py-6 flex items-start justify-between gap-4 group"
                  style={{ background: open === i ? 'rgba(201,168,76,0.06)' : 'transparent', transition: 'background 0.3s ease' }}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className="font-cormorant text-xl font-semibold leading-snug"
                    style={{ color: open === i ? 'var(--black)' : 'var(--black)' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center mt-0.5"
                    style={{
                      border: '1px solid rgba(201,168,76,0.4)',
                      color: 'var(--gold)',
                      transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Icon name="Plus" size={14} />
                  </span>
                </button>
                {open === i && (
                  <div className="px-8 pb-6">
                    <p className="font-golos text-sm leading-relaxed" style={{ color: 'var(--gray-warm)' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-golos text-sm mb-4" style={{ color: 'var(--gray-warm)' }}>
              Не нашли ответ на свой вопрос?
            </p>
            <button
              className="btn-gold"
              onClick={() => {
                const el = document.querySelector('#consult');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Задать вопрос юристу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}