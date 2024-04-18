"use client";

import Link from "next/link";
import { FC } from "react";
import StrapiImage from "../strapiImage/strapiImage";
// import { Image } from "next/image";
interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}
interface LinkProps {
  id: number;
  url: string;
  placeholder: string;
  isExternal: boolean;
}
interface HeroSectionProps {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: ImageProps;
    link: LinkProps;
  };
}

const HeroSection = ({ data }: Readonly<HeroSectionProps>) => {
  const { heading, subHeading, image, link } = data;

  return (
    <header className="h-[890px] overflow-hidden header">
      <div className="flex items-center justify-between h-full text-white customeContainer gap-[70px]">
        <div className="max-w-[600px]">
          <h1 className="text-[100px] leading-[1.2] font-bold  text-black">
            {heading}
          </h1>
          <p className="mt-4 text-[18px] text-[#555455] max-w-[540px]">
            {subHeading}
          </p>
          <Link
            className="text-[#067DF9] font-medium mt-8 block w-fit"
            href={link.url}>
            {link.placeholder}
          </Link>
        </div>
        <div>
          <StrapiImage
            src={image.url}
            alt={image.alternativeText}
            height={1080}
            width={1920}
            className="object-cover h-full"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
