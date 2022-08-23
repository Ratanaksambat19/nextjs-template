import React, { PropsWithChildren } from 'react';
import HeadNextSeo from 'components/Layout/HeadSeo';
import { Seo } from 'types/interface/seo';

export default function MainLayout({
  children,
  seo,
  linkTo,
}: PropsWithChildren<{ seo: Seo; linkTo: string }>) {
  return (
    <>
      <HeadNextSeo linkTo={linkTo} seo={seo} />
      <div>{children}</div>
    </>
  );
}
