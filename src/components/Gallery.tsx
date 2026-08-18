"use client";

import { useState } from "react";
import { getAvailableImages, isImageReady } from "@/config/property";
import { Lightbox } from "@/components/Lightbox";
import { Photo } from "@/components/Photo";
import { track } from "@/lib/analytics";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const photos = getAvailableImages();
  const featured = photos.slice(0, 5);

  const open = (nextIndex: number) => {
    setIndex(nextIndex);
    track("open_gallery");
  };

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Фотографии</p>
          <h2>Дом в фотографиях</h2>
          <p className="section-lead">
            Посмотрите дом снаружи, участок, веранду и внутренние пространства.
            Все кадры — этого объекта.
          </p>
        </div>

        <div className="gallery-grid">
          {featured.map((image, imageIndex) => (
            <button
              key={image.id}
              type="button"
              className={`gallery-item ${imageIndex === 0 ? "is-main" : ""}`}
              onClick={() => open(imageIndex)}
              aria-label={`Открыть фото: ${image.alt}`}
            >
              <Photo
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                available={isImageReady(image)}
                label={image.categoryLabel}
                priority={imageIndex === 0}
                sizes={
                  imageIndex === 0
                    ? "(max-width: 900px) 100vw, 66vw"
                    : "(max-width: 900px) 70vw, 25vw"
                }
              />
            </button>
          ))}
        </div>

        <div className="gallery-mobile">
          {photos.map((image, imageIndex) => (
            <button
              key={image.id}
              type="button"
              className="gallery-swipe-item"
              onClick={() => open(imageIndex)}
              aria-label={`Открыть фото: ${image.alt}`}
            >
              <Photo
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                available={isImageReady(image)}
                label={image.categoryLabel}
                sizes="80vw"
              />
            </button>
          ))}
        </div>

        <button type="button" className="text-btn" onClick={() => open(0)}>
          Все фотографии
        </button>
      </div>

      <Lightbox
        items={photos.map((image) => ({
          src: image.src,
          alt: image.alt,
          width: image.width,
          height: image.height,
          available: isImageReady(image),
          label: image.categoryLabel,
        }))}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </section>
  );
}
