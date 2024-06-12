import '@/styles/globals.css'
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../i18n';


export const metadata = {
  title: 'Inharmónia',
  description: 'Band page for punks'
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = ['Home'];


export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <body>
       <Navbar/>
       {children}
      <Footer/>
      </body>
      </TranslationsProvider>
    </html>
  );
}