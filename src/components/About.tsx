import { Lang, content } from '@/lib/content';
import aboutImg from '@/assets/about-interior.jpg';

interface AboutProps {
  lang: Lang;
}

export function About({ lang }: AboutProps) {
  const t = content[lang].about;
  const isRTL = lang === 'ar';

  return (
    <section id="about" className="section-padding bg-cream" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className={`relative ${isRTL ? 'order-last lg:order-first' : ''}`}>
            <div className="relative">
              <img
                src={aboutImg}
                alt="ASIRDAH Interior"
                className="w-full h-[500px] object-cover"
              />
              {/* Gold frame accent */}
              <div
                className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} w-48 h-48 border border-gold/40 -z-10`}
              />
              <div
                className={`absolute -top-6 ${isRTL ? '-right-6' : '-left-6'} w-24 h-24 bg-gold/10 -z-10`}
              />
            </div>
          </div>

          {/* Text side */}
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
              className="text-charcoal mb-8"
              style={{
                fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Cormorant Garamond, serif',
                fontWeight: isRTL ? 600 : 400,
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                lineHeight: isRTL ? 1.4 : 1.15,
              }}
            >
              {t.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.headline.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>

            <div
              className="text-muted-foreground leading-relaxed space-y-4"
              style={{
                fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif',
                fontSize: '0.9375rem',
                lineHeight: isRTL ? 2 : 1.85,
              }}
            >
              {t.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
