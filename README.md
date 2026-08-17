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

Рекомендуемые имена файлов уже прописаны в `src/config/property.ts`:

- `house-exterior-01.webp`
- `house-exterior-02.webp`
- `house-facade-01.webp`
- `house-yard-01.webp`
- `house-yard-02.webp`
- `house-veranda-01.webp`
- `house-interior-01.webp`
- `house-interior-02.webp`
- `house-stairs-01.webp`
- `house-floors-01.webp`
- `house-garage-01.webp`
- `house-sauna-01.webp`
- `house-surroundings-01.webp`
- `floor-1.webp` … `floor-4.webp`

## Как заменить фотографии

1. Положите WebP (или замените расширение в конфиге) в папку выше.
2. В `src/config/property.ts` у нужного кадра поставьте `available: true`.
3. При необходимости поправьте `alt`, `width` и `height`.

Пока `available: false`, на сайте показывается нейтральный placeholder. Чужие и AI-фотографии дома не используются.

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
