export type TestimonialItemType = {
  author: {
    name: string;
    avatar: string;
    position: string;
    company: string;
  };
  headline: string;
  quote: string;
};

export type ProblemItemType = {
  icon: string;
  title: string;
  desc: string;
};

export type FeatureItemType = {
  icon: string;
  title: string;
  desc: string;
  image: string;
};

export type LinkType = {
  label: string;
  url: string;
};

export type PricingItemType = {
  type: string;
  price: number | string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export type FaqItemType = {
  question: string;
  answer: string;
};
