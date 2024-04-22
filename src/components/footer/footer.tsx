import Link from "next/link";
import StrapiImage from "../strapiImage/strapiImage";

interface logoProps {
  id: number;
  url: string;
  name: string;
}
interface navigationLinkProps {
  id: number;
  title: string;
  url: string;
}
interface linksProps {
  id: number;
  title: string;
  navigationLink: navigationLinkProps[];
}

interface footerProps {
  data: {
    id: number;
    component: string;
    logo: {
      data: logoProps[];
    };
    links: linksProps[];
    copyRightText: string;
    navigationLink: navigationLinkProps[];
  };
}

const Footer = ({ data }: Readonly<footerProps>) => {
  const { id, logo, links, copyRightText } = data;
  return (
    <footer className="bg-[#067DF9] text-[#fff] px-4 py-4 mx-auto md:px-6 lg:py-14">
      <div className="container ">
        <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-[80px]">
          <div>
            {logo.data.map((logo) => (
              <StrapiImage
                src={logo.url}
                alt={logo.name}
                height={60}
                width={175}
                className="brightness-0	invert"
                key={logo.id}
              />
            ))}
          </div>
          <div className="flex gap-[48px]">
            {links.map((link) => (
              <div key={link.id}>
                <p className="text-[20px] font-semibold mb-6">{link.title}</p>
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
