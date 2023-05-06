import Slider from "react-slick";
import { Link } from "react-scroll";
import Image from "next/image";
import { images } from "@/Images/Heros";
import { motion } from "framer-motion";
import { FaMailBulk, FaWhatsapp } from "react-icons/fa";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
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
    dots: true,
  };

  return (
    <>
      <Slider className="relative h-screen w-full" {...settings}>
        {images.map((image, index) => (
          <div className="relative h-screen w-screen" key={index}>
            <div className="relative">
              <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-80"></div>
              <Image
                width={500}
                height={500}
                src={image}
                alt={`image ${index + 1}`}
                className="object-cover w-screen h-screen"
              />
            </div>
          </div>
        ))}
      </Slider>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center mx-4"
      >
        <h1 className="text-4xl font-bold text-center text-white xl:text-6xl">
          Bienvenidos a CleanSide
        </h1>
        <h2 className="text-lg font-bold text-center text-white xl:text-xg">
          Servicio de limpieza en el norte de Argentina
        </h2>
        <p className="text-sm font-normal text-center my-4 w-full lg:w-1/2 mx-auto xl:text-lg text-white">
          En CleanSide, estamos comprometidos con tu seguridad y protección. Por
          eso, ofrecemos servicios especializados de limpieza y desinfección
          para prevenir la propagación del COVID-19 en Consorcios, Oficinas,
          Industrias e Instituciones públicas y privadas en todo el norte
          argentino.
        </p>
        <div className="flex mx-auto text-center">
          <Link
            href="wa.me/5491130000000"
            className="bg-blue-700 opacity-80 text-white font-bold py-1 px-4 rounded-full hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out flex items-center justify-center"
          >
            <FaWhatsapp color="#25D366" size={25} className="mr-2" />
            Contactanos por Whatsapp
          </Link>
          <Link
            href="wa.me/5491130000000"
            className="bg-blue-700 opacity-80 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out flex items-center justify-center xs:hidden sm:flex"
          >
            <FaMailBulk color="#25D366" size={25} className="mr-2 " />O por Email
          </Link>
        </div>
      </motion.div>
      <Link href="/">
        <Image
          src="/logo_.png"
          alt="Picture of the author"
          width={100}
          height={100}
          className="xl:absolute xl:bottom-2 xl:left-2 xl:z-10"
        />
      </Link>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <Link to="scroll-target" smooth={true} duration={1000}>
          <svg
            className="animate-bounce h-10 w-10 text-white hover:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
      <div id="scroll-target"></div>
    </>
  );
};

export default HeroCarousel;
