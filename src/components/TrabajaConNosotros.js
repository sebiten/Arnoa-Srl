import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";

const WorkWithUs = () => {
  return (
    <section
      className="relative bg-cover bg-center py-24 mt-24"
      style={{ backgroundImage: "url('/2.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-white"
      >
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl my-4 lg:text-5xl font-bold text-white-900 text-center">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-white-700 text-lg sm:text-xl lg:text-xl text-center">
            Envíanos tu currículum vitae y forma parte de nuestro equipo de
            trabajo.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <button className="bg-blue-700 hover:bg-blue-500 hover:transform  text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out mt-8 flex items-center justify-center">
            <Link href="mailto:rrhh@CleanSide.com.ar">Enviar correo</Link>
            <FaMailBulk size={25} color="#25D366" className="inline ml-2" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkWithUs;
