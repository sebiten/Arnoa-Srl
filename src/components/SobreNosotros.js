import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FcAbout } from "react-icons/fc";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  cssEase: "ease-in-out",
  fade: true,
  arrows: false,
};

function SobreNosotros() {
  return (
    <section className="flex sm:mt-0 flex-col gap-8 lg:flex-col xl:flex-row items-center justify-center h-full py-24 mx-6  ">
      <div className="w-full max-w-3xl mx-auto ">
        <Slider className="mx-auto sm:mb-24" {...settings}>
          <div className="mx-auto">
            <Image
              alt="Hospital"
              height={500}
              width={500}
              src="/hospital1.png"
              className="object-cover rounded-lg mx-auto xl:w-[700px] md:w-[500px] sm:w-[800px ]  h-[500px]"
            />
          </div>
          <div>
            <Image
              alt="Hospital"
              height={500}
              width={500}
              src="/hospital2.jpg"
              className="object-cover rounded-lg mx-auto xl:w-[700px] md:w-[700px] sm:w-[800px] h-[500px] "
            />
          </div>

          <div>
            <Image
              alt="Hospital"
              height={500}
              width={500}
              src="/corporativa4.jpg"
              className="object-cover rounded-lg mx-auto xl:w-[700px] md:w-[500px] sm:w-[800px] h-[500px] "
            />
          </div>
        </Slider>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        className="w-full mx-auto sm:px-24"
      >
        <h2 className="text-3xl sm:text-4xl my-4 lg:text-5xl font-bold text-gray-900 text-justify ">
          Sobre nosotros
          <FcAbout size={38} className="inline mx-auto ml-1 mb-1" />
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl lg:text-xl text-justify ">
          En Arnoa llevamos más de 20 años en el mercado, brindando servicios de
          limpieza y mantenimiento de alta calidad. Nos especializamos en
          ofrecer soluciones personalizadas y adaptadas a las necesidades de
          cada uno de nuestros clientes, con el objetivo de garantizar su
          satisfacción y bienestar. Contamos con un equipo altamente capacitado
          y comprometido con brindar un servicio profesional y confiable,
          utilizando equipos y productos de limpieza de última generación.
        </p>
        <button className="bg-blue-700 hover:bg-blue-500 hover:transform  text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out mt-8 flex items-center justify-center">
          <Link href="/nosotros">Conoce mas sobre nosotros</Link>
        </button>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 2xl:grid-cols-4 xl:pb-12 py-12 ">
          <div className="flex flex-col items-center justify-center mr-2">
            <Image
              alt="icono"
              height={60}
              width={60}
              src="/basket.png"
              className="object-cover rounded-lg mx-auto"
            />
            <p className="text-center truncate mr-2">
              Servicio Integral de limpieza
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto">
            <Image
              alt="icono"
              height={60}
              width={60}
              src="/award.png"
              className="object-cover rounded-lg mx-auto "
            />
            <p className="text-center">Empleados capacitados</p>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto">
            <Image
              alt="icono"
              height={60}
              width={60}
              src="/handshake.png"
              className="object-cover rounded-lg mx-auto "
            />
            <p className="text-center">Supervision Constante</p>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto">
            <Image
              alt="icono"
              height={60}
              width={60}
              src="/search.png"
              className="object-cover rounded-lg mx-auto "
            />
            <p className="text-center">Atencion Personalizada</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SobreNosotros;
