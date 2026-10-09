import Image, { type ImageProps } from "next/image";

export function GradedPhoto({ className = "", alt, ...props }: ImageProps) {
  return <Image alt={alt} {...props} className={className} />;
}
