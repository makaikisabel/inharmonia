
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Albums from '@/components/Albums';
import Gallery from '@/components/Gallery';
import Merch from '@/components/Merch';


const i18nNamespaces = ['Home'];


export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

 
  

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>     
        <Hero/> 
        <AboutUs/>
        <Albums/>
        <Gallery/>
        <Merch/>
      
      </main>
    </TranslationsProvider>
  );
}