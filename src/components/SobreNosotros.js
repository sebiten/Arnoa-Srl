import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <FaChevronLeft />,
  nextArrow: <FaChevronRight />,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  cssEase: "ease-in-out",
  fade: true,
  arrows: false,
  dots: true,
};

function SobreNosotros() {
  return (
    <section className="bg-blue-100 py-10 sm:py-20 lg:py-36 flex">
    <div className="w-1/2 mx-auto px-6 sm:px-10 lg:px-16">
      <Slider {...settings}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Sobre nosotros
            </h2>
            <p className="text-gray-700 text-base sm:text-xl lg:text-xl mb-8">
              En Arnoa llevamos más de 20 años en el mercado, brindando
              servicios de limpieza y mantenimiento de alta calidad. Nos
              especializamos en ofrecer soluciones personalizadas y adaptadas
              a las necesidades de cada uno de nuestros clientes, con el
              objetivo de garantizar su satisfacción y bienestar. Contamos con
              un equipo altamente capacitado y comprometido con brindar un
              servicio profesional y confiable, utilizando equipos y productos
              de limpieza de última generación.
            </p>
            <Link
              href="#"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 text-center"
            >
              Conoce más sobre nosotros
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              height={500}
              width={500}
              src="/espacios-verdes1.jpg"
              alt="Sobre nosotros"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex">
          <div className="flex justify-center">
            <Image
              height={500}
              width={500}
              src="/espacios-verdes3.jpg"
              alt="Sobre nosotros"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Nuestros valores
            </h2>
            <p className="text-gray-700 text-base sm:text-xl lg:text-xl mb-8">
              En Arnoa llevamos más de 20 años en el mercado, brindando
              servicios de limpieza y mantenimiento de alta calidad. Nos
              especializamos en ofrecer soluciones personalizadas y adaptadas
              a las necesidades de cada uno de nuestros clientes, con el
              objetivo de garantizar su satisfacción y bienestar. Contamos con
              un equipo altamente capacitado y comprometido con brindar un
              servicio profesional y confiable, utilizando equipos y productos
              de limpieza de última generación.
            </p>
            <Link
              href="#"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 text-center"
            >
              Conoce más sobre nosotros
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  </section>
  
  );
}

export default SobreNosotros;
