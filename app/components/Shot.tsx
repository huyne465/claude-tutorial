"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

type Props = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
};

/** Ảnh chụp màn hình claude.ai. Bấm vào để phóng to ngay trên trang, bấm lần nữa hoặc Esc để đóng. */
export function Shot({ src, alt, caption, className = "shot" }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <figure className={className}>
      <button
        type="button"
        className="shot-open"
        onClick={() => dialog.current?.showModal()}
        aria-label={`Phóng to ảnh: ${alt}`}
      >
        <Image src={src} alt="" sizes="(max-width: 640px) 100vw, 640px" placeholder="blur" />
      </button>
      {caption && <figcaption>{caption}</figcaption>}

      <dialog ref={dialog} className="shot-dialog" aria-label={alt} onClick={() => dialog.current?.close()}>
        <Image src={src} alt={alt} sizes="(max-width: 1280px) 100vw, 1280px" />
        <button type="button" className="shot-close">
          Đóng ✕
        </button>
      </dialog>
    </figure>
  );
}
