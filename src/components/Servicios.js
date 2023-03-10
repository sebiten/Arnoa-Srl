import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      nombre: "Limpieza de oficinas",
      descripcion:
        "Mantenemos tus oficinas limpias y ordenadas para que puedas enfocarte en tu negocio.",
      icono: "/4.webp",
    },
    {
      id: 2,
      nombre: "Limpieza de hogares",
      descripcion:
        "Ofrecemos servicios de limpieza para hogares para que puedas disfrutar de tu tiempo libre.",
      icono: "/3.webp",
    },
    {
      id: 3,
      nombre: "Limpieza de espacios en general",
      descripcion:
        "Dejamos tus ventanas y cristales limpios y relucientes para que puedas disfrutar de las vistas.",
      icono: "/5.webp",
    },
  ];

  return (
    <section className="xl:w-10/12 mx-auto my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}

        className="w-full mx-auto px-6 sm:px-10 lg:px-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Nuestros servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={servicio.icono}
                  alt={servicio.nombre}
                  width={400}
                  height={400}
                  className="object-cover rounded-lg mx-auto xl:w-[700px] xl:h-[400px] xl:mb-36 h-[300px] w-[700px]"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{servicio.nombre}</h3>
              <p className="text-gray-700 mb-4">{servicio.descripcion}</p>
              <ul className="text-gray-700">
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" /> Servicio
                  profesional y de calidad
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" /> Personal altamente
                  capacitado y confiable
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Equipos y
                  productos de limpieza de alta calidad
                </li>
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      
    </section>
  );
};

export default Servicios;
