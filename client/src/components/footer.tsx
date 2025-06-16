import { Activity, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-trust-blue rounded-lg flex items-center justify-center">
                <Activity className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Prins Henriks Gård</h3>
                <p className="text-sm text-slate-300">Rygcenter Syddanmark</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Specialister i rygbehandling, kiropraktik og helhedsorienteret rygsundhed i Syddanmark siden 2003.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hurtig navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('forside')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Forside
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('om-os')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Om os
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('behandlinger')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Behandlinger
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Vores team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Behandlinger</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('behandlinger')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Kiropraktik
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('behandlinger')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Fysioterapi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('behandlinger')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Massage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('behandlinger')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Akupunktur
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('behandlinger')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Genoptræning
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="text-trust-blue mr-3 flex-shrink-0" size={16} />
                <span className="text-slate-300">Prins Henriks Ave 10<br />6400 Sønderborg</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-trust-blue mr-3 flex-shrink-0" size={16} />
                <span className="text-slate-300">+45 74 62 85 90</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-trust-blue mr-3 flex-shrink-0" size={16} />
                <span className="text-slate-300">info@rygcenter-syddanmark.dk</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Prins Henriks Gård Rygcenter Syddanmark. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}
