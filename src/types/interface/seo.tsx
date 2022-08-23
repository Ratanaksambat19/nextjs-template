export interface Seo {
  title: string;
  description: string;
  images: Image[];
  linkTo?: string;
  default?: boolean;
  faq: Faq[];
}

export type Image = {
  url: string;
  alt: string;
};

export type Faq = {
  questionName: string;
  acceptedAnswerText: string;
};
