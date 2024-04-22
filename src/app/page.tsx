import FeatureSection from "@/components/featureSection/featureSection";
import HeroSection from "@/components/heroSection/heroSection";
import PartnerSection from "@/components/partnerSection/partnerSection";
import ProductSection from "@/components/productSection/productSection";
import Trusted from "@/components/trusted/trusted";
import { getGlobalPageData, getHomePageData } from "@/http/http";

const blockRenderer = (block: any) => {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.features-section":
      return <FeatureSection key={block.id} data={block} />;
    case "layout.product-section":
      return <ProductSection key={block.id} data={block} />;
    case "layout.partner-section":
      return <PartnerSection key={block.id} data={block} />;
    case "layout.trusted-section":
      return <Trusted key={block.id} data={block} />;
    default:
      null;
  }
};

export default async function Home() {
  const strapiData = await getHomePageData();
  const globalData = await getGlobalPageData();
  console.log(globalData);
  const { blocks } = strapiData;
  if (!blocks) return <p>No section Found!</p>;
  return <main>{blocks.map(blockRenderer)}</main>;
}
