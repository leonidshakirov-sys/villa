import { getMapEmbedUrl, getMapOpenUrl, property } from "@/config/property";
import { SectionTrack } from "@/components/SectionTrack";

export function Location() {
  return (
    <SectionTrack event="view_location">
      <section className="section location" id="location">
        <div className="container location-grid">
          <div>
            <p className="eyebrow">Расположение</p>
            <h2>Житнево — Домодедово, Московская область</h2>
            <p className="prose">
              Дом расположен в деревне Житнево Домодедовского городского округа
              Московской области, ориентировочно в 35 км от МКАД.
            </p>
            <p className="location-address">{property.publicAddress}</p>
            <p className="muted">
              На карте показан район деревни, без точного номера дома.
            </p>
            <a
              className="text-btn"
              href={getMapOpenUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть в Яндекс Картах
            </a>
          </div>
        </div>
        <div className="map-wrap">
          <iframe
            title="Карта деревни Житнево, Домодедовский городской округ"
            src={getMapEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </SectionTrack>
  );
}
