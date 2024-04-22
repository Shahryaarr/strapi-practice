import Link from "next/link";
import StrapiImage from "../strapiImage/strapiImage";
import { imgProps, partnersProps } from "@/lib/types";

const PartnerSection = ({ data }: partnersProps) => {
  const { title, heading, image, link } = data;
  return (
    <section className="header">
      <div className="text-center m-auto py-[100px]">
        <h2 className="text-[48px] text-[#2B292A] font-semibold flex items-center justify-center mb-12">
          {title}
        </h2>
        <div className="container flex items-center justify-between">
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
        <div className="bg-[#2B292A] py-[85px] container rounded-[45px] mt-[100px]">
          <p className="text-[#fff] text-[64px] font-semibold max-w-[670px] m-auto">
            {heading}
          </p>
          <div className="mt-[50px]">
            <Link
              href={link.url}
              className="bg-[#067DF9] text-white capitalize py-[16px] px-[32px] rounded-[16px]">
              {link.placeholder}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
