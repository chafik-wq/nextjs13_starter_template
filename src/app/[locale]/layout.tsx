import '@/styles/tailwind.css'

import { ReduxProvider } from '@/redux/provider';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react' 

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ar'}];
}

export default async function RootLayout({children, params: {locale}} : {children : ReactNode , params : {locale : string} }) {

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={['ar'].includes(locale) ? 'rtl' : 'ltr'}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ReduxProvider>        
            {children}        
        </ReduxProvider>
      </NextIntlClientProvider>
    </html>
  );
}