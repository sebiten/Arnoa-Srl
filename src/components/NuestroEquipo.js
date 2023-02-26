import React from 'react';
import Image from 'next/image';

const NuestroEquipo = () => {
  const equipo = [
    {
      nombre: 'Juan Perez',
      puesto: 'Gerente de Operaciones',
      imagen: '/imagenes/juan_perez.jpg',
    },
    {
      nombre: 'Maria Gonzalez',
      puesto: 'Gerente de Ventas',
      imagen: '/imagenes/maria_gonzalez.jpg',
    },
    {
      nombre: 'Luis Torres',
      puesto: 'Encargado de Mantenimiento',
      imagen: '/imagenes/luis_torres.jpg',
    },
    {
      nombre: 'Ana Jimenez',
      puesto: 'Supervisora de Limpieza',
      imagen: '/imagenes/ana_jimenez.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestro Equipo</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {equipo.map((miembro) => (
            <div key={miembro.nombre} className="bg-white rounded-lg shadow-lg p-4 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image src={miembro.imagen} alt={miembro.nombre} layout="fill" className="rounded-full" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{miembro.nombre}</h3>
              <p className="text-gray-600">{miembro.puesto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NuestroEquipo;
