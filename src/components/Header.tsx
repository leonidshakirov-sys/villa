"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { property } from "@/config/property";
import { PhoneLink } from "@/components/PhoneLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const nav = [
  { href: "/#about", label: "О доме" },
  { href: "/#gallery", label: "Фотографии" },
  { href: "/#specs", label: "Характеристики" },
  { href: "/#location", label: "Расположение" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" href="/">
          Дом в Житнево
        </Link>

        <nav className="header-nav" aria-label="Основная навигация">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <PhoneLink className="header-phone">{property.phone}</PhoneLink>
          <PhoneLink className="btn btn-primary btn-compact">Позвонить</PhoneLink>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`mobile-menu ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        <nav className="mobile-menu-nav" aria-label="Мобильная навигация">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <PhoneLink className="mobile-menu-phone">{property.phone}</PhoneLink>
        <div className="cta-row">
          <PhoneLink className="btn btn-primary">Позвонить</PhoneLink>
          <WhatsAppButton className="btn btn-whatsapp">WhatsApp</WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
