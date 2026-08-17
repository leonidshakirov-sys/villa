/**
 * Настройки сайта: домен, аналитика, вебмастер.
 * Контакты и данные дома — в src/config/property.ts
 */

export const site = {
  /**
   * ID счётчика Яндекс Метрики.
   * Если пусто — скрипт Метрики не загружается и cookie-баннер не показывается.
   * Можно также задать через переменную окружения YANDEX_METRIKA_ID.
   */
  yandexMetrikaId: (import.meta.env.YANDEX_METRIKA_ID as string | undefined) || "",

  /**
   * Код верификации Яндекс Вебмастера (содержимое content у meta-тега).
   * Если пусто — meta-тег не выводится.
   */
  yandexWebmasterVerification:
    (import.meta.env.YANDEX_WEBMASTER_VERIFICATION as string | undefined) || "",

  /**
   * Включить вебвизор Метрики после подключения счётчика.
   * При true в политике конфиденциальности появится соответствующее уточнение.
   */
  yandexMetrikaWebvisor: false,

  locale: "ru_RU",
  lang: "ru",
};

export function getSiteUrl(): string {
  const fromAstro = import.meta.env.SITE as string | undefined;
  return (fromAstro || "https://zhitnevo-house.ru").replace(/\/$/, "");
}

export function hasMetrika(): boolean {
  return Boolean(site.yandexMetrikaId && String(site.yandexMetrikaId).trim());
}

export function hasWebmasterVerification(): boolean {
  return Boolean(
    site.yandexWebmasterVerification &&
      String(site.yandexWebmasterVerification).trim(),
  );
}
