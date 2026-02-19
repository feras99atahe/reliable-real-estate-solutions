import { useState, useEffect } from 'react';
import { Lang, content } from '@/lib/content';
import logoSheet from '@/assets/logo-sheet.jpg';

interface NavbarProps {
  lang: Lang;
  onLangChange: (l: Lang) => void;
}

export function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang].nav;
  const isRTL = lang === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.about },
    { href: '#philosophy', label: t.philosophy },
    { href: '#services', label: t.services },
    { href: '#values', label: t.values },
    { href: '#presence', label: t.presence },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md border-b border-white/10 shadow-hero'
          : 'bg-transparent'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo — show text logo from brand */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <div className="text-white">
              <div className="text-xl font-bold tracking-[0.15em] leading-none" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                ASIRDAH
              </div>
              <div className="text-[10px] tracking-[0.25em] text-gold uppercase leading-tight mt-0.5">
                {lang === 'en' ? 'Real Estate Development' : 'للتطوير العقاري'}
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm tracking-wide"
                style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => onLangChange(lang === 'en' ? 'ar' : 'en')}
              className="text-white/70 hover:text-gold text-sm tracking-widest transition-colors duration-300 border border-white/20 hover:border-gold/50 px-3 py-1.5 rounded-sm"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Mobile menu */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="space-y-1.5">
                <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-px w-4 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-charcoal/98 border-t border-white/10 py-6 px-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-white/80 hover:text-gold transition-colors text-sm tracking-wide border-b border-white/5"
                style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
