import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'layout/Main';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  let appElem = (
    <Layout>
      <MainLayout seo={pageProps.seo} linkTo={pageProps.linkTo}>
        <Component {...pageProps} />
      </MainLayout>
    </Layout>
  );

  return appElem;
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default MyApp;
