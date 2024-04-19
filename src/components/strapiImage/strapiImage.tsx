import { getStrapiMedia, getStrapiURL } from "@/lib/utils";
import Image from "next/image";
interface StrapiImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

const StrapiImage = ({
  src,
  alt,
  height,
  width,
  className,
}: Readonly<StrapiImageProps>) => {
  const ImageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;
  if (!src) return null;
  return (
    <>
      <Image
        src={ImageUrl ?? imageFallback}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </>
  );
};

export default StrapiImage;
