export type logosProps = {
  id: number;
  url: string;
  name?: string;
};
export type btnProps = logosProps & {
  btnText: string;
};

export type imgProps = logosProps & {
  alternativeText: string;
};

export type trustedSectionProps = {
  data: {
    __component: string;
    id: number;
    title: string;
    image: {
      data: imgProps[];
    };
    logos: {
      data: logosProps[];
    };
  };
};

export type strapiImgProps = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
};

export type cardProps = {
  id: number;
  title: string;
  subTitle: string;
  image: imgProps;
  button: btnProps;
};

export type productPageProps = {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    product: cardProps[];
  };
};

export type linkProps = {
  url: string;
  placeholder: string;
};

export type partnersProps = {
  data: {
    id: number;
    __component: string;
    title: string;
    heading: string;
    link: linkProps;
    image: {
      data: imgProps[];
    };
  };
};

export type LinkProps = {
  id: number;
  url: string;
  placeholder: string;
  isExternal: boolean;
};
export type HeroSectionProps = {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: imgProps;
    link: LinkProps;
  };
};

export type headerProps = {
  data: {
    id: number;
    component: string;
    link: linkProps[];
    image: imgProps;
    button: btnProps;
  };
};

export type navigationLinkProps = {
  id: number;
  title: string;
  url: string;
};
export type linksProps = {
  id: number;
  title: string;
  navigationLink: navigationLinkProps[];
};

export type footerProps = {
  data: {
    id: number;
    component: string;
    logo: {
      data: logosProps[];
    };
    links: linksProps[];
    copyRightText: string;
    navigationLink: navigationLinkProps[];
  };
};

export type featureProps = {
  id: number;
  heading: string;
  subHading: string;
  icon: string;
};

export type FeatureProps = {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    Feature: featureProps[];
  };
};
