"use client";

import Link from "next/link";
import StrapiImage from "../strapiImage/strapiImage";
import { HeroSectionProps, imgProps } from "@/lib/types";

const HeroSection = ({ data }: Readonly<HeroSectionProps>) => {
  const { heading, subHeading, image, link } = data;

  return (
    <header className="h-[890px] overflow-hidden header">
      <div className="md:flex items-center justify-between h-full text-white customeContainer gap-[70px] flex-wrap md:flex-nowrap py-[24px] !px-6">
        <div className="max-w-[600px] mb-20 md:text-left text-center">
          <h1 className="text-[40px] md:text-[100px] leading-[1.2] font-bold  text-black ">
            {heading}
          </h1>
          <p className="mt-4 text-[18px] text-[#555455] max-w-[540px]">
            {subHeading}
          </p>
          <Link
            className="text-[#067DF9] font-medium mt-8 w-full  md:w-fit flex justify-center md:justify-left "
            href={link.url}
          >
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
