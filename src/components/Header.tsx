import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'О компании', href: '#about' },
  { label: 'Блог', href: '#blog' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(14, 14, 14, 0.97)'
          : 'linear-gradient(180deg, rgba(14,14,14,0.85) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-3">
            <div className="flex flex-col items-start">
              <span
                className="text-2xl font-cormorant font-bold tracking-[0.15em] uppercase"
                style={{ color: 'var(--gold)', lineHeight: 1 }}
              >
                КОНКОР
              </span>
              <span
                className="text-[8px] tracking-[0.35em] uppercase font-golos font-medium"
                style={{ color: 'rgba(248,246,242,0.5)', letterSpacing: '0.35em' }}
              >
                Юридическая фирма
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              className="btn-gold"
              onClick={() => handleNav('#consult')}
            >
              Записаться
            </button>
          </div>

          {/* Mobile menu */}
          <button
            className="lg:hidden text-konkor-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden"
          style={{
            background: 'rgba(14,14,14,0.98)',
            borderTop: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="nav-link text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              className="btn-gold mt-2 w-full"
              onClick={() => handleNav('#consult')}
            >
              Записаться на консультацию
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
