import { property } from "@/config/property";
import { formatPrice } from "@/lib/format";
import { CtaButtons } from "@/components/CtaButtons";
import { PhoneLink } from "@/components/PhoneLink";

export function DirectSale() {
  return (
    <section className="section direct-sale" id="owner">
      <div className="container direct-sale-inner">
        <p className="eyebrow">Без посредников</p>
        <h2>Продажа напрямую от собственника</h2>
        <p className="section-lead">
          Без посредников и комиссии агентства. Можно напрямую задать вопросы по
          дому и договориться о просмотре.
        </p>
        <p className="owner-name">{property.ownerName}</p>
        <PhoneLink className="owner-phone">{property.phone}</PhoneLink>
        {property.price !== null ? (
          <p className="direct-price">{formatPrice(property.price)}</p>
        ) : null}
        <CtaButtons />
      </div>
    </section>
  );
}
