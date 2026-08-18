/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE?: string;
  readonly YANDEX_METRIKA_ID?: string;
  readonly YANDEX_WEBMASTER_VERIFICATION?: string;
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  ym?: (...args: unknown[]) => void;
  __METRIKA_ID__?: string;
}
