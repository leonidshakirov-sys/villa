"use client";

import { useState } from "react";
import { isImageReady, property } from "@/config/property";
import { Lightbox } from "@/components/Lightbox";
import { Photo } from "@/components/Photo";

export function Nearby() {
  const [index, setIndex] = useState<number | null>(null);
  const photos = property.locationImages;

  return (
    <section className="section nearby" id="nearby">
      <div className="container nearby-grid">
        <div>
          <p className="eyebrow">Рядом</p>
          <h2>Загородная жизнь без отрыва от инфраструктуры</h2>
          <div className="prose">
            <p>
              Одно из сильных преимуществ расположения дома — возможность жить в
              спокойной деревне и при этом пользоваться привычной инфраструктурой.
            </p>
            <p>Рядом находятся:</p>
            <ul className="plain-list">
              {property.nearby.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Не нужно ежедневно ехать десятки километров ради самых обычных
              бытовых задач. Для семьи с детьми это особенно важно.
            </p>
          </div>
        </div>
        <div className="nearby-photos">
          {photos.map((image, imageIndex) => (
            <button
              key={image.id}
              type="button"
              className="nearby-photo"
              onClick={() => setIndex(imageIndex)}
              aria-label={`Открыть фото: ${image.alt}`}
            >
              <Photo
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                available={isImageReady(image)}
                label={image.categoryLabel}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </button>
          ))}
        </div>
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
