import React from 'react';

const EmpresasTrabajadas = () => {
  const empresas = [
    "ABC Company",
    "XYZ Corporation",
    "Acme Inc.",
    "Happy Homes",
    "GreenTech Solutions",
    "Grand Hotel",
    "Local Pharmacy",
    "Modern Office Solutions",
    "Sunrise Mall",
    "Verona Restaurant",
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Empresas con las que hemos trabajado</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {empresas.map((empresa) => (
            <div key={empresa} className="bg-white rounded-lg shadow-lg p-4">
              <p className="text-gray-800 font-semibold">{empresa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpresasTrabajadas;
