"use client";

import type { ReactNode } from "react";
import { getWhatsAppUrl, property } from "@/config/property";
import { track } from "@/lib/analytics";

type WhatsAppButtonProps = {
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
};

export function WhatsAppButton({
  className,
  children = "Написать в WhatsApp",
  ariaLabel = `Написать ${property.ownerName} в WhatsApp`,
}: WhatsAppButtonProps) {
  return (
    <a
      className={className}
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => track("click_whatsapp")}
    >
      {children}
    </a>
  );
}
