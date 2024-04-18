interface socialLinksProps {
  id: number;
  url: string;
  placeholder: string;
  isExternal: boolean;
}

interface footerProps {
  data: {
    id: number;
    component: string;
    text: string;
    socialLinks: socialLinksProps[];
    logoText: socialLinksProps;
  };
}

const Footer = ({ data }: Readonly<footerProps>) => {
  console.log(data, "footerPropsfooterProps");
  const { id, socialLinks, logoText, text } = data;
  return (
    <footer>
      <p>{text}</p>
      <div>
        {socialLinks.map((link) => (
          <p>{link.url}</p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
