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
      alt: "Дом в Житнево Домодедовского городского округа",
      category: "exterior",
      categoryLabel: "Дом снаружи",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "exterior-02",
      src: "/images/house/house-exterior-02.webp",
      alt: "4-этажный дом в Житнево",
      category: "exterior",
      categoryLabel: "Фасад",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "facade-01",
      src: "/images/house/house-facade-01.webp",
      alt: "Фасад частного дома в деревне Житнево",
      category: "facade",
      categoryLabel: "Фасад",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "yard-01",
      src: "/images/house/house-yard-01.webp",
      alt: "Участок 11,86 сотки у дома в Житнево",
      category: "yard",
      categoryLabel: "Участок",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "yard-02",
      src: "/images/house/house-yard-02.webp",
      alt: "Территория дома в Житнево Московской области",
      category: "yard",
      categoryLabel: "Территория",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "veranda-01",
      src: "/images/house/house-veranda-01.webp",
      alt: "Веранда дома 281,5 м² в Житнево",
      category: "veranda",
      categoryLabel: "Веранда",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "interior-01",
      src: "/images/house/house-interior-01.webp",
      alt: "Интерьер дома в Житнево Московской области",
      category: "interior",
      categoryLabel: "Интерьер",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "interior-02",
      src: "/images/house/house-interior-02.webp",
      alt: "Комнаты частного дома в деревне Житнево",
      category: "rooms",
      categoryLabel: "Комнаты",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "stairs-01",
      src: "/images/house/house-stairs-01.webp",
      alt: "Лестница в четырёхэтажном доме в Житнево",
      category: "stairs",
      categoryLabel: "Лестница",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "floors-01",
      src: "/images/house/house-floors-01.webp",
      alt: "Этажи дома в Житнево Домодедовского округа",
      category: "floors",
      categoryLabel: "Этажи",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "garage-01",
      src: "/images/house/house-garage-01.webp",
      alt: "Гараж у дома в Житнево",
      category: "garage",
      categoryLabel: "Гараж",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "sauna-01",
      src: "/images/house/house-sauna-01.webp",
      alt: "Помещение под сауну в доме в Житнево",
      category: "sauna",
      categoryLabel: "Помещение сауны",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "surroundings-01",
      src: "/images/house/house-surroundings-01.webp",
      alt: "Территория вокруг дома в Житнево",
      category: "surroundings",
      categoryLabel: "Вокруг дома",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "kitchen-01",
      src: "/images/house/house-kitchen-01.webp",
      alt: "Кухня-гостиная в доме в Житнево",
      category: "interior",
      categoryLabel: "Кухня-гостиная",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "bathroom-01",
      src: "/images/house/house-bathroom-01.webp",
      alt: "Ванная комната в доме в Житнево",
      category: "interior",
      categoryLabel: "Ванная",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "bathroom-02",
      src: "/images/house/house-bathroom-02.webp",
      alt: "Санузел второго этажа дома в Житнево",
      category: "interior",
      categoryLabel: "Ванная",
      width: 1600,
      height: 1067,
      available: false,
    },
  ] satisfies PropertyImage[],

  floorPlans: [
    {
      id: "floor-basement",
      title: "Цокольный этаж",
      src: "/images/plans/floor-basement.webp",
      alt: "Технический план цокольного этажа дома в Житнево",
      width: 1600,
      height: 1200,
      available: false,
    },
    {
      id: "floor-1",
      title: "1 этаж",
      src: "/images/plans/floor-1.webp",
      alt: "Технический план первого этажа дома в Житнево",
      width: 1600,
      height: 1200,
      available: false,
    },
    {
      id: "floor-2",
      title: "2 этаж",
      src: "/images/plans/floor-2.webp",
      alt: "Технический план второго этажа дома в Житнево",
      width: 1600,
      height: 1200,
      available: false,
    },
    {
      id: "floor-upper",
      title: "Верхний этаж",
      src: "/images/plans/floor-upper.webp",
      alt: "Технический план верхнего этажа дома в Житнево",
      width: 1600,
      height: 1200,
      available: false,
    },
  ] satisfies FloorPlan[],

  locationImages: [
    {
      id: "shops-01",
      src: "/images/location/location-shops-01.webp",
      alt: "Магазины рядом с Житнево в Домодедовском округе",
      category: "shops",
      categoryLabel: "Магазины рядом",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "shops-02",
      src: "/images/location/location-shops-02.webp",
      alt: "Торговый центр и сервисы рядом с домом в Житнево",
      category: "shops",
      categoryLabel: "Инфраструктура рядом",
      width: 1600,
      height: 1067,
      available: false,
    },
    {
      id: "sports-01",
      src: "/images/location/location-sports-01.webp",
      alt: "Спортивные площадки и футбольное поле в Житнево",
      category: "sports",
      categoryLabel: "Спорт рядом",
      width: 1600,
      height: 1067,
      available: false,
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
