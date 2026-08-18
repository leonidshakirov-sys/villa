import { property } from "@/config/property";
import { PhoneLink } from "@/components/PhoneLink";

const links = [
  { href: "/#about", label: "О доме" },
  { href: "/#gallery", label: "Фотографии" },
  { href: "/#specs", label: "Характеристики" },
  { href: "/#location", label: "Расположение" },
  { href: "/privacy", label: "Политика конфиденциальности" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="logo">Дом в Житнево</p>
          <p>Продажа от собственника</p>
          <p>{property.ownerName}</p>
          <PhoneLink className="footer-phone">{property.phone}</PhoneLink>
        </div>
        <nav className="footer-nav" aria-label="Навигация в подвале">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container footer-copy">
        <p>
          © {year} {property.title}
        </p>
      </div>
    </footer>
  );
}
