"use client";

import { useCallback, useEffect, useRef } from "react";
import { Photo } from "@/components/Photo";
import { track } from "@/lib/analytics";

export type LightboxItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  available: boolean;
  label?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const pointerStart = useRef<number | null>(null);

  const go = useCallback(
    (direction: 1 | -1) => {
      if (index === null || items.length === 0) return;
      const next = (index + direction + items.length) % items.length;
      onIndexChange(next);
      track(direction === 1 ? "gallery_next" : "gallery_previous");
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (index === null) return;

    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previous?.focus?.();
    };
  }, [go, index, onClose]);

  if (index === null) return null;

  const item = items[index];
  if (!item) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр фотографий"
      onClick={onClose}
    >
      <div
        className="lightbox-inner"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) return;
          const delta = event.clientX - pointerStart.current;
          pointerStart.current = null;
          if (delta > 50) go(-1);
          if (delta < -50) go(1);
        }}
      >
        <div className="lightbox-toolbar">
          <p className="lightbox-counter" aria-live="polite">
            {index + 1} / {items.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="Закрыть галерею"
          >
            Закрыть
          </button>
        </div>

        <div className="lightbox-stage">
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={() => go(-1)}
            aria-label="Предыдущее фото"
          >
            ‹
          </button>
          <Photo
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            available={item.available}
            label={item.label}
            sizes="100vw"
            className="lightbox-image"
          />
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={() => go(1)}
            aria-label="Следующее фото"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
