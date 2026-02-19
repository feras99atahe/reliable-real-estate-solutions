import { Lang, content } from '@/lib/content';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const t = content[lang].hero;
  const isRTL = lang === 'ar';

  return (
    <section
      className="relative min-h-screen flex items-end pb-24 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="ASIRDAH Real Estate Development"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, hsla(220,10%,8%,0.92) 0%, hsla(220,10%,8%,0.65) 50%, hsla(220,10%,8%,0.30) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold opacity-80" />
            <span
              className="text-gold text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
            >
              {t.tagline}
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-white mb-8 leading-tight"
            style={{
              fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Cormorant Garamond, serif',
              fontWeight: isRTL ? 500 : 400,
              fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
              lineHeight: isRTL ? 1.4 : 1.1,
              letterSpacing: isRTL ? '0' : '-0.01em',
            }}
          >
            {t.headline.split('\n').map((line, i) => (
              <span key={i}>
                {i === 0 ? line : <><br /><span className="text-gold">{line}</span></>}
              </span>
            ))}
          </h1>

          {/* Sub */}
          <p
            className="text-white/65 mb-12 max-w-xl leading-relaxed"
            style={{
              fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: 1.8,
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 shadow-gold"
              style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
            >
              {t.cta}
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-gold/60 text-white hover:text-gold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{ fontFamily: isRTL ? 'Noto Sans Arabic, sans-serif' : 'Inter, sans-serif' }}
            >
              {t.cta2}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-0 ${isRTL ? 'left-12' : 'right-12'} hidden md:flex flex-col items-center gap-2`}>
          <div className="text-white/30 text-[10px] tracking-[0.3em] uppercase writing-mode-vertical" style={{ writingMode: 'vertical-lr' }}>
            Scroll
          </div>
          <div className="h-16 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
