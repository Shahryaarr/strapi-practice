import { FeatureProps } from "@/lib/types";
import { getIcon } from "./getIcons";
import { WhyUs } from "@/assets/Svgs/svgs";

const FeatureSection = ({ data }: Readonly<FeatureProps>) => {
  const { Feature, title, description } = data;
  return (
    <div className="">
      <div className="text-center max-w-[600px] m-auto pt-[100px]">
        <h2 className="text-[48px] text-[#2B292A] font-semibold flex items-center justify-center mb-6">
          {title}
          <WhyUs />
        </h2>
        <p className="text-[#555455] text-[24px]">{description}</p>
      </div>
      <div className="flex-1">
        <section className="container px-4 py-4 mx-auto md:px-6 lg:py-20">
          <div className="grid gap-12 md:grid-cols-3">
            {Feature.map((feature: any) => (
              <div className="flex flex-col items-start text-center">
                {getIcon(feature.icon)}
                <h2 className="mb-[12px] text-[20px] font-semibold text-[#807F7F]">
                  {feature.heading}
                </h2>
                <p className="text-[#807F7F] text-start text-[16px]">
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
