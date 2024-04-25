import { productPageProps } from "@/lib/types";
import Link from "next/link";
import StrapiImage from "../strapiImage/strapiImage";

const ProductSection = ({ data }: productPageProps) => {
  const { title, description, product } = data;
  return (
    <div className="bg-[#2B292A]">
      <div className="md:text-center pt-[100px] md:px-0 px-4">
        <h2 className="md:text-[48px] text-[24px] text-[#fff] font-semibold">
          {title}
        </h2>
        <p className="text-[#fff] md:text-[24px] text-[14px] max-w-[740px] mx-auto  md:mt-[32px] mt-[16px]">
          {description}
        </p>
      </div>
      <div className="flex-1">
        <section className="container px-4 py-4 mx-auto md:px-6 lg:py-20">
          <div className="grid gap-12 md:grid-cols-3">
            {product.map((data) => (
              <div
                className="flex flex-col items-start text-center bg-[#067DF9] rounded-[48px] py-[28px] md:py-[40px] px-[32px]"
                key={data.id}
              >
                <div className="w-full flex justify-center">
                  <StrapiImage
                    src={data.image.url}
                    alt={""}
                    height={240}
                    width={320}
                  />
                </div>
                <h2 className="md:mb-[24px] mb-[14px] md:text-[20px] text-[18px] font-semibold text-[#fff] md:mt-[32px] mt-[20px]">
                  {data.title}
                </h2>
                <p className="text-[#fff] text-start md:text-[16px] text-[14px] md:mb-[32px] mb-[20px]">
                  {data.subTitle}
                </p>
                <Link
                  href={data.button.url}
                  className="bg-[#2B292A] rounded-[16px] capitalize py-[14px] px-[26px] text-[16px] text-[#fff]"
                >
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
