export function formatPrice(price: number): string {
  return `${new Intl.NumberFormat("ru-RU").format(price)} ₽`;
}

export function formatArea(value: number): string {
  return `${value.toLocaleString("ru-RU", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 1,
  })} м²`;
}

export function currentYear(): number {
  return new Date().getFullYear();
}
