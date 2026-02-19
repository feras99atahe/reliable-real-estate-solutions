import { Lang, content } from '@/lib/content';

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const t = content[lang].footer;
  const isRTL = lang === 'ar';

  return (
    <footer className="gradient-dark py-16 border-t border-white/10" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo/Brand */}
          <div>
            <div className="text-white mb-2">
              <div className="text-2xl font-bold tracking-[0.15em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                ASIRDAH
              </div>
              <div
                className="text-xs tracking-[0.25em] text-gold uppercase mt-1"
                style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
              >
                {t.tagline}
              </div>
            </div>
            <p
              className="text-white/40 text-sm mt-4 leading-relaxed"
              style={{
                fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Cormorant Garamond, serif',
                fontStyle: isRTL ? 'normal' : 'italic',
                lineHeight: isRTL ? 2 : 1.6,
                fontSize: isRTL ? '0.85rem' : '1rem',
              }}
            >
              {t.slogan}
            </p>
          </div>

          {/* Services links */}
          <div>
            <h4
              className="text-white/50 text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
            >
              {lang === 'en' ? 'Services' : 'الخدمات'}
            </h4>
            <ul className="space-y-3">
              {content[lang].services.items.map((item, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-200"
                    style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Location */}
          <div>
            <h4
              className="text-white/50 text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
            >
              {lang === 'en' ? 'Presence' : 'الحضور'}
            </h4>
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{
                fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif',
                lineHeight: isRTL ? 2 : 1.75,
              }}
            >
              {lang === 'en'
                ? 'Libya · Arab Markets\nInternational Presence'
                : 'ليبيا · الأسواق العربية\nالحضور الدولي'}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
          >
            {t.rights}
          </p>
          <div className="flex items-center gap-1">
            <div className="w-3 h-px bg-gold/40" />
            <div className="w-3 h-3 border border-gold/40" />
            <div className="w-3 h-px bg-gold/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
