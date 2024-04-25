import { FeatureProps } from "@/lib/types";
import { getIcon } from "./getIcons";
import { WhyUs } from "@/assets/Svgs/svgs";

const FeatureSection = ({ data }: Readonly<FeatureProps>) => {
  const { Feature, title, description } = data;
  return (
    <div className="">
      <div className="md:text-center max-w-[600px] md:m-auto md:pt-[100px] pt-[58px] md:py-0 px-4">
        <h2 className="md:text-[48px] text-[24px] text-[#2B292A] font-semibold flex items-center md:justify-center md:mb-6 mb-2">
          {title}
          <WhyUs />
        </h2>
        <p className="text-[#555455] md:text-[24px] text-[14px]">
          {description}
        </p>
      </div>
      <div className="flex-1">
        <section className="container px-4 py-4 mx-auto md:px-6 lg:py-20">
          <div className="grid gap-12 md:grid-cols-3 grid-cols-2">
            {Feature.map((feature: any) => (
              <div className="flex flex-col items-start text-center">
                {getIcon(feature.icon)}
                <h2 className="mb-[12px] md:text-[20px] text-[16px] font-semibold text-[#807F7F] text-left">
                  {feature.heading}
                </h2>
                <p className="text-[#807F7F] text-start md:text-[16px] text-[12px]">
                  {feature.subHading}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeatureSection;
