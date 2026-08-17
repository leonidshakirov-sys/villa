import { property } from "@/config/property";
import { formatArea, formatPrice } from "@/lib/format";

const rows = [
  { label: "Площадь дома", value: formatArea(property.area, "м²") },
  { label: "Площадь участка", value: formatArea(property.landArea, "сотки") },
  { label: "Количество этажей", value: String(property.floors) },
  { label: "Год постройки", value: String(property.yearBuilt) },
  { label: "Материал", value: "пеноблок / кирпич / монолит" },
  { label: "Коммуникации", value: property.communications },
  { label: "Гараж", value: "есть" },
  { label: "Помещение под сауну", value: "есть" },
  { label: "Расстояние до МКАД", value: property.distanceToMkad },
  { label: "Продажа", value: "от собственника" },
  ...(property.price !== null
    ? [{ label: "Цена", value: formatPrice(property.price) }]
    : []),
];

export function Specs() {
  return (
    <section className="section specs" id="specs">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Параметры</p>
          <h2>Основные характеристики</h2>
        </div>
        <dl className="specs-list">
          {rows.map((row) => (
            <div key={row.label} className="specs-row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
