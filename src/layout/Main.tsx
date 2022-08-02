import React, { PropsWithChildren } from 'react';
import HeadNextSeo from 'components/Layout/HeadSeo';
import { seo } from 'types/interface/seo';

export default function MainLayout({
  children,
  seo,
  linkTo,
}: PropsWithChildren<{ seo: seo; linkTo: string }>) {
  return (
    <>
      <HeadNextSeo linkTo={linkTo} seo={seo} />
      <div>{children}</div>
    </>
  );
}
