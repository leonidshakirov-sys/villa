import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  available: boolean;
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fill?: boolean;
};

export function Photo({
  src,
  alt,
  width,
  height,
  available,
  label,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  fill = false,
}: PhotoProps) {
  if (!available) {
    return (
      <div
        className={`photo-placeholder ${className}`.trim()}
        role="img"
        aria-label={alt}
        style={fill ? undefined : { aspectRatio: `${width} / ${height}` }}
      >
        <span className="photo-placeholder-label">{label ?? "Фотография появится здесь"}</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        className={`${className} ${height > width ? "is-portrait" : "is-landscape"}`.trim()}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <Image
      className={`${className} ${height > width ? "is-portrait" : "is-landscape"}`.trim()}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
    />
  );
}
