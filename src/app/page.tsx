import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Reconstruction } from "@/components/Reconstruction";
import { Floors } from "@/components/Floors";
import { OwnerCta } from "@/components/OwnerCta";
import { Specs } from "@/components/Specs";
import { Advantages } from "@/components/Advantages";
import { Land } from "@/components/Land";
import { FloorPlans } from "@/components/FloorPlans";
import { Location } from "@/components/Location";
import { Nearby } from "@/components/Nearby";
import { DirectSale } from "@/components/DirectSale";
import { SeoArticle } from "@/components/SeoArticle";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { CookieNotice } from "@/components/CookieNotice";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <Gallery />
        <About />
        <Reconstruction />
        <Floors />
        <OwnerCta />
        <Specs />
        <Advantages />
        <Land />
        <FloorPlans />
        <Location />
        <Nearby />
        <DirectSale />
        <SeoArticle />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
      <CookieNotice />
    </>
  );
}
