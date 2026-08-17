import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site ?? "https://zhitnevo-house.ru").href;
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: Yandex",
    "Allow: /",
    "",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    `Sitemap: ${sitemap}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
