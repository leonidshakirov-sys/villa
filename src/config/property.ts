/**
 * Единый источник данных о доме.
 * Меняйте площадь, адрес, цену, фото и контакты только здесь.
 */

export type ImageCategory =
  | "exterior"
  | "facade"
  | "yard"
  | "land"
  | "veranda"
  | "interior"
  | "rooms"
  | "stairs"
  | "floors"
  | "garage"
  | "sauna"
  | "surroundings";

export interface PropertyImage {
  src: string;
  alt: string;
  category: ImageCategory;
  width: number;
  height: number;
  hero?: boolean;
  finalCta?: boolean;
  og?: boolean;
}

export interface FloorPlan {
  floor: number;
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const categoryLabels: Record<ImageCategory, string> = {
  exterior: "Дом снаружи",
  facade: "Фасад",
  yard: "Территория",
  land: "Участок",
  veranda: "Веранда",
  interior: "Интерьер",
  rooms: "Комнаты",
  stairs: "Лестница",
  floors: "Этажи",
  garage: "Гараж",
  sauna: "Помещение сауны",
  surroundings: "Территория вокруг дома",
};

const whatsappMessage =
  "Здравствуйте, Леонид! Пишу по поводу дома в Житнево. Хотел бы узнать подробности.";

export const property = {
  ownerName: "Леонид",
  ownerRole: "собственник",
  phone: "+7 916 265-92-62",
  phoneRaw: "79162659262",

  title: "Дом в Житнево",
  h1: "Дом в Житнево — 281,5 м² на участке 11,86 соток",

  seoTitle: "Дом в Житнево 281,5 м² — купить дом от собственника",
  seoDescription:
    "Продается дом 281,5 м² на участке 11,86 соток в Житнево, Домодедово. 4 этажа, центральные коммуникации, гараж. 32 000 000 ₽, продажа от собственника.",

  area: 281.5,
  areaLabel: "281,5 м²",
  landArea: 11.86,
  landAreaLabel: "11,86 сотки",
  floors: 4,
  yearBuilt: 2021,
  houseFormat: "большой частный дом / дуплекс",
  walls: "пеноблок, кирпич, монолитные конструкции",
  wallsShort: "пеноблок / кирпич / монолит",
  communications: "центральные",
  hasGarage: true,
  hasSaunaRoom: true,
  garageNeedsFinishing: true,
  saunaNeedsFinishing: true,
  distanceToMkad: "около 35 км",
  driveTimeToMkad: "около 35–40 минут при нормальной дорожной ситуации",

  /**
   * Цена дома в рублях.
   * null — блок цены скрыт на сайте и не попадает в JSON-LD.
   * Укажите число, например 32000000, чтобы показать «32 000 000 ₽».
   */
  price: 32_000_000 as number | null,

  publicAddress:
    "деревня Житнево, Домодедовский городской округ, Московская область",
  fullAddress:
    "Московская область, Домодедовский городской округ, деревня Житнево, улица Колхозная, 8",
  showExactAddress: false,

  /**
   * Точка публичной карты — центр деревни Житнево, без номера дома.
   * lat / lon можно сдвинуть, если нужно точнее показать район.
   */
  map: {
    lat: 55.342268,
    lon: 37.9063855,
    zoom: 14,
  },

  whatsappMessage,
  whatsappBase: "https://wa.me/79162659262",

  images: [
    {
      src: "/images/house/house-exterior-01.webp",
      alt: "Дом в Житнево Домодедовского городского округа",
      category: "exterior",
      width: 1600,
      height: 1067,
      hero: true,
      finalCta: true,
      og: true,
    },
    {
      src: "/images/house/house-exterior-02.webp",
      alt: "Частный дом 281,5 м² в деревне Житнево",
      category: "exterior",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-facade-01.webp",
      alt: "Фасад 4-этажного дома в Житнево",
      category: "facade",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-facade-02.webp",
      alt: "Внешний вид дома в Житнево Московской области",
      category: "facade",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-yard-01.webp",
      alt: "Территория у дома в деревне Житнево",
      category: "yard",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-land-01.webp",
      alt: "Участок 11,86 сотки у дома в Житнево",
      category: "land",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-veranda-01.webp",
      alt: "Веранда дома 281,5 м² в Житнево",
      category: "veranda",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-interior-01.webp",
      alt: "Интерьер дома в Житнево Московской области",
      category: "interior",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-interior-02.webp",
      alt: "Внутреннее пространство дома в Житнево",
      category: "interior",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-room-01.webp",
      alt: "Комната в частном доме в деревне Житнево",
      category: "rooms",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-stairs-01.webp",
      alt: "Лестница в 4-этажном доме в Житнево",
      category: "stairs",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-floor-01.webp",
      alt: "Один из этажей дома в Житнево Домодедово",
      category: "floors",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-garage-01.webp",
      alt: "Гараж при доме в Житнево — требуется завершение работ",
      category: "garage",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-sauna-01.webp",
      alt: "Помещение под сауну в доме в Житнево",
      category: "sauna",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/house/house-surroundings-01.webp",
      alt: "Территория вокруг дома в деревне Житнево",
      category: "surroundings",
      width: 1600,
      height: 1067,
    },
  ] satisfies PropertyImage[],

  floorPlans: [
    {
      floor: 1,
      label: "1 этаж",
      src: "/images/plans/floor-1.webp",
      alt: "Планировка 1 этажа дома в Житнево",
      width: 1200,
      height: 900,
    },
    {
      floor: 2,
      label: "2 этаж",
      src: "/images/plans/floor-2.webp",
      alt: "Планировка 2 этажа дома в Житнево",
      width: 1200,
      height: 900,
    },
    {
      floor: 3,
      label: "3 этаж",
      src: "/images/plans/floor-3.webp",
      alt: "Планировка 3 этажа дома в Житнево",
      width: 1200,
      height: 900,
    },
    {
      floor: 4,
      label: "4 этаж",
      src: "/images/plans/floor-4.webp",
      alt: "Планировка 4 этажа дома в Житнево",
      width: 1200,
      height: 900,
    },
  ] satisfies FloorPlan[],
};

export function getWhatsAppUrl(): string {
  return `${property.whatsappBase}?text=${encodeURIComponent(property.whatsappMessage)}`;
}

export function getTelUrl(): string {
  return `tel:+${property.phoneRaw}`;
}

export function getDisplayAddress(): string {
  return property.showExactAddress ? property.fullAddress : property.publicAddress;
}

export function getHeroImage(): PropertyImage {
  return property.images.find((image) => image.hero) ?? property.images[0];
}

export function getFinalCtaImage(): PropertyImage {
  return property.images.find((image) => image.finalCta) ?? getHeroImage();
}

export function getOgImage(): PropertyImage {
  return property.images.find((image) => image.og) ?? getHeroImage();
}
