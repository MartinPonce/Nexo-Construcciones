import React from 'react';

const Home = () => {
  const backgroundImageUrl = "url('https://www.placomat.com/blog/wp-content/uploads/2021/05/claves-elegir-mejor-proveedo-materiales-construcci%C3%B3n.jpg')"; // Reemplaza con la ruta de tu imagen
  return (
    
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: backgroundImageUrl }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        
          
            <h1 className="text-3xl font-bold mt-8 mb-12 text-center sm:text-left">BIENVENIDOS A NEXO CONSTRUCCIONES</h1>
              <p className="text-md font-semibold mb-8">Pedinos tu cotización sin cargo!</p>
              <a href="https://api.whatsapp.com/send?phone=NUMERO" className="mt-4 mb-12 inline-block px-4 py-2 bg-blue-500  hover:bg-blue-800 transition-all text-white font-semibold rounded shadow-lg hover:scale-150 transition-scale duration-200 ease-in">
                CONSULTAR
              </a>
      </div>
        
    
      {/* Más contenido */}
    </div>
  );
};

export default Home;
