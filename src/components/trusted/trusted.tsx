import StrapiImage from "../strapiImage/strapiImage";

type imgProps = {
  id: number;
  url: string;
  alternativeText: string;
};

type logosProps = {
  id: number;
  url: string;
};

type trustedSectionProps = {
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

const Trusted = ({ data }: trustedSectionProps) => {
  const { title, image, logos } = data;
  console.log(data, "trusted data");
  return (
    <section className="relative">
      <div className="text-center m-auto">
        <div className=" flex items-center justify-between absolut top-0 left-0 w-full h-full z-[-1]">
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
        <div className=" py-[80px]  rounded-t-[48px]">
          <div className="bg-white">
            <h2 className="text-[48px] text-[#2B292A] font-semibold flex items-center justify-center mb-12">
              {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-3 gap-4 container bg-white">
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
