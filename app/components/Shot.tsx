import Image, { type StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
};

/** Ảnh chụp màn hình claude.ai. Bấm vào để mở bản lớn ở tab mới. */
export function Shot({ src, alt, caption, className = "shot" }: Props) {
  return (
    <figure className={className}>
      <a href={src.src} target="_blank" rel="noreferrer" aria-label={`${alt} (mở ảnh lớn)`}>
        <Image src={src} alt={alt} sizes="(max-width: 640px) 100vw, 640px" placeholder="blur" />
      </a>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
