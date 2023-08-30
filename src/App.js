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
        className="fixed bottom-0 right-0 p-4"
      >
        {/* Aquí debes agregar el logo de WhatsApp */}
        <img src="whatsapp1.png" alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;
