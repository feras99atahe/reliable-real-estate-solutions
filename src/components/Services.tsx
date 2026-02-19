import { Lang, content } from '@/lib/content';

const serviceIcons = [
  // Building
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Gear
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Chart
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20" strokeLinecap="round"/>
  </svg>,
  // Star
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>,
];

interface ServicesProps {
  lang: Lang;
}

export function Services({ lang }: ServicesProps) {
  const t = content[lang].services;
  const isRTL = lang === 'ar';

  return (
    <section id="services" className="section-padding bg-stone" dir={isRTL ? 'rtl' : 'ltr'} style={{ backgroundColor: 'hsl(40 12% 90%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="gold-divider" />
            <span
              className="text-gold text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
            >
              {t.label}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="text-charcoal"
              style={{
                fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Cormorant Garamond, serif',
                fontWeight: isRTL ? 600 : 400,
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
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
              className="text-muted-foreground leading-relaxed"
              style={{
                fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif',
                fontSize: '0.9375rem',
                lineHeight: isRTL ? 2 : 1.85,
              }}
            >
              {t.body}
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 group hover:shadow-gold transition-all duration-400 border border-border/50 hover:border-gold/30 cursor-default"
              style={{ transition: 'all 0.35s ease' }}
            >
              <div className="text-gold mb-6 transition-transform duration-300 group-hover:scale-110 origin-left">
                {serviceIcons[i]}
              </div>
              <h3
                className="text-charcoal mb-3 font-medium text-base"
                style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
              >
                {item.title}
              </h3>
              <p
                className="text-muted-foreground text-sm leading-relaxed"
                style={{
                  fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif',
                  lineHeight: isRTL ? 2 : 1.75,
                }}
              >
                {item.desc}
              </p>

              {/* Bottom accent line */}
              <div className="h-px w-0 group-hover:w-full bg-gold/60 mt-6 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
