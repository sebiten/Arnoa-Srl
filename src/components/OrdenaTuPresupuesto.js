import React from "react";

function OrdenaTuPresupuesto() {
  return (
    <section
      class="relative bg-cover bg-center py-24"
      style={{ backgroundImage: "url('/Corporativa4.jpg')" }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-white">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          Ordena tu presupuesto
        </h2>
        <p class="text-xl md:text-2xl mb-12">
          Solicita una cotización personalizada y descubre cómo podemos ayudarte
          a mantener un lugar limpio y saludable.
        </p>
        <button class="bg-white text-gray-800 py-3 px-8 rounded-full shadow-lg font-bold hover:bg-gray-100 transition duration-300">
          Solicitar cotización
        </button>
      </div>
    </section>
  );
}

export default OrdenaTuPresupuesto;
