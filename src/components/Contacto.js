import Image from "next/image";
import React from "react";
import { FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

function Contacto() {
  return (
    <section className="py-20 2xl:w-full mx-auto" id="contacto">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Contáctanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/hospital1.png"
              alt="Contacto"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¡Contáctanos para solicitar un presupuesto sin compromiso!
              </h3>
              <p className="text-lg md:text-xl ">
                Llena el formulario y nos pondremos en contacto contigo lo antes
                posible.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center">
            <h3 className="font-bold text-center text-3xl">
              Informacion de contacto
            </h3>
            <div className="flex flex-col gap-2 mt-8">
              <p>Telefono: 123456789</p>
              <p>
                Correo:
                <a href="mailto:ventas@arnoa.com">ventas@arnoa.com</a>
              </p>
              <p>Direccion: Calle falsa 123</p>
              <p>
                Horarios de atencion: Luneas a Viernes de 09:00hs a 18:00hs{" "}
              </p>
              <button className="bg-blue-700 hover:bg-blue-500 hover:transform  text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out mt-8 flex items-center justify-center">
                <FaMailBulk className='mr-2' color="#25D366" size={25} />
                <Link href="mailto:ventas@arnoa.com">Contactar por correo</Link>
              </button>
              <button className="bg-blue-700 hover:bg-blue-500 hover:transform  text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center">
                <FaWhatsapp className='mr-2' color="#25D366" size={25} />
                <Link href="https://wa.me/38755555555">
                  Contactar por Whatsapp
                </Link>
              </button>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
