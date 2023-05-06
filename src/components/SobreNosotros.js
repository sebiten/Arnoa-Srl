import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FcAbout } from "react-icons/fc";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const settings = {
  dots: false,
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
  arrows: true,
  nextArrow: <FaArrowRight className="text-black" color="black" />,
  prevArrow: <FaArrowLeft color="black" />,
};

function SobreNosotros() {
  return (
    <>
      <section className="flex sm:mt-10 flex-col gap-8 lg:flex-col xl:flex-row items-center justify-center h-full xl:pt-20 mx-14 xs:mt-10  ">
        <div className="w-full max-w-3xl mx-auto ">
          <Slider className="mx-auto xl:pt-16" {...settings}>
            <div className="mx-auto ">
              <Image
                alt="Hospital"
                height={500}
                width={500}
                src="/2.webp"
                className="object-cover rounded-lg mx-auto xl:w-[700px] xl:h-[400px] h-[400px] w-[700px]"
              />
            </div>
            <div>
              <Image
                alt="Hospital"
                height={500}
                width={500}
                src="/3.webp"
                className="object-cover rounded-lg mx-auto xl:w-[700px] xl:h-[400px] xl:mb-36 h-[400px] w-[700px] "
              />
            </div>

            <div>
              <Image
                alt="Hospital"
                height={500}
                width={500}
                src="/1.webp"
                className="object-cover rounded-lg mx-auto xl:w-[700px] xl:h-[400px] h-[400px] w-[700px]"
              />
            </div>
          </Slider>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="w-full mx-auto xl:mx-0 lg:w-8/12 lg:mx-24 xl:max-w-3xl xl:ml-10 2xl:mr-10"
        >
          <h2 className="text-3xl sm:text-4xl my-4 lg:text-5xl font-bold text-gray-900 text-center xl:text-justify mx-auto ">
            Sobre nosotros
            <FcAbout size={38} className="inline mx-auto ml-1 mb-1" />
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl lg:text-xl text-justify ">
            En CleanSide llevamos más de 20 años en el mercado, brindando servicios
            de limpieza y mantenimiento de alta calidad. Nos especializamos en
            ofrecer soluciones personalizadas y adaptadas a las necesidades de
            cada uno de nuestros clientes, con el objetivo de garantizar su
            satisfacción y bienestar.
          </p>
          <Link
            className="bg-blue-700 hover:bg-blue-500 hover:transform  text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out mt-8 flex items-center justify-center"
            href="/nosotros"
          >
            Conoce mas sobre nosotros
          </Link>
        </motion.div>
      </section>
      <div className="w-1/2 mx-auto xs:mt-10 xl:mt-0 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 2xl:grid-cols-4 xl:pb-12 py-8">
          <div className="flex gap-4 flex-col items-center justify-center mr-2">
            <Image
              alt="icono"
              height={100}
              width={100}
              src="/basket.png"
              className="w-[100px] h-[100px] object-cover rounded-lg mx-auto"
            />
            <p className="text-center mr-2">Servicio Integral de limpieza</p>
          </div>
          <div className="flex gap-4 flex-col items-center justify-center mx-auto">
            <Image
              alt="icono"
              height={100}
              width={100}
              src="/award.png"
              className="w-[100px] h-[100px] object-cover rounded-lg mx-auto "
            />
            <p className="text-center">Empleados capacitados</p>
          </div>
          <div className="flex gap-4 flex-col items-center justify-center mx-auto">
            <Image
              alt="icono"
              height={100}
              width={100}
              src="/handshake.png"
              className="w-[100px] h-[100px] object-cover rounded-lg mx-auto "
            />
            <p className="text-center">Supervision Constante</p>
          </div>
          <div className="flex gap-4 flex-col items-center justify-center mx-auto">
            <Image
              alt="icono"
              height={100}
              width={100}
              src="/search.png"
              className="w-[100px] h-[100px] object-cover rounded-lg mx-auto "
            />
            <p className="text-center">Atencion Personalizada</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreNosotros;
