import Link from "next/link";
import StrapiImage from "../strapiImage/strapiImage";
import { headerProps } from "@/lib/types";

const Header = ({ data }: Readonly<headerProps>) => {
  const { image, link, button } = data;
  console.log(typeof image);
  return (
    <header className=" bg-white border-b-[#EAEAEA] border-b">
      <div className="flex justify-between items-center p-[16px] customeContainer">
        <StrapiImage src={image.url} alt={"logo Img"} height={60} width={175} />
        <div className="flex items-center">
          {link.map((link) => (
            <Link
              className="px-6 py-3 font-medium text-[#2B292A] text-[14px] capitalize block"
              href={link.url}>
              {link.placeholder}
            </Link>
          ))}
          <button className="rounded-[16px] bg-[#067DF9] px-[16px] py-[12px] text-[#fff] capitalize">
            {button.btnText}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
