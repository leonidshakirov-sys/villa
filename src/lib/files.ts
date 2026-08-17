import { existsSync } from "node:fs";
import { resolve } from "node:path";

export function publicFileExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\//, "");
  return existsSync(resolve(process.cwd(), "public", relative));
}

export function resolvePictureSources(src: string): {
  exists: boolean;
  avif?: string;
  webp?: string;
  raster?: string;
} {
  if (!src) return { exists: false };

  const ext = src.includes(".") ? src.slice(src.lastIndexOf(".")) : "";
  const base = ext ? src.slice(0, -ext.length) : src;
  const avif = `${base}.avif`;
  const webp = ext === ".webp" ? src : `${base}.webp`;
  const jpg = `${base}.jpg`;
  const jpeg = `${base}.jpeg`;
  const png = `${base}.png`;

  const hasAvif = publicFileExists(avif);
  const hasWebp = publicFileExists(webp);
  const hasJpg = publicFileExists(jpg);
  const hasJpeg = publicFileExists(jpeg);
  const hasPng = publicFileExists(png);
  const hasExact = publicFileExists(src);

  const raster = hasExact
    ? src
    : hasJpg
      ? jpg
      : hasJpeg
        ? jpeg
        : hasPng
          ? png
          : hasWebp
            ? webp
            : undefined;

  return {
    exists: Boolean(raster || hasAvif || hasWebp),
    avif: hasAvif ? avif : undefined,
    webp: hasWebp ? webp : undefined,
    raster,
  };
}
