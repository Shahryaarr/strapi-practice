"use client";
import Link from "next/link";
import StrapiImage from "../strapiImage/strapiImage";
import { headerProps } from "@/lib/types";
import menuIcon from "../../assets/Svgs/menuIcon.svg";
import Image from "next/image";
import { useState } from "react";

const Header = ({ data }: Readonly<headerProps>) => {
  const { image, link, button } = data;
  console.log(typeof image);

  const [showItem, setShowItem] = useState<boolean>(false);
  return (
    <header className=" bg-white border-b-[#EAEAEA] border-b">
      <div className="flex justify-between items-center p-[16px] customeContainer">
        <StrapiImage src={image.url} alt={"logo Img"} height={60} width={175} />
        <div className="md:flex items-center hidden">
          {link.map((link) => (
            <Link
              className="px-6 py-3 font-medium text-[#2B292A] text-[14px] capitalize block"
              href={link.url}
            >
              {link.placeholder}
            </Link>
          ))}
          <button className="rounded-[16px] bg-[#067DF9] px-[16px] py-[12px] text-[#fff] capitalize">
            {button.btnText}
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setShowItem(!showItem)}>
            <Image src={menuIcon} alt="menuIcon" />
          </button>

          <div className="relative rounded-lg">
            {showItem && (
              <div className="absolute right-0">
                {link.map((link) => (
                  <Link
                    className="px-4 py-2 whitespace-nowrap  font-medium bg-white text-[#2B292A] text-[14px] capitalize block"
                    href={link.url}
                  >
                    {link.placeholder}
                  </Link>
                ))}
                <button className="rounded-[16px] whitespace-nowrap bg-[#067DF9] px-[16px] py-[12px] text-[#fff] capitalize">
                  {button.btnText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
