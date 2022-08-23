import React from 'react';
import Head from 'next/head';
import { FAQPageJsonLd, NextSeo } from 'next-seo';
import { getDomain } from 'util/dev';
import { Seo } from 'types/interface/seo';
import { AppLink } from 'constants/appLink';
import { asFaq, faqDefault } from 'util/seoFormat';

export default function HeadNextSeo({
  linkTo,
  seo,
}: {
  linkTo: string;
  seo: Seo;
}) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon/favicon.ico"
        />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title={seo?.title}
        description={
          seo?.description !== ''
            ? seo?.description
            : 'A short description goes here.'
        }
        canonical={`${getDomain()}${linkTo}`}
        openGraph={{
          url: `${getDomain()}${linkTo}`,
          title: seo?.title,
          description:
            seo?.description !== ''
              ? seo?.description
              : 'A short description goes here.',
          images: [
            {
              url:
                seo?.default && seo.images.length !== 0
                  ? AppLink.urlLink + seo?.images[0]?.url
                  : AppLink.cmsLink + seo?.images[0]?.url,
              alt: seo?.title,
            },
          ],
          site_name: 'Holaplay',
          type: 'website',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <FAQPageJsonLd
        mainEntity={seo?.faq?.length > 0 ? asFaq(seo?.faq) : faqDefault}
      />
    </div>
  );
}
