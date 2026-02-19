import { useState } from 'react';
import { Lang } from '@/lib/content';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Philosophy } from '@/components/Philosophy';
import { Services } from '@/components/Services';
import { Values } from '@/components/Values';
import { Presence } from '@/components/Presence';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <div className={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
      <Navbar lang={lang} onLangChange={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Philosophy lang={lang} />
        <Services lang={lang} />
        <Values lang={lang} />
        <Presence lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
