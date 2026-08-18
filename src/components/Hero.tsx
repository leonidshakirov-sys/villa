import { getHeroImage, property } from "@/config/property";
import { formatArea, formatNumber, formatPrice } from "@/lib/format";
import { CtaButtons } from "@/components/CtaButtons";
import { PhoneLink } from "@/components/PhoneLink";
import { Photo } from "@/components/Photo";

const stats = [
  { value: formatArea(property.area, "м²"), label: "Площадь дома" },
  { value: formatArea(property.landArea, "сотки"), label: "Площадь участка" },
  { value: String(property.floors), label: "Этажа" },
  { value: String(property.yearBuilt), label: "Год постройки" },
];

export function Hero() {
  const heroImage = getHeroImage();

  return (
    <section className="hero" aria-label="Главный экран">
      <div className="hero-media">
        {heroImage ? (
          <Photo
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            available
            priority
            fill
            sizes="100vw"
            className="hero-image"
          />
        ) : (
          <div className="hero-fallback" />
        )}
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Продажа от собственника • Житнево</p>
          <h1 className="hero-title">
            Дом в Житнево — <span className="digits">{formatNumber(property.area)}</span>{" "}
            м² на участке <span className="digits">{formatNumber(property.landArea)}</span>{" "}
            соток
          </h1>
          <p className="hero-lead">
            Просторный загородный дом после полной реконструкции 2021 года. Жить за
            городом с комфортом городской квартиры, большим пространством и своей
            территорией. Около 35 км от МКАД.
          </p>
          {property.price !== null ? (
            <p className="hero-price">{formatPrice(property.price)}</p>
          ) : null}
          <div className="hero-owner">
            <p>
              {property.ownerName} — {property.ownerRole}
            </p>
            <PhoneLink className="hero-phone">{property.phone}</PhoneLink>
          </div>
          <CtaButtons />
          <p className="hero-note">Продажа напрямую от собственника.</p>
          <div className="hero-links">
            <a href="#gallery">Посмотреть фотографии</a>
            <a href="#specs">Посмотреть характеристики</a>
            <a href="#location">Посмотреть расположение</a>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat">
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
