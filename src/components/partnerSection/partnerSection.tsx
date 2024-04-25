import Link from "next/link";
import StrapiImage from "../strapiImage/strapiImage";
import { imgProps, partnersProps } from "@/lib/types";

const PartnerSection = ({ data }: partnersProps) => {
  const { title, heading, image, link } = data;
  return (
    <section className="header">
      <div className="md:text-center text-left m-auto py-[100px]">
        <h2 className="md:text-[48px] text-[24px]  text-[#2B292A] font-semibold flex items-center md:justify-center md:mb-12 mb-2 md:px-0 px-4">
          {title}
        </h2>
        <div className="container flex items-center justify-between flex-wrap md:gap-0 gap-[28px]">
          {image.data.map((img) => (
            <StrapiImage
              src={img.url}
              alt={"image"}
              height={120}
              width={120}
              key={img.id}
            />
          ))}
        </div>
        <div className="bg-[#2B292A] md:py-[85px] py-[42px] container md:rounded-[45px] mt-[100px] ">
          <p className="text-[#fff] md:text-[64px] text-[32px] font-semibold max-w-[670px] m-auto text-center ">
            {heading}
          </p>
          <div className="md:mt-[50px] mt-[32px] flex justify-center">
            <Link
              href={link.url}
              className="bg-[#067DF9] text-white capitalize py-[16px] px-[32px] rounded-[16px]"
            >
              {link.placeholder}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
