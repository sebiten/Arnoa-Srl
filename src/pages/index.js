import Head from "next/head";
import NavBar from "@/components/NavBar";
import Servicios from "@/components/Servicios";
import SobreNosotros from "@/components/SobreNosotros";
import OrdenaTuPresupuesto from "@/components/OrdenaTuPresupuesto";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarrousel";
import WorkWithUs from "@/components/TrabajaConNosotros";

export default function Home() {
  return (
    <>
      <Head>
        <title>CleanSide Srl</title>
        <meta name="CleanSide srl" content="CleanSide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link style={{ height: "3px" }} rel="icon" href="/basket.png" />
      </Head>
      <NavBar />
      <main>
        <HeroCarousel />
        <SobreNosotros />
        <WorkWithUs />
        <Servicios />
        <OrdenaTuPresupuesto />
        <Contacto />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
