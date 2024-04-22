import { strapiImgProps } from "@/lib/types";
import { getStrapiMedia, getStrapiURL } from "@/lib/utils";
import Image from "next/image";

const StrapiImage = ({
  src,
  alt,
  height,
  width,
  className,
}: strapiImgProps) => {
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
