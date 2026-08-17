import { property } from "@/config/property";
import { formatPrice } from "@/lib/format";
import { CtaButtons } from "@/components/CtaButtons";
import { PhoneLink } from "@/components/PhoneLink";

export function OwnerCta() {
  return (
    <section className="section owner-cta" aria-label="Связаться с собственником">
      <div className="container owner-cta-card">
        <p className="eyebrow">Прямой контакт</p>
        <h2>Есть вопросы по дому? Позвоните собственнику напрямую.</h2>
        <p className="owner-name">
          {property.ownerName}
          {property.price !== null ? (
            <span className="owner-price"> · {formatPrice(property.price)}</span>
          ) : null}
        </p>
        <PhoneLink className="owner-phone">{property.phone}</PhoneLink>
        <CtaButtons phoneLabel="Позвонить" whatsappLabel="WhatsApp" />
      </div>
    </section>
  );
}
