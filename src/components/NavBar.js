import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuClasses = isMenuOpen ? "flex" : "hidden";

  return (
    <nav className="bg-blue-700 py-4 opacity-95 sticky z-40 top-0 w-full main-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
          >
            <Link href="/" className="font-bold text-white text-xl">
              <Image
                className="xs:block sm:block hidden"
                src="/logo_.png"
                alt="Logo"
                width={150}
                height={100}
              />
            </Link>
          </motion.div>
          <div className=" xl:flex sm:hidden flex  items-center justify-center">
            <button
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              onClick={handleMenuClick}
            >
              <svg
                className="h-6 w-6 fill-current xl:hidden sm:block"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.343 6.343a1 1 0 011.414 0L12 10.586l4.243-4.243a1 1 0 111.414 1.414L13.414 12l4.243 4.243a1 1 0 01-1.414 1.414L12 13.414l-4.243 4.243a1 1 0 01-1.414-1.414L10.586 12 6.343 7.757a1 1 0 010-1.414z"
                    className="cursor-pointer lg:hidden"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
                    className="cursor-pointer lg:hidden"
                  />
                )}
              </svg>
            </button>
            <motion.ul
              initial={{ opacity: 0 }} // initial state
              animate={{ opacity: 1 }} // final state
              transition={{ duration: 2 }} // transition duration
              className={`${menuClasses} text-center md:flex  mt-2 md:mt-0`}
            >
              <li>
                <Link
                  href="/"
                  className="block text-white hover:bg-blue-500  px-3  rounded-md text-sm font-medium"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href={"/nosotros"}
                  className="block text-white hover:bg-blue-500 px-3 rounded-md text-sm font-medium"
                >
                  Nosotros
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  href="#contacto"
                  className="block text-white hover:bg-blue-500 px-3  rounded-md text-sm font-medium"
                >
                  Contacto
                </Link>
              </li>
            </motion.ul>
            <div className="flex items-center justify-center hover:bg-blue-500 px-3  rounded-md ">
              <Link
                href="https://wa.me/38755555555"
                className="block text-white text-sm font-medium"
              >
                +38755 555555
              </Link>
              <FaWhatsapp color="lightgreen"></FaWhatsapp>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
