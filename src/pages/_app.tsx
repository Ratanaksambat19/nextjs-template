import React from 'react';
import MainLayout from 'layout/Main';
import 'styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const appElem = (
    <MainLayout seo={pageProps.seo} linkTo={pageProps.linkTo}>
      <Component {...pageProps} />
    </MainLayout>
  );

  return appElem;
}

export default MyApp;
