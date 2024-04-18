interface cardProps {
  id: number;
  heading: string;
  subHeading: string;
}
interface productPageProps {
  data: {
    title: string;
    description: string;
    id: number;
    component: string;
    card: cardProps;
  };
}

const ProductSection = ({ data }: Readonly<productPageProps>) => {
  const { title, description } = data;
  console.log(data);
  return (
    <div className="bg-[#2B292A]">
      <div className="text-center pt-[100px]">
        <h2 className="text-[48px] text-[#fff] font-semibold">{title}</h2>
        <p className="text-[#fff] text-[24px] max-w-[740px] mx-auto  mt-[32px]">
          {description}
        </p>
      </div>
      <div className="flex-1">
        <section className="container px-4 py-4 mx-auto md:px-6 lg:py-20">
          {/* <div className="grid gap-12 md:grid-cols-3">
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
        </div> */}
        </section>
      </div>
    </div>
  );
};

export default ProductSection;
