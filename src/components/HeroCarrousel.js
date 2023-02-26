import Slider from "react-slick";
import { Link } from "react-scroll";
import Image from "next/image";
import { images } from "@/Heros/Heros";

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
      <Slider {...settings}>
        {images.map((image, index) => (
          <div 
            className="relative h-screen w-full"
          key={index}>
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              <Image
                width={500}
                height={500}
                src={image}
                alt={`Movie ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-center text-white">
            Bienvenidos a Arnoa
          </h1>
          <p className="text-lG font-normal text-center my-4 w-full lg:w-1/2  mx-auto text-white">
            Mantén tus espacios seguros y protegidos con nuestros servicios de
            desinfección y limpieza especializados para prevenir la propagación
            del COVID-19 en Consorcios, Oficinas, Industrias e Instituciones
            tanto públicas como privadas.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            Contactanos Ahora!
          </button>
        </div>
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