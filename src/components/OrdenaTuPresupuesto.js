import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
function OrdenaTuPresupuesto() {
  return (
    <section
      class="relative bg-cover bg-center py-24 mt-24"
      style={{ backgroundImage: "url('/4.webp')" }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        class="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-white"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          Ordena tu presupuesto
        </h2>
        <p class="text-xl md:text-2xl mb-12">
          Solicita una cotización personalizada y descubre cómo podemos ayudarte
          a mantener un lugar limpio y saludable.
        </p>
        <div className="flex w-auto text-center">
          {" "}
          <Link
            href="https://wa.me/38755555555"
            className="bg-blue-700 hover:bg-blue-500 hover:transform  text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out  flex items-center justify-center"
          >
            <FaWhatsapp color="#25D366" size={25} className="mr-2" />
            Contactanos por Whatsapp
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default OrdenaTuPresupuesto;
