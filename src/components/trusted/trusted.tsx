import { imgProps, logosProps, trustedSectionProps } from "@/lib/types";
import StrapiImage from "../strapiImage/strapiImage";

const Trusted = ({ data }: trustedSectionProps) => {
  const { title, image, logos } = data;
  return (
    <section className="relative md:h-[1300px] h-[1100px]">
      <div className="text-center m-auto">
        <div className=" flex items-center justify-between ">
          {image.data.map((img) => (
            <StrapiImage
              src={img.url}
              alt={"image"}
              height={120}
              width={120}
              key={img.id}
              className="w-full"
            />
          ))}
        </div>
        <div className=" absolute md:top-[654px] top-[290px] left-0 w-full z-1">
          <div className="bg-white md:py-[80px] py-0 rounded-t-[48px]">
            <h2 className="md:text-[48px] text-[24px] text-[#2B292A] font-semibold flex items-center justify-center mb-12">
              {title}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 md:grid-rows-3 md:gap-4 gap-2 container bg-white">
              {logos.data.map((logo) => (
                <div key={logo.id} className="flex items-center justify-center">
                  <StrapiImage
                    src={logo.url}
                    height={100}
                    width={100}
                    alt={"logo"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
