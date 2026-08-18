"use client";

import { useSyncExternalStore } from "react";
import { property } from "@/config/property";

const STORAGE_KEY = "zhitnevo-cookie-notice";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  if (!property.yandexMetrikaId) return false;
  return window.localStorage.getItem(STORAGE_KEY) !== "1";
}

export function CookieNotice() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, () => false);

  if (!visible) return null;

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
          emit();
        }}
      >
        Понятно
      </button>
    </div>
  );
}
