export function formatPrice(price: number) {
  return `${new Intl.NumberFormat("ru-RU").format(price)} ₽`;
}

export function formatNumber(value: number, fractionDigits = 2) {
  return value.toLocaleString("ru-RU", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

export function formatArea(value: number, unit: string) {
  return `${formatNumber(value)} ${unit}`;
}
