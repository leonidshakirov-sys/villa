import {
  getAvailableImages,
  getWhatsAppUrl,
  property,
} from "@/config/property";
import { formatNumber } from "@/lib/format";

export function getJsonLd() {
  const url = property.siteUrl;
  const images = getAvailableImages().map((image) => `${url}${image.src}`);
  const houseId = `${url}/#house`;

  const house: Record<string, unknown> = {
    "@type": "House",
    "@id": houseId,
    name: property.title,
    description: property.seo.description,
    url,
    numberOfFloors: property.floors,
    yearBuilt: String(property.yearBuilt),
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.area,
      unitCode: "MTK",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
      addressRegion: "Московская область",
      addressLocality: "деревня Житнево",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Центральные коммуникации",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Гараж",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Помещение под сауну",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Теплый пол",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Сигнализация",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wi-Fi",
        value: true,
      },
    ],
  };

  if (images.length > 0) {
    house.image = images;
  }

  const offer: Record<string, unknown> = {
    "@type": "Offer",
    "@id": `${url}/#offer`,
    url,
    availability: "https://schema.org/InStock",
    itemOffered: { "@id": houseId },
    seller: {
      "@type": "Person",
      name: property.ownerName,
      telephone: `+${property.phoneRaw}`,
      url: getWhatsAppUrl(),
    },
  };

  if (property.price !== null) {
    offer.price = property.price;
    offer.priceCurrency = property.currency;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: property.seo.title,
        description: property.seo.description,
        inLanguage: "ru-RU",
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": houseId },
        primaryImageOfPage: images[0],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: property.title,
        inLanguage: "ru-RU",
      },
      {
        "@type": "RealEstateListing",
        "@id": `${url}/#listing`,
        name: `${property.title} — ${formatNumber(property.area)} м²`,
        description: property.seo.description,
        url,
        inLanguage: "ru-RU",
        image: images.length > 0 ? images : undefined,
        about: { "@id": houseId },
        offers: { "@id": `${url}/#offer` },
      },
      house,
      offer,
    ],
  };
}
