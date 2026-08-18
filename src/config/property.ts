/**
 * Единый конфиг объекта.
 * Здесь меняются: цена, контакты, адреса, фотографии, карта, SEO, Метрика.
 */

export type PropertyImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  categoryLabel: string;
  width: number;
  height: number;
  /** Поставьте true после загрузки файла в public */
  available: boolean;
};

export type FloorPlan = {
  id: string;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  available: boolean;
};

export const property = {
  ownerName: "Леонид",
  ownerRole: "собственник",
  phone: "+7 916 265-92-62",
  phoneRaw: "79162659262",

  title: "Дом в Житнево",

  area: 281.5,
  landArea: 11.86,
  floors: 4,
  yearBuilt: 2021,
  format: "большой частный дом / дуплекс",
  walls: "пеноблок, кирпич, монолитные конструкции",
  communications: "центральные",
  hasGarage: true,
  garageStatus: "требует завершения работ",
  hasSaunaRoom: true,
  saunaStatus: "требует завершения работ",
  distanceToMkad: "около 35 км",
  driveTimeToMkad: "около 35–40 минут при нормальной дорожной ситуации",

  publicAddress:
    "деревня Житнево, Домодедовский городской округ, Московская область",
  fullAddress:
    "Московская область, Домодедовский городской округ, деревня Житнево, улица Колхозная, 8",

  // Цена дома. null — блок цены скрыт. Число — показывается как «XX XXX XXX ₽».
  price: 32_000_000 as number | null,
  currency: "RUB",

  whatsappMessage:
    "Здравствуйте, Леонид! Пишу по поводу дома в Житнево. Хотел бы узнать подробности.",

  // Публичный URL сайта (canonical, sitemap, Open Graph).
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://zhitnevo-house.ru",

  // Если пусто — meta verification не выводится.
  yandexWebmasterVerification:
    process.env.NEXT_PUBLIC_YANDEX_WEBMASTER_VERIFICATION || "",

  // Если пусто — скрипт Метрики не загружается.
  yandexMetrikaId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || "",

  seo: {
    title: "Дом в Житнево 281,5 м² — купить дом от собственника",
    description:
      "Продается дом 281,5 м² на участке 11,86 соток в Житнево, Домодедово. Реконструкция 2021, центральные коммуникации, гараж. Продажа от собственника.",
  },

  reconstructionYear: 2021,
  underfloorHeating: "цокольный и первый этажи",
  boilers: "два котла Viessmann",
  alarm: "сигнализация с датчиками движения",
  wifi: true,
  saleTerms: [
    "Свободная продажа",
    "Один взрослый собственник",
    "Никто не зарегистрирован",
    "Полная стоимость указывается в договоре",
    "Без комиссии агентства со стороны собственника",
  ],
  nearby: [
    "школа",
    "детский сад",
    "магазины",
    "кафе",
    "автобусная остановка",
    "футбольное поле",
    "детские площадки",
    "спортивные площадки",
  ],

  // Публичная точка карты — центр деревни, не точный номер дома.
  map: {
    lat: 55.342268,
    lng: 37.9063855,
    zoom: 14,
  },

  // Поля на будущее: не заполнены — на сайте не показываются.
  bedrooms: null as number | null,
  rooms: null as number | null,
  bathrooms: null as number | null,
  landStatus: null as string | null,
  cadastralNumber: null as string | null,

  images: [
    {
      id: "exterior-01",
      src: "/images/house/house-exterior-01.webp",
      alt: "Дом в Житнево со стороны участка, Домодедовский городской округ",
      category: "exterior",
      categoryLabel: "Вид дома",
      width: 1920,
      height: 1440,
      available: true,
    },
    {
      id: "exterior-02",
      src: "/images/house/house-exterior-02.webp",
      alt: "Подъезд к дому в деревне Житнево",
      category: "exterior",
      categoryLabel: "Подъезд к дому",
      width: 1920,
      height: 1440,
      available: true,
    },
    {
      id: "facade-01",
      src: "/images/house/house-facade-01.webp",
      alt: "Фасад частного дома в деревне Житнево",
      category: "facade",
      categoryLabel: "Фасад",
      width: 1920,
      height: 1440,
      available: true,
    },
    {
      id: "veranda-01",
      src: "/images/house/house-veranda-01.webp",
      alt: "Веранда дома 281,5 м² в Житнево",
      category: "veranda",
      categoryLabel: "Веранда",
      width: 1920,
      height: 1440,
      available: true,
    },
    {
      id: "kitchen-01",
      src: "/images/house/house-kitchen-01.webp",
      alt: "Кухня-гостиная на первом этаже дома в Житнево",
      category: "interior",
      categoryLabel: "Кухня-гостиная",
      width: 1920,
      height: 1440,
      available: true,
    },
    {
      id: "living-01",
      src: "/images/house/house-living-01.webp",
      alt: "Гостиная на первом этаже дома в Житнево",
      category: "interior",
      categoryLabel: "Гостиная",
      width: 1920,
      height: 1440,
      available: true,
    },
    {
      id: "interior-01",
      src: "/images/house/house-interior-01.webp",
      alt: "Кухня-гостиная дома в Житнево Московской области",
      category: "interior",
      categoryLabel: "Кухня-гостиная",
      width: 1536,
      height: 2050,
      available: true,
    },
    {
      id: "surroundings-01",
      src: "/images/house/house-surroundings-01.webp",
      alt: "Подъезд и территория вокруг дома в Житнево",
      category: "surroundings",
      categoryLabel: "Вокруг дома",
      width: 1920,
      height: 2560,
      available: true,
    },
    {
      id: "yard-01",
      src: "/images/house/house-yard-01.webp",
      alt: "Участок 11,86 сотки у дома в Житнево",
      category: "yard",
      categoryLabel: "Участок",
      width: 1920,
      height: 1440,
      available: true,
    },
    {
      id: "bathroom-01",
      src: "/images/house/house-bathroom-01.webp",
      alt: "Санузел первого этажа дома в Житнево",
      category: "interior",
      categoryLabel: "Санузел 1 этажа",
      width: 1536,
      height: 2050,
      available: true,
    },
    {
      id: "interior-02",
      src: "/images/house/house-interior-02.webp",
      alt: "Гостевая комната на первом этаже дома в Житнево",
      category: "rooms",
      categoryLabel: "Гостевая комната",
      width: 768,
      height: 1024,
      available: true,
    },
    {
      id: "bedroom-02",
      src: "/images/house/house-bedroom-02.webp",
      alt: "Гостевая комната в доме в деревне Житнево",
      category: "rooms",
      categoryLabel: "Гостевая комната",
      width: 768,
      height: 1024,
      available: true,
    },
    {
      id: "bedroom-01",
      src: "/images/house/house-bedroom-01.webp",
      alt: "Детская спальня на втором этаже дома в Житнево",
      category: "rooms",
      categoryLabel: "Детская спальня",
      width: 768,
      height: 1024,
      available: true,
    },
    {
      id: "bathroom-02",
      src: "/images/house/house-bathroom-02.webp",
      alt: "Ванная второго этажа дома в Житнево",
      category: "interior",
      categoryLabel: "Ванная 2 этажа",
      width: 1920,
      height: 966,
      available: true,
    },
    {
      id: "bathroom-03",
      src: "/images/house/house-bathroom-03.webp",
      alt: "Ванная комната второго этажа в доме в Житнево",
      category: "interior",
      categoryLabel: "Ванная 2 этажа",
      width: 1920,
      height: 1440,
      available: true,
    },
    {
      id: "bathroom-04",
      src: "/images/house/house-bathroom-04.webp",
      alt: "Санузел второго этажа дома в Житнево",
      category: "interior",
      categoryLabel: "Ванная 2 этажа",
      width: 1920,
      height: 1016,
      available: true,
    },
    {
      id: "bathroom-05",
      src: "/images/house/house-bathroom-05.webp",
      alt: "Ванная на втором этаже дома в Житнево",
      category: "interior",
      categoryLabel: "Ванная 2 этажа",
      width: 1920,
      height: 1440,
      available: true,
    },
    {
      id: "wardrobe-01",
      src: "/images/house/house-wardrobe-01.webp",
      alt: "Гардеробная второго этажа дома в Житнево",
      category: "rooms",
      categoryLabel: "Гардеробная",
      width: 1920,
      height: 1380,
      available: true,
    },
    {
      id: "hallway-02",
      src: "/images/house/house-hallway-02.webp",
      alt: "Коридор второго этажа дома в Житнево",
      category: "hallway",
      categoryLabel: "Коридор 2 этажа",
      width: 1536,
      height: 2050,
      available: true,
    },
    {
      id: "stairs-01",
      src: "/images/house/house-stairs-01.webp",
      alt: "Лестница на второй этаж дома в Житнево",
      category: "stairs",
      categoryLabel: "Лестница на 2 этаж",
      width: 1536,
      height: 2050,
      available: true,
    },
    {
      id: "stairs-02",
      src: "/images/house/house-stairs-02.webp",
      alt: "Лестница на третий этаж дома в Житнево",
      category: "stairs",
      categoryLabel: "Лестница на 3 этаж",
      width: 1536,
      height: 2050,
      available: true,
    },
    {
      id: "hallway-01",
      src: "/images/house/house-hallway-01.webp",
      alt: "Коридор цокольного этажа дома в Житнево",
      category: "hallway",
      categoryLabel: "Коридор цоколя",
      width: 1920,
      height: 2560,
      available: true,
    },
    {
      id: "kitchen-02",
      src: "/images/house/house-kitchen-02.webp",
      alt: "Кухня цокольного этажа дома в Житнево",
      category: "interior",
      categoryLabel: "Кухня цоколя",
      width: 1920,
      height: 958,
      available: true,
    },
    {
      id: "cinema-01",
      src: "/images/house/house-cinema-01.webp",
      alt: "Комната отдыха и домашний кинотеатр в цокольном этаже дома в Житнево",
      category: "interior",
      categoryLabel: "Кинотеатр",
      width: 1536,
      height: 2050,
      available: true,
    },
    {
      id: "bathroom-06",
      src: "/images/house/house-bathroom-06.webp",
      alt: "Санузел цокольного этажа дома в Житнево",
      category: "interior",
      categoryLabel: "Санузел цоколя",
      width: 1920,
      height: 1412,
      available: true,
    },
    {
      id: "boiler-01",
      src: "/images/house/house-boiler-01.webp",
      alt: "Котельная с котлами Viessmann в доме в Житнево",
      category: "interior",
      categoryLabel: "Котельная",
      width: 1536,
      height: 2050,
      available: true,
    },
    {
      id: "recreation-01",
      src: "/images/house/house-recreation-01.webp",
      alt: "Зал на верхнем этаже дома в Житнево",
      category: "floors",
      categoryLabel: "Зал 3 этажа",
      width: 1920,
      height: 638,
      available: true,
    },
    {
      id: "recreation-02",
      src: "/images/house/house-recreation-02.webp",
      alt: "Зал третьего этажа дома в Житнево",
      category: "floors",
      categoryLabel: "Зал 3 этажа",
      width: 1920,
      height: 1440,
      available: true,
    },
  ] satisfies PropertyImage[],

  floorPlans: [
    {
      id: "floor-basement",
      title: "Цокольный этаж",
      src: "/images/plans/floor-basement.webp",
      alt: "Технический план цокольного этажа дома в Житнево",
      width: 1170,
      height: 2532,
      available: true,
    },
    {
      id: "floor-1",
      title: "1 этаж",
      src: "/images/plans/floor-1.webp",
      alt: "Технический план первого этажа дома в Житнево",
      width: 1170,
      height: 2532,
      available: true,
    },
    {
      id: "floor-2",
      title: "2 этаж",
      src: "/images/plans/floor-2.webp",
      alt: "Технический план второго этажа дома в Житнево",
      width: 1170,
      height: 2532,
      available: true,
    },
    {
      id: "floor-upper",
      title: "Верхний этаж",
      src: "/images/plans/floor-upper.webp",
      alt: "Технический план верхнего этажа дома в Житнево",
      width: 1170,
      height: 2532,
      available: true,
    },
  ] satisfies FloorPlan[],

  locationImages: [
    {
      id: "shops-01",
      src: "/images/location/location-shops-01.webp",
      alt: "Магазины рядом с деревней Житнево в Домодедовском округе",
      category: "shops",
      categoryLabel: "Магазины рядом",
      width: 1920,
      height: 932,
      available: true,
    },
    {
      id: "shops-02",
      src: "/images/location/location-shops-02.webp",
      alt: "Магазины и сервисы рядом с домом в Житнево",
      category: "shops",
      categoryLabel: "Магазины рядом",
      width: 1920,
      height: 1226,
      available: true,
    },
    {
      id: "shops-03",
      src: "/images/location/location-shops-03.webp",
      alt: "Торговые точки рядом с Житнево",
      category: "shops",
      categoryLabel: "Магазины рядом",
      width: 1920,
      height: 1440,
      available: true,
    },
  ] satisfies PropertyImage[],
};

export function getWhatsAppUrl() {
  return `https://wa.me/${property.phoneRaw}?text=${encodeURIComponent(
    property.whatsappMessage,
  )}`;
}

export function getTelUrl() {
  return `tel:+${property.phoneRaw}`;
}

export function isImageReady(image: { src: string; available: boolean }) {
  return image.available;
}

export function getHeroImage() {
  return (
    property.images.find((image) => image.available && image.category === "exterior") ??
    property.images.find((image) => image.available) ??
    null
  );
}

export function getAvailableImages() {
  return property.images.filter((image) => image.available);
}

export function getMapEmbedUrl() {
  const { lat, lng, zoom } = property.map;
  const params = new URLSearchParams({
    ll: `${lng},${lat}`,
    z: String(zoom),
    l: "map",
  });
  return `https://yandex.ru/map-widget/v1/?${params.toString()}`;
}

export function getMapOpenUrl() {
  const { lat, lng, zoom } = property.map;
  return `https://yandex.ru/maps/?ll=${lng}%2C${lat}&z=${zoom}&l=map`;
}
