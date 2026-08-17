# Дом в Житнево

Одностраничный сайт продажи частного дома в деревне Житнево. Продажа напрямую от собственника, без формы заявки: посетитель звонит или пишет в WhatsApp.

## Запуск

```bash
npm install
npm run dev
```

Сборка для публикации:

```bash
npm run build
npm run preview
```

Готовые файлы лежат в `dist/`. Их можно загрузить на любой статический хостинг.

Перед публикацией укажите свой домен в `.env` или в `astro.config.mjs`:

```bash
PUBLIC_SITE_URL=https://ваш-домен.ru
```

## Где что менять

### Цена

`src/config/property.ts` → поле `price`.

Сейчас: `32000000` (на сайте: **32 000 000 ₽**).

Чтобы скрыть цену, поставьте `price: null`.

### Контакты

Там же:

- `ownerName` — Леонид
- `phone` — +7 916 265-92-62
- `phoneRaw` — 79162659262
- `whatsappMessage` — текст первого сообщения в WhatsApp

### Адрес и карта

- `publicAddress` — что видно на сайте
- `fullAddress` — полный адрес, хранится в конфиге
- `showExactAddress` — `false` по умолчанию, точный номер дома не показывается
- `map.lat`, `map.lon`, `map.zoom` — точка публичной карты (сейчас центр деревни Житнево)

### Фотографии

Папка: `public/images/house/`

Планировки: `public/images/plans/`

Список файлов и подписи: массив `images` в `src/config/property.ts`.

Пока файла нет, сайт показывает нейтральную заглушку. Чужие и AI-фотографии дома добавлять нельзя.

### SEO

- Title и description: `seoTitle`, `seoDescription` в `src/config/property.ts`
- SEO-текст: `src/components/SeoText.astro`
- schema.org: `src/components/JsonLd.astro`
- sitemap: собирается автоматически (`dist/sitemap-index.xml`)
- robots.txt: `src/pages/robots.txt.ts`

### Яндекс Метрика

`src/config/site.ts` → `yandexMetrikaId`

или переменная окружения `YANDEX_METRIKA_ID`.

Пока поле пустое, скрипт не загружается.

### Яндекс Вебмастер

`src/config/site.ts` → `yandexWebmasterVerification`

Пустое значение не выводит meta-тег.

## Перед публикацией

1. Загрузить реальные фотографии дома в `public/images/house/`.
2. При наличии — планировки в `public/images/plans/`.
3. Проверить домен в `PUBLIC_SITE_URL`.
4. Вставить ID Метрики и код Вебмастера, если они уже есть.
5. Собрать сайт: `npm run build`.
