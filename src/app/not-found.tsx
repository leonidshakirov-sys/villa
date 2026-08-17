import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="content" className="not-found">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>Страница не найдена</h1>
          <p>Такой страницы нет. Можно вернуться к описанию дома.</p>
          <Link className="btn btn-primary" href="/">
            Вернуться к дому
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
