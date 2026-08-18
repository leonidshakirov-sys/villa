import { getJsonLd } from "@/lib/schema";

export function JsonLd() {
  const data = getJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
