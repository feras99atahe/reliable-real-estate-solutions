import { Lang, content } from '@/lib/content';
import heroBg from '@/assets/hero-bg.jpg';

interface PresenceProps {
  lang: Lang;
}

export function Presence({ lang }: PresenceProps) {
  const t = content[lang].presence;
  const isRTL = lang === 'ar';

  return (
    <section id="presence" className="relative py-32 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0" style={{ background: 'hsla(220,10%,8%,0.82)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="gold-divider" />
            <span
              className="text-gold text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
            >
              {t.label}
            </span>
          </div>

          <h2
            className="text-white mb-8"
            style={{
              fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Cormorant Garamond, serif',
              fontWeight: isRTL ? 500 : 400,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: isRTL ? 1.4 : 1.1,
            }}
          >
            {t.headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>

          <p
            className="text-white/65 leading-relaxed"
            style={{
              fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif',
              fontSize: '0.9375rem',
              lineHeight: isRTL ? 2 : 1.85,
            }}
          >
            {t.body}
          </p>
        </div>

        {/* Region stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {[
            { num: 'Libya', sub: lang === 'en' ? 'Headquarters' : 'المقر الرئيسي' },
            { num: lang === 'en' ? 'Arab' : 'عربية', sub: lang === 'en' ? 'Regional Markets' : 'أسواق إقليمية' },
            { num: lang === 'en' ? 'Global' : 'عالمي', sub: lang === 'en' ? 'International Reach' : 'الامتداد الدولي' },
            { num: '2025', sub: lang === 'en' ? 'Active Operations' : 'عمليات نشطة' },
          ].map((stat, i) => (
            <div key={i} className="py-8 px-8" style={{ backgroundColor: 'hsla(220,10%,12%,0.7)' }}>
              <div
                className="text-gold text-2xl md:text-3xl font-light mb-1"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {stat.num}
              </div>
              <div
                className="text-white/40 text-xs tracking-wide"
                style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
