import React from 'react';

const Products = () => {
  const products = [
    {
      imageSrc: '/images/image 0.png',
      description: 'Edificio-Construcción en seco',
    },
    {
      imageSrc: '/images/image 1.png',
      description: 'Descripción del producto 1',
    },
    {
      imageSrc: '/images/image 2.png',
      description: 'Descripción del producto 2',
    },
    {
      imageSrc: '/images/image 3.png',
      description: 'Descripción del producto 3',
    },
    {
      imageSrc: '/images/image 4.png',
      description: 'Descripción del producto 4',
    },
    {
      imageSrc: '/images/image 5.png',
      description: 'Descripción del producto 5',
    },
    {
      imageSrc: '/images/image 6.png',
      description: 'Descripción del producto 6',
    },
    {
      imageSrc: '/images/image 7.png',
      description: 'Descripción del producto 7',
    },
    {
      imageSrc: '/images/image 8.png',
      description: 'Descripción del producto 8',
    },
    {
      imageSrc: '/images/image 9.png',
      description: 'Descripción del producto 9',
    },
    {
      imageSrc: '/images/image 10.png',
      description: 'Descripción del producto 10',
    },
    {
      imageSrc: '/images/image 11.png',
      description: 'Descripción del producto 11',
    },
    {
      imageSrc: '/images/image 12.png',
      description: 'Descripción del producto 12',
    },
    {
      imageSrc: '/images/image 13.png',
      description: 'Descripción del producto 13',
    },
    {
      imageSrc: '/images/image 14.png',
      description: 'Descripción del producto 14',
    },
    {
      imageSrc: '/images/image 15.png',
      description: 'Descripción del producto 15',
    },
    {
      imageSrc: '/images/image 16.png',
      description: 'Descripción del producto 16',
    },
    {
      imageSrc: '/images/image 17.png',
      description: 'Descripción del producto 17',
    },
    {
      imageSrc: '/images/image 18.png',
      description: 'Descripción del producto 18',
    },
    {
      imageSrc: '/images/image 19.png',
      description: 'Descripción del producto 19',
    },
    {
      imageSrc: '/images/image 20.png',
      description: 'Descripción del producto 20',
    },
    {
      imageSrc: '/images/image 21.png',
      description: 'Descripción del producto 21',
    },
    {
      imageSrc: '/images/image 22.png',
      description: 'Descripción del producto 22',
    },
    {
      imageSrc: '/images/image 23.png',
      description: 'Descripción del producto 23',
    },
    {
      imageSrc: '/images/image 24.png',
      description: 'Descripción del producto 24',
    },
    {
      imageSrc: '/images/image 25.png',
      description: 'Descripción del producto 25',
    },
    {
      imageSrc: '/images/image 26.png',
      description: 'Descripción del producto 26',
    },
    {
      imageSrc: '/images/image 27.png',
      description: 'Descripción del producto 27',
    },
    {
      imageSrc: '/images/image 28.png',
      description: 'Descripción del producto 28',
    },
    {
      imageSrc: '/images/image 29.png',
      description: 'Descripción del producto 29',
    },
    {
      imageSrc: '/images/image 30.png',
      description: 'Descripción del producto 30',
    },
    {
      imageSrc: '/images/image 31.png',
      description: 'Descripción del producto 31',
    },
  ];

  return (
    <div id="productos" className="mx-auto text-center py-12 bg-slate-200">
      <h2 className="text-2xl font-bold mb-4">CATÁLOGO DE PRODUCTOS</h2>
      <div className="md:flex-row max-w-6xl lg:mx-auto rounded-lg shadow-lg m-4 p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4    ">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
            <img 
              src={product.imageSrc} 
              alt={`Product ${index}`} 
              className="mx-auto mb-4 object-cover h-48 w-full rounded-lg hover:scale-150 transition-scale duration-200 ease-in" 
            />
            <p className='text-sm font-semibold shadow-md'>{product.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;




/*
import React from 'react';

const Products = () => {
  return (
    <div id="productos" className="mx-auto text-center py-8 bg-slate-200">
      <h2 className="text-2xl font-bold mb-4">CATALOGO DE PRODUCTOS</h2>
      {/* Imágenes y descripciones de productos }
    </div>
  );
};

export default Products;*/
