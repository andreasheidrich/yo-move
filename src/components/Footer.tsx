
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yoga-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">YO! MOVE</h3>
            <p className="text-gray-300">
              Wissenschaftlich fundiertes Yoga für bessere Beweglichkeit, 
              Flexibilität und Wohlbefinden. Keine Religion, keine Dogmen - nur effektives Training.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:YOMOVE@gmx.de" className="hover:text-yoga-accent transition-colors">
                  YOMOVE@gmx.de
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+4917647098233" className="hover:text-yoga-accent transition-colors">
                  +49 176 47098233
                </a>
              </li>
              <li>München, Deutschland</li>
              <li>Playa del Ingles-Maspalomas, Gran Canaria</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yoga-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/qualifications" className="text-gray-300 hover:text-yoga-accent transition-colors">
                  Qualifikationen
                </Link>
              </li>
              <li>
                <Link to="/english" className="text-gray-300 hover:text-yoga-accent transition-colors">
                  English
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-300 hover:text-yoga-accent transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-gray-300 hover:text-yoga-accent transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>©{currentYear} YO! MOVE. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
