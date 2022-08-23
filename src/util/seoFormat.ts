import { Faq, Seo } from 'types/interface/seo';

export const asSeo = (obj: Seo) =>
  obj
    ? {
        ...obj,
      }
    : defaultSeo;

export const asFaq = (arr: Faq[]) =>
  arr.map((load) => ({
    questionName: load.questionName,
    acceptedAnswerText: load.acceptedAnswerText,
  }));

export const faqDefault = [
  {
    questionName: 'How long is the delivery time?',
    acceptedAnswerText: '3-5 business days.',
  },
  {
    questionName: 'Where can I find information about product recalls?',
    acceptedAnswerText: 'Read more on under information.',
  },
];

export const defaultSeo = {
  title: 'The Best & Trusted Online Casino in Philippines | JiliBet',
  linkTo: '/',
  description:
    'We are dedicated to our core values of creating the best and original games in pursuit of excellence and innovation. We design exciting online video slots and fishing games, staying ahead of the competition and releasing innovative games continually, backed by our strong and reputable technical expe...',
  images: [
    {
      url: '/assets/logo/logo.jpg',
      alt: 'jilibet',
    },
  ],
  default: true,
  faq: asFaq(faqDefault),
};
