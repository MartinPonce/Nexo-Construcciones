// Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        
        <h2 className="text-xl font-bold mb-2">Contáctenos</h2>
        <p>Cel. (266) 500 9553</p>
        <p className="mb-4">nexoconstrucciones9@gmail.com</p>
        <p>Falucho 359</p>
        <p>San Luis, Capital, Argentina</p>
        <p>Copyright© & Marca Registrada®, 2023.</p>
        <p> Todos los derechos reservados.</p>
        <p> Powered by MDP+11®.</p>
      
        <div className="flex justify-center items-center mt-4">
            <a href="https://www.facebook.com/profile.php?id=61554498043678" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/nexo_construcciones9/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
