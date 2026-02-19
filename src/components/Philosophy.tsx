import { Lang, content } from '@/lib/content';

interface PhilosophyProps {
  lang: Lang;
}

export function Philosophy({ lang }: PhilosophyProps) {
  const t = content[lang].philosophy;
  const isRTL = lang === 'ar';

  return (
    <section id="philosophy" className="section-padding gradient-dark" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="gold-divider" />
          <span
            className="text-gold text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
          >
            {t.label}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Headline + quote */}
          <div>
            <h2
              className="text-white mb-10"
              style={{
                fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Cormorant Garamond, serif',
                fontWeight: isRTL ? 600 : 300,
                fontSize: 'clamp(2.2rem, 4vw, 4rem)',
                lineHeight: isRTL ? 1.4 : 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              {t.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.headline.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Quote block */}
            <div className="border-l-2 border-gold pl-6 mb-8" style={{ borderLeftWidth: isRTL ? 0 : 2, borderRightWidth: isRTL ? 2 : 0, paddingLeft: isRTL ? 0 : '1.5rem', paddingRight: isRTL ? '1.5rem' : 0 }}>
              <p
                className="text-gold/90 italic"
                style={{
                  fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                  lineHeight: 1.6,
                  fontStyle: isRTL ? 'normal' : 'italic',
                }}
              >
                {t.quote}
              </p>
              <p
                className="text-white/40 mt-2 text-sm"
                style={{
                  fontFamily: isRTL ? 'Inter, sans-serif' : 'Noto Sans Arabic, sans-serif',
                  direction: isRTL ? 'ltr' : 'rtl',
                }}
              >
                {t.quoteAr}
              </p>
            </div>
          </div>

          {/* Body text */}
          <div className="flex items-center">
            <p
              className="text-white/60 leading-relaxed"
              style={{
                fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif',
                fontSize: '0.9375rem',
                lineHeight: isRTL ? 2.1 : 1.9,
              }}
            >
              {t.body}
            </p>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {t.pillars.map((pillar, i) => (
            <div key={i} className="bg-charcoal-mid p-8 hover:bg-charcoal/70 transition-colors duration-300 group" style={{ backgroundColor: 'hsl(220 8% 18%)' }}>
              <div className="text-gold text-2xl font-light mb-4 font-display" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                0{i + 1}
              </div>
              <h3
                className="text-white mb-3 text-base font-medium"
                style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-white/45 text-sm leading-relaxed"
                style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif', lineHeight: isRTL ? 2 : 1.75 }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
