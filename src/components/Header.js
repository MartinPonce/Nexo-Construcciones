import React from 'react';

const Header = () => {
  return (
    <div className="bg-slate-400 border-b shadow-md sticky top-0 p-2 ">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src="nexoconstrucciones.jpg" alt="CONSTRUCCIONES" className="shadow-xl rounded-xl h-16"/> 
          
        </div> 
          
        <div>  
          <div className="flex space-x-10 cursor-pointer py-3 text-sm font-semibold  border-b-[4px] 
                    border-b-transparent text-black">
            
              <a href="#productos" className="text-gray-900 hover:text-blue-500">Productos</a>
              <a href="#quienes-somos" className="text-gray-900 hover:text-blue-500">Quienes Somos</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header
