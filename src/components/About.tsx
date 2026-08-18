import { property } from "@/config/property";
import { formatNumber, formatPrice } from "@/lib/format";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">О доме</p>
          <h2>Просторный дом для постоянного проживания</h2>
          {property.price !== null ? (
            <p className="about-price">{formatPrice(property.price)}</p>
          ) : null}
        </div>
        <div className="prose">
          <p>
            Просторный загородный дом после полной реконструкции 2021 года — для
            тех, кто хочет жить за городом с комфортом городской квартиры,
            большим количеством пространства и собственной территорией.
          </p>
          <p>
            Дом расположен в деревне Житнево Домодедовского городского округа
            Московской области. Это не типовой коттедж «под продажу»: дом
            серьезно перестраивался и дорабатывался под комфортное постоянное
            проживание семьи.
          </p>
          <p>
            Общая площадь дома с верандой — {formatNumber(property.area)} м²,
            площадь участка — {formatNumber(property.landArea)} сотки.
          </p>
          <p>Продажа напрямую от собственника.</p>
        </div>
      </div>
    </section>
  );
}
