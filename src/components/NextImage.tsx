import React from "react";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";

export default function NextImage({
  alt,
  layout,
  width,
  height,
  ...rest
}: ImageProps) {
  return (
    <Image
      loading="eager"
      layout={layout || "responsive"}
      width={width || 290}
      height={height || 330}
      alt={alt || "Image"}
      quality={100}
      {...rest}
    />
  );
}
