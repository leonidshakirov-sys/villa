"use client";

import type { ReactNode } from "react";
import { getTelUrl, property } from "@/config/property";
import { track } from "@/lib/analytics";

type PhoneLinkProps = {
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
};

export function PhoneLink({
  className,
  children,
  ariaLabel = `Позвонить ${property.ownerName} ${property.phone}`,
}: PhoneLinkProps) {
  return (
    <a
      className={className}
      href={getTelUrl()}
      aria-label={ariaLabel}
      onClick={() => track("click_phone")}
    >
      {children ?? property.phone}
    </a>
  );
}
