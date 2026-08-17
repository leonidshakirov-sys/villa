import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3e4f3e",
          color: "#f6f2ea",
          fontSize: 36,
          fontWeight: 600,
        }}
      >
        Ж
      </div>
    ),
    size,
  );
}
