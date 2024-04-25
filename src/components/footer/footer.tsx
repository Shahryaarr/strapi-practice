import Link from "next/link";
import StrapiImage from "../strapiImage/strapiImage";
import { footerProps } from "@/lib/types";

const Footer = ({ data }: Readonly<footerProps>) => {
  const { id, logo, links, copyRightText } = data;
  return (
    <footer className="bg-[#067DF9] text-[#fff] px-4 py-4 mx-auto md:px-6 lg:py-14">
      <div className="container ">
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 md:mb-[80px] mb-[70px]">
          <div className="md:mt-0 mt-[40px]">
            {logo.data.map((logo) => (
              <StrapiImage
                src={logo.url}
                alt={"logo"}
                height={60}
                width={175}
                className="brightness-0	invert"
                key={logo.id}
              />
            ))}
          </div>
          <div className="flex md:flex-row flex-col md:gap-[48px] gap-[45px] md:mt-0 mt-[48px]">
            {links.map((link) => (
              <div key={link.id}>
                <p className="md:text-[20px] text-[18px] font-semibold mb-6">
                  {link.title}
                </p>
                <ul>
                  {link.navigationLink.map((data) => (
                    <li className="text-[16px] mb-5">
                      <Link href={data.url}>{data.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p>{copyRightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
