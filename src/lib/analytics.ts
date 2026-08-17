"use client";

import { property } from "@/config/property";

export type AnalyticsEvent =
  | "click_phone"
  | "click_whatsapp"
  | "open_gallery"
  | "view_location"
  | "view_floorplans"
  | "gallery_next"
  | "gallery_previous";

declare global {
  interface Window {
    ym?: (id: number, method: string, goal: string) => void;
  }
}

export function track(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  const id = property.yandexMetrikaId;
  if (id && typeof window.ym === "function") {
    window.ym(Number(id), "reachGoal", event);
  }
}
