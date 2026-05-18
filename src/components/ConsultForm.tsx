import { useState } from 'react';
import Icon from '@/components/ui/icon';

const areas = [
  'Корпоративное право',
  'Судебная защита',
  'Недвижимость',
  'Налоговое право',
  'Уголовная защита',
  'Трудовые споры',
  'Другое',
];

const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function ConsultForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    message: '',
    time: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="consult"
      className="py-28"
      style={{ background: 'var(--green-dark)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="section-label">Запись</span>
            <h2
              className="font-cormorant font-light mt-4 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: 'var(--white)' }}
            >
              Онлайн-консультация
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>с юристом</em>
            </h2>
            <div className="w-16 h-px mt-5 mb-8" style={{ background: 'var(--gold)' }} />

            <p className="font-golos text-base leading-relaxed mb-10" style={{ color: 'rgba(248,246,242,0.65)' }}>
              Расскажите о вашей ситуации — мы подберём подходящего специалиста и согласуем удобное время для встречи.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: 'Video', text: 'Видеозвонок в удобное время' },
                { icon: 'FileCheck', text: 'Чёткая правовая позиция по вашему вопросу' },
                { icon: 'Lock', text: 'Полная конфиденциальность' },
                { icon: 'Clock', text: '30–60 минут со специалистом вашего профиля' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 flex-shrink-0 flex items-center justify-center"
                    style={{ border: '1px solid rgba(201,168,76,0.35)', color: 'var(--gold)' }}
                  >
                    <Icon name={item.icon} size={16} fallback="Check" />
                  </div>
                  <span className="font-golos text-sm" style={{ color: 'rgba(248,246,242,0.75)' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="p-10"
            style={{
              background: 'rgba(248,246,242,0.04)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 mx-auto flex items-center justify-center mb-6"
                  style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
                >
                  <Icon name="Check" size={28} />
                </div>
                <h3 className="font-cormorant text-3xl font-semibold mb-3" style={{ color: 'var(--white)' }}>
                  Заявка принята
                </h3>
                <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(248,246,242,0.65)' }}>
                  Мы свяжемся с вами в течение рабочего дня для подтверждения времени консультации.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-cormorant text-2xl font-semibold mb-2" style={{ color: 'var(--white)' }}>
                  Заполните форму
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-golos text-xs uppercase tracking-widest mb-2 block" style={{ color: 'rgba(248,246,242,0.5)' }}>
                      Ваше имя *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 font-golos text-sm outline-none focus:border-gold"
                      style={{
                        background: 'rgba(248,246,242,0.06)',
                        border: '1px solid rgba(201,168,76,0.25)',
                        color: 'var(--white)',
                        transition: 'border-color 0.3s ease',
                      }}
                    />
                  </div>
                  <div>
                    <label className="font-golos text-xs uppercase tracking-widest mb-2 block" style={{ color: 'rgba(248,246,242,0.5)' }}>
                      Телефон *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 font-golos text-sm outline-none"
                      style={{
                        background: 'rgba(248,246,242,0.06)',
                        border: '1px solid rgba(201,168,76,0.25)',
                        color: 'var(--white)',
                        transition: 'border-color 0.3s ease',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-golos text-xs uppercase tracking-widest mb-2 block" style={{ color: 'rgba(248,246,242,0.5)' }}>
                    Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="example@mail.ru"
                    className="w-full px-4 py-3 font-golos text-sm outline-none"
                    style={{
                      background: 'rgba(248,246,242,0.06)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      color: 'var(--white)',
                      transition: 'border-color 0.3s ease',
                    }}
                  />
                </div>

                <div>
                  <label className="font-golos text-xs uppercase tracking-widest mb-2 block" style={{ color: 'rgba(248,246,242,0.5)' }}>
                    Область права
                  </label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-golos text-sm outline-none appearance-none"
                    style={{
                      background: 'rgba(26,48,40,0.8)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      color: form.area ? 'var(--white)' : 'rgba(248,246,242,0.4)',
                    }}
                  >
                    <option value="">Выберите направление</option>
                    {areas.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>

                <div>
                  <label className="font-golos text-xs uppercase tracking-widest mb-2 block" style={{ color: 'rgba(248,246,242,0.5)' }}>
                    Удобное время
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, time: t }))}
                        className="px-3 py-1.5 font-golos text-xs transition-all"
                        style={{
                          border: form.time === t ? '1px solid var(--gold)' : '1px solid rgba(201,168,76,0.2)',
                          background: form.time === t ? 'var(--gold)' : 'transparent',
                          color: form.time === t ? 'var(--black)' : 'rgba(248,246,242,0.6)',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-golos text-xs uppercase tracking-widest mb-2 block" style={{ color: 'rgba(248,246,242,0.5)' }}>
                    Кратко о ситуации
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Опишите вашу ситуацию..."
                    className="w-full px-4 py-3 font-golos text-sm outline-none resize-none"
                    style={{
                      background: 'rgba(248,246,242,0.06)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      color: 'var(--white)',
                    }}
                  />
                </div>

                <button type="submit" className="btn-gold w-full mt-2">
                  Записаться на консультацию
                </button>

                <p className="font-golos text-xs text-center" style={{ color: 'rgba(248,246,242,0.35)' }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
