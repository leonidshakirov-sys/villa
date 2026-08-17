import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { property } from "@/config/property";
import { formatNumber, formatPrice } from "@/lib/format";

export const alt = "Дом в Житнево 281,5 м² — продажа от собственника";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const title = `Дом в Житнево — ${formatNumber(property.area)} м²`;
  const subtitle = `участок ${formatNumber(property.landArea)} сотки · 4 этажа · ${property.yearBuilt}`;
  const price =
    property.price !== null ? formatPrice(property.price) : "Продажа от собственника";

  const [serif, sans] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/CormorantGaramond-SemiBold.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/Manrope-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4efe6",
          color: "#1c1a16",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#3e4f3e",
            fontFamily: "Manrope",
          }}
        >
          <span>Продажа от собственника</span>
          <span>Житнево · Домодедово</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontFamily: "Cormorant",
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 28, color: "#5a544c", fontFamily: "Manrope" }}>
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "Manrope",
          }}
        >
          <div style={{ fontSize: 36, color: "#3e4f3e" }}>{price}</div>
          <div style={{ fontSize: 24, color: "#6f6860" }}>{property.phone}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: serif, weight: 600, style: "normal" },
        { name: "Manrope", data: sans, weight: 500, style: "normal" },
      ],
    },
  );
}
