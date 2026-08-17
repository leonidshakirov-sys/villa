const items = [
  {
    title: "281,5 м² пространства",
    text: "Большая площадь позволяет организовать пространство для семьи, гостей, работы и отдыха.",
  },
  {
    title: "Участок 11,86 сотки",
    text: "Достаточно места для благоустройства территории и создания собственных зон отдыха.",
  },
  {
    title: "Четыре этажа",
    text: "Можно функционально разделить пространство дома на разные зоны.",
  },
  {
    title: "Центральные коммуникации",
    text: "Важное преимущество для постоянного проживания.",
  },
  {
    title: "Дом 2021 года",
    text: "Современный капитальный объект.",
  },
  {
    title: "Собственный гараж",
    text: "Есть отдельное пространство под автомобиль и хозяйственные задачи.",
  },
  {
    title: "Помещение под сауну",
    text: "Будущий владелец сможет завершить его под собственный проект.",
  },
  {
    title: "Около 35 км от МКАД",
    text: "Дом расположен относительно недалеко от Москвы.",
  },
];

export function Advantages() {
  return (
    <section className="section advantages">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Почему этот дом</p>
          <h2>Что делает этот дом интересным</h2>
        </div>
        <ol className="advantages-list">
          {items.map((item, index) => (
            <li key={item.title} className="advantage">
              <span className="advantage-num">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
