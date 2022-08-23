import React from 'react';
import { Seo } from 'types/interface/seo';

export default function Home() {
  return <div className="text-2xl text-green-600 text-center">Hello world</div>;
}

export async function getStaticProps() {
  const homeSeo: Seo = {
    title: 'home page',
    description: 'hello this is homepage',
    images: [],
    faq: [],
  };
  return {
    props: {
      seo: homeSeo,
      linkTo: '/',
    },
  };
}
