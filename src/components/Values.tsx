import { Lang, content } from '@/lib/content';

interface ValuesProps {
  lang: Lang;
}

export function Values({ lang }: ValuesProps) {
  const t = content[lang].values;
  const visionT = content[lang].vision;
  const isRTL = lang === 'ar';

  return (
    <section id="values" className="section-padding bg-cream" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Values */}
          <div>
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
              className="text-charcoal mb-12"
              style={{
                fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Cormorant Garamond, serif',
                fontWeight: isRTL ? 600 : 400,
                fontSize: 'clamp(2rem, 3vw, 3rem)',
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

            <div className="space-y-0">
              {t.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 py-5 border-b border-border/50 group hover:border-gold/40 transition-colors duration-300"
                  style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}
                >
                  <span
                    className="text-gold/40 text-sm font-light"
                    style={{ fontFamily: 'Cormorant Garamond, serif', minWidth: '2rem', textAlign: isRTL ? 'right' : 'left' }}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <span
                      className="text-charcoal group-hover:text-gold transition-colors duration-300 font-medium"
                      style={{
                        fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif',
                        fontSize: '1.0625rem',
                      }}
                    >
                      {isRTL ? item.ar : item.en}
                    </span>
                    <span
                      className="text-muted-foreground/50 text-sm ms-3"
                      style={{
                        fontFamily: isRTL ? 'Inter, sans-serif' : 'Noto Sans Arabic, sans-serif',
                        fontSize: '0.875rem',
                      }}
                    >
                      {isRTL ? item.en : item.ar}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-300 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="flex items-center">
            <div>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="gold-divider" />
                <span
                  className="text-gold text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
                >
                  {visionT.label}
                </span>
              </div>

              <blockquote
                className="text-charcoal/80 leading-relaxed"
                style={{
                  fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Cormorant Garamond, serif',
                  fontWeight: isRTL ? 400 : 300,
                  fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
                  lineHeight: isRTL ? 1.8 : 1.55,
                  fontStyle: isRTL ? 'normal' : 'italic',
                }}
              >
                "{visionT.headline}"
              </blockquote>

              {/* Decorative element */}
              <div className="mt-10 w-16 h-16 relative">
                <div className="absolute inset-0 border border-gold/20" />
                <div className="absolute inset-2 border border-gold/40" />
                <div className="absolute inset-4 bg-gold/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
