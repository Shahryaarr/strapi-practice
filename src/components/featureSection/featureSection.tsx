import { CheckIcon, ClockIcon, CloudIcon } from "../../assets/Svgs/svgs";

interface featureProps {
  id: number;
  heading: string;
  subHading: string;
  icon: string;
}

interface FeatureProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    Feature: featureProps[];
  };
}

const getIcon = (name: string) => {
  switch (name) {
    case "CLOCK_ICON":
      return <ClockIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "CLOUD_ICON":
      return <CloudIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "CHECK_ICON":
      return <CheckIcon className="w-12 h-12 mb-4 text-gray-900" />;
    default:
      return null;
  }
};

const FeatureSection = ({ data }: { readonly data: FeatureProps }) => {
  const { Feature } = data;
  return (
    <div className="">
      <div className="flex-1">
        <section className="container px-4 py-6 mx-auto md:px-6 lg:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {Feature.map((feature: any) => (
              <div className="flex flex-col items-center text-center">
                {getIcon(feature.icon)}
                <h2 className="mb-4 text-2xl font-bold">{feature.heading}</h2>
                <p className="text-gray-500">{feature.subHading}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeatureSection;
