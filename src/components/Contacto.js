import Image from 'next/image'
import React from 'react'

function Contacto() {
  return (
    <section className="bg-gray-100 py-20">
    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        Contáctanos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/hospital1.png"
            alt="Contacto"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¡Contáctanos para solicitar un presupuesto sin compromiso!
            </h3>
            <p className="text-lg md:text-xl text-center">
              Llena el formulario y nos pondremos en contacto contigo lo antes
              posible.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center">
          <form>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-gray-700 font-bold mb-2"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="mensaje"
                className="block text-gray-700 font-bold mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                className="border border-gray-400 p-2 w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
      )
}

export default Contacto