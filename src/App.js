import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Header />
      <Home />
      <About />
      <Products />
      <Contact />
      <a
        href="https://api.whatsapp.com/send?phone=NUMERO"
        className="fixed bottom-4 right-2 p-4"
      >
        {/* Aquí debes agregar el logo de WhatsApp */}
        <img src="whatsapp1.png" alt="WhatsApp" className="w-12 h-12 hover:scale-150 transition-scale duration-200 ease-in" />
      </a>
    </div>
  );
}

export default App;
