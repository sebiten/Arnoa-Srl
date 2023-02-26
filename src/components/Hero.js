import { useState, useEffect } from "react";
import HeroCarousel from "./HeroCarrousel";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative">
      <HeroCarousel />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      <div className="absolute inset-0 text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-bold text-center">Bienvenidos a Arnoa</h1>

        <div className="text-white">
          <p className="text-lG font-normal text-center my-4 w-full lg:w-1/2  mx-auto">
            Mantén tus espacios seguros y protegidos con nuestros servicios de
            desinfección y limpieza especializados para prevenir la propagación
            del COVID-19 en Consorcios, Oficinas, Industrias e Instituciones
            tanto públicas como privadas.
          </p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          Contactanos Ahora!
        </button>
      </div>
      <Link href="/">
        <Image
          src="/logo_.png"
          alt="Picture of the author"
          width={150}
          height={100}
          className="xl:absolute xl:bottom-10 xl:left-2 xl:z-10"
        />
      </Link>
    </div>
  );
}

export default Hero;
