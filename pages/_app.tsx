import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ym, { YMInitializer } from 'react-yandex-metrika';

export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
  router.events?.on('routeChangeComplete', (url: string) => {
    if(typeof window !== 'undefined') {
      ym('hint', url);
    }
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{webvisor: true, defer: true}}
        version='2'
      />
      <Component {...pageProps} />
    </>
  );
}
