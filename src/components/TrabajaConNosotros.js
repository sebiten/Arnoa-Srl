import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";

const WorkWithUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      F
      className="relative bg-transparent py-20"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-blue-800"
        style={{
          backgroundColor: ``,
          backgroundSize: "cover",
          opacity: 0.3,
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl my-4 lg:text-5xl font-bold text-gray-900 text-center">
          ¿Quieres trabajar con nosotros?
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl lg:text-xl text-center">
          Envíanos tu currículum vitae y forma parte de nuestro equipo de
          trabajo.
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <button className="bg-blue-700 hover:bg-blue-500 hover:transform  text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out mt-8 flex items-center justify-center">
          <Link href="mailto:rrhh@arnoa.com.ar">Enviar correo</Link>
          <FaMailBulk
            size={25}
          color="#25D366" className="inline ml-2" />
        </button>
      </div>
    </motion.div>
  );
};

export default WorkWithUs;
