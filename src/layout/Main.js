import React from 'react';
import PropTypes from 'prop-types';
import HeadNextSeo from 'components/Layout/HeadSeo';

export default function MainLayout({ children, seo, linkTo }) {
  return (
    <>
      <HeadNextSeo linkTo={linkTo} seo={seo} />
      <div>{children}</div>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
  seo: PropTypes.object,
  linkTo: PropTypes.string,
};
