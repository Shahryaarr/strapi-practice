import {
  Cart,
  Certified,
  Email,
  Fee,
  Overhead,
  Secure,
  Setup,
  Social,
  Unlimited,
  WhyUs,
} from "../../assets/Svgs/svgs";

export const getIcon = (name: string) => {
  switch (name) {
    case "SOCIAL_ICON":
      return <Social className="w-12 h-12 mb-4 text-gray-900" />;
    case "OVERHEAD_ICON":
      return <Overhead className="w-12 h-12 mb-4 text-gray-900" />;
    case "SETUP_ICON":
      return <Setup className="w-12 h-12 mb-4 text-gray-900" />;
    case "EMAIL_ICON":
      return <Email className="w-12 h-12 mb-4 text-gray-900" />;
    case "SECURE_ICON":
      return <Secure className="w-12 h-12 mb-4 text-gray-900" />;
    case "CERTIFIED_ICON":
      return <Certified className="w-12 h-12 mb-4 text-gray-900" />;
    case "UNLIMITED_ICON":
      return <Unlimited className="w-12 h-12 mb-4 text-gray-900" />;
    case "CART_ICON":
      return <Cart className="w-12 h-12 mb-4 text-gray-900" />;
    case "FEE_ICON":
      return <Fee className="w-12 h-12 mb-4 text-gray-900" />;

    default:
      return null;
  }
};
