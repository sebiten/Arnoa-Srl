import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuClasses = isMenuOpen ? "block" : "hidden";

  return (
    <nav className="bg-blue-700 py-4 opacity-70 fixed z-10 w-full top-[-10px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#" className="font-bold text-white text-xl">
              <Image src="/logo_.png" alt="Logo" width={150} height={100} />
            </Link>
          </div>
          <div className=" xl:flex sm:hidden flex flex-col items-center justify-center">
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
                    d="M20.293 4.293a1 1 0 010 1.414L5.414 21.707a1 1 0 01-1.414-1.414L18.586 4.293a1 1 0 011.414 0z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
                  />
                )}
              </svg>
            </button>
            <ul
              className={`${menuClasses} text-center md:inline-flex md:flex-row md:ml-auto mt-2 md:mt-0`}
            >
              <li>
                <Link
                  href="#"
                  className="block text-white hover:bg-blue-500  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
