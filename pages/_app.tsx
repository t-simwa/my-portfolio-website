import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import '@/styles/globals.css';
import '@/styles/themes.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'kenya';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <Layout>
      <Head title={`Ted Simwa | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
