import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 mx-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <Link href="/" className="inline-flex items-center">
              <Image src="/logo_.png" alt="Logo" width={100} height={50} />
            </Link>
          </div>
          <div className="mt-4 md:mt-0 md:order-1">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} CleanSide, Inc. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center md:order-3">
            <Link href="/about" className="text-gray-300 hover:text-white mx-3">
              {" "}
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white mx-3"
            >
              {" "}
              Contact
            </Link>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
