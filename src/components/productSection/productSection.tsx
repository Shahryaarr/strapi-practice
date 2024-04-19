import Link from "next/link";
import StrapiImage from "../strapiImage/strapiImage";
import { Button } from "../ui/button";

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}
interface btnProps {
  id: number;
  btnText: string;
  url: string;
}
interface cardProps {
  id: number;
  title: string;
  subTitle: string;
  image: ImageProps;
  button: btnProps;
}

interface productPageProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    product: cardProps[];
  };
}

const ProductSection = ({ data }: Readonly<productPageProps>) => {
  const { title, description, product } = data;
  console.log(data);
  console.log(typeof product);
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
          <div className="grid gap-12 md:grid-cols-3">
            {product.map((data) => (
              <div
                className="flex flex-col items-start text-center bg-[#067DF9] rounded-[48px] py-[40px] px-[32px]"
                key={data.id}>
                <div className="w-full flex justify-center">
                  <StrapiImage
                    src={data.image.url}
                    alt={""}
                    height={240}
                    width={320}
                  />
                </div>
                <h2 className="mb-[24px] text-[20px] font-semibold text-[#fff] mt-[32px]">
                  {data.title}
                </h2>
                <p className="text-[#fff] text-start text-[16px] mb-[32px]">
                  {data.subTitle}
                </p>
                <Link
                  href={data.button.url}
                  className="bg-[#2B292A] rounded-[16px] capitalize py-[14px] px-[26px] text-[16px] text-[#fff]">
                  {data.button.btnText}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductSection;
