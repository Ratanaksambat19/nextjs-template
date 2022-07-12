import React from 'react';

export default function Home() {
  return <div className="text-2xl text-green-600 text-center">Hello world</div>;
}

export async function getStaticProps() {
  const homeSeo = {
    title: 'home page',
    description: 'hello this is homepage',
    images: '',
  };
  return {
    props: {
      seo: homeSeo,
      linkTo: '/',
    },
  };
}
