import React from 'react';

const Products = () => {
  const products = [
    {
      imageSrc: '/images/image 0.png',
      description: 'Edificio-Construcción en seco',
    },
    {
      imageSrc: '/images/image 1.png',
      description: 'Construcción Tradicional',
    },
    {
      imageSrc: '/images/image 2.png',
      description: 'Acero Estructural',
    },
    {
      imageSrc: '/images/image 3.png',
      description: 'Construcción Residencial en Madera',
    },
    {
      imageSrc: '/images/image 4.png',
      description: 'Construcción con Paneles o Revestimientos de Chapa',
    },
    {
      imageSrc: '/images/image 5.png',
      description: 'Amoblamiento de Cocinas',
    },
    {
      imageSrc: '/images/image 6.png',
      description: 'Amoblamiento de Cocinas',
    },
    {
      imageSrc: '/images/image 7.png',
      description: 'Amoblamiento de Cocinas',
    },
    {
      imageSrc: '/images/image 8.png',
      description: 'Amoblamiento de Cocinas',
    },
    {
      imageSrc: '/images/image 9.png',
      description: 'Amoblamiento de Cocinas',
    },
    {
      imageSrc: '/images/image 10.png',
      description: 'Aberturas de Aluminio',
    },
    {
      imageSrc: '/images/image 11.png',
      description: 'Aberturas de Aluminio',
    },
    {
      imageSrc: '/images/image 12.png',
      description: 'Pinturas',
    },
    {
      imageSrc: '/images/image 13.png',
      description: 'Cerámicos',
    },
    {
      imageSrc: '/images/image 14.png',
      description: 'Cerámicos',
    },
    {
      imageSrc: '/images/image 15.png',
      description: 'Porcelanatos',
    },
    {
      imageSrc: '/images/image 16.png',
      description: 'Equipamiento Sanitario',
    },
    {
      imageSrc: '/images/image 17.png',
      description: 'Equipamiento Sanitario y Grifería',
    },
    {
      imageSrc: '/images/image 18.png',
      description: 'Modelo de Picina 1',
    },
    {
      imageSrc: '/images/image 19.png',
      description: 'Modelo de Picina 2',
    },
    {
      imageSrc: '/images/image 20.png',
      description: 'Modelo de Picina 3',
    },
    {
      imageSrc: '/images/image 21.png',
      description: 'Modelo de Picina 4',
    },
    {
      imageSrc: '/images/image 22.png',
      description: 'Modelo de Picina 5',
    },
    {
      imageSrc: '/images/image 23.png',
      description: 'Tanques de Agua',
    },
    {
      imageSrc: '/images/image 24.png',
      description: 'Tanques de Agua',
    },
    {
      imageSrc: '/images/image 25.png',
      description: 'Tubería de Polietileno de Alta Densidad',
    },
    {
      imageSrc: '/images/image 26.png',
      description: 'Tubería de Polietileno de Alta Densidad',
    },
    {
      imageSrc: '/images/image 27.png',
      description: 'Electricidad en General',
    },
    {
      imageSrc: '/images/image 28.png',
      description: 'Grifería',
    },
    {
      imageSrc: '/images/image 29.png',
      description: 'Plomería en General',
    },
    {
      imageSrc: '/images/image 30.png',
      description: 'Plomería y Grifería en General',
    },
    {
      imageSrc: '/images/image 31.png',
      description: 'Caños y Apliques de PVC (Policloruro de Vinilo)',
    },
  ];

  return (
    <div id="productos" className="mx-auto text-center py-12 bg-slate-200">
      <h2 className="text-2xl font-bold mb-4">CATÁLOGO DE PRODUCTOS</h2>
      <div className="md:flex-row max-w-6xl lg:mx-auto rounded-lg shadow-lg m-4 
        p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4    ">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
            <img 
              src={product.imageSrc} 
              alt={`Product ${index}`} 
              className="mx-auto mb-4 object-cover h-48 w-full rounded-lg hover:scale-150 
              transition-scale duration-200 ease-in" 
            />
            <p className='text-sm font-semibold shadow-md'>{product.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;





