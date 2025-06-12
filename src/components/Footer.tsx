import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import henriqueLogo from '../assets/henrique-logo.png';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#0B3D2E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={henriqueLogo} alt="Henrique Kratka Logo" className="h-16 w-16 rounded-lg object-contain" />
              <div>
                <div className="text-lg font-extrabold tracking-widest uppercase" style={{ letterSpacing: '0.15em', color: '#444444', fontFamily: 'sans-serif' }}>
                  HENRIQUE KRATKA
                </div>
                <div className="text-sm font-extrabold uppercase" style={{ color: '#BFA14A', letterSpacing: '0.12em' }}>
                  ADVOGADOS
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas em direito ambiental com mais de 15 anos de experiência. 
              Oferecemos soluções jurídicas completas para empresas e indivíduos 
              que precisam navegar pela complexa legislação ambiental brasileira.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Clock className="h-4 w-4" />
                <span>Seg - Sex: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-100">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-gray-300 hover:text-emerald-400 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/equipe" className="text-gray-300 hover:text-emerald-400 transition-colors">Nossa Equipe</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-emerald-400 transition-colors">Serviços</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-emerald-400 transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-100">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-emerald-400" />
                <div className="text-sm text-gray-300">
                  <p>5° Avenida, n° 182, Quadra 102, Lote 13</p>
                  <p>Setor Leste Universitário, Goiânia - GO</p>
                  <p>CEP: 74605-040</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-gray-300">(62) 99994-0583</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-gray-300">hbconsultoriaambiental@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Henrique Kratka Advogados. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;