import Head from "next/head";
import { Inter } from "next/font/google";
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <HeroCarousel />
        <SobreNosotros />
        <WorkWithUs/>
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
