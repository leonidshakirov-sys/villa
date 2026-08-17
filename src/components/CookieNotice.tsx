"use client";

import { useEffect, useState } from "react";
import { property } from "@/config/property";

const STORAGE_KEY = "zhitnevo-cookie-notice";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!property.yandexMetrikaId) return;
    const seen = window.localStorage.getItem(STORAGE_KEY);
    if (!seen) setVisible(true);
  }, []);

  if (!property.yandexMetrikaId || !visible) return null;

  return (
    <div className="cookie-notice" role="dialog" aria-label="Уведомление о cookie">
      <p>
        На сайте используются cookie для анализа посещаемости. Подробнее — в{" "}
        <a href="/privacy">Политике конфиденциальности</a>.
      </p>
      <button
        type="button"
        className="btn btn-primary btn-compact"
        onClick={() => {
          window.localStorage.setItem(STORAGE_KEY, "1");
          setVisible(false);
        }}
      >
        Понятно
      </button>
    </div>
  );
}
