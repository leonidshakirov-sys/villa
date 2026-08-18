# Дом в Житнево

Одностраничный сайт продажи частного дома в деревне Житнево от собственника.

## Запуск

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Куда загрузить фотографии

Реальные фотографии дома:

`public/images/house/`

Планировки этажей:

`public/images/plans/`

Фото инфраструктуры рядом:

`public/images/location/`

Фотографии объекта уже лежат в этих папках и подключены в `src/config/property.ts` (`available: true`).

Чтобы заменить кадр:

1. Положите файл в ту же папку с тем же именем.
2. При необходимости поправьте `alt`, `width` и `height` в конфиге.

Чужие и AI-фотографии дома не используются. Placeholder показывается только если у кадра `available: false`.

## Цена

Файл: `src/config/property.ts`

Поле: `price`

Сейчас: `32_000_000` (на сайте — `32 000 000 ₽`).

Чтобы скрыть цену, поставьте `price: null`.

## Контакты

Там же, в `src/config/property.ts`:

- `ownerName`: Леонид
- `phone`: +7 916 265-92-62
- `phoneRaw`: 79162659262
- `whatsappMessage`: текст предустановленного сообщения

## SEO

- Title и description: `property.seo` в `src/config/property.ts`
- SEO-текст: `src/components/SeoArticle.tsx`
- schema.org JSON-LD: `src/lib/schema.ts`
- sitemap: `src/app/sitemap.ts` → `/sitemap.xml`
- robots: `src/app/robots.ts` → `/robots.txt`
- Адрес сайта для canonical/OG: `NEXT_PUBLIC_SITE_URL` или `property.siteUrl`

## Яндекс Метрика

В `.env.local`:

```
NEXT_PUBLIC_YANDEX_METRIKA_ID=12345678
```

Пока ID пустой, скрипт не загружается и cookie-уведомление не показывается.

## Яндекс Вебмастер

```
NEXT_PUBLIC_YANDEX_WEBMASTER_VERIFICATION=код_подтверждения
```

Пока значение пустое, meta-тег не выводится.

## Карта и адрес

В `src/config/property.ts`:

- `publicAddress` — текст на сайте
- `fullAddress` — полный адрес, только в конфиге
- `map.lat`, `map.lng`, `map.zoom` — публичная точка района (центр деревни)
