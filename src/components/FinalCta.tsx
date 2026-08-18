import { getHeroImage, property } from "@/config/property";
import { formatPrice } from "@/lib/format";
import { CtaButtons } from "@/components/CtaButtons";
import { PhoneLink } from "@/components/PhoneLink";
import { Photo } from "@/components/Photo";

export function FinalCta() {
  const image = getHeroImage();

  return (
    <section className="final-cta" aria-label="Договориться о просмотре">
      <div className="final-cta-media">
        {image ? (
          <Photo
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            available
            fill
            sizes="100vw"
            className="final-cta-image"
          />
        ) : (
          <div className="hero-fallback" />
        )}
        <div className="hero-overlay" />
        <div className="container final-cta-content">
          <p className="eyebrow light">Просмотр</p>
          <h2>Лучше один раз увидеть</h2>
          <p className="final-lead">
            Масштаб комнат, веранду и участок лучше оценить на месте. Позвоните
            Леониду и договоритесь о просмотре дома в Житнево.
          </p>
          <p className="owner-name light">
            {property.ownerName} — {property.ownerRole}
          </p>
          <PhoneLink className="final-phone">{property.phone}</PhoneLink>
          {property.price !== null ? (
            <p className="final-price">{formatPrice(property.price)}</p>
          ) : null}
          <CtaButtons phoneLabel="Позвонить" whatsappLabel="WhatsApp" />
        </div>
      </div>
    </section>
  );
}
