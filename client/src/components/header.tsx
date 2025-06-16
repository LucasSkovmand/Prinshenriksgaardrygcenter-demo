import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-trust-blue rounded-lg flex items-center justify-center">
              <Activity className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-800">Prins Henriks Gård</h1>
              <p className="text-sm text-slate-600">Rygcenter Syddanmark</p>
            </div>
          </div>
          
          {/* Navigation - Always visible */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <button 
              onClick={() => scrollToSection('forside')}
              className="text-slate-700 hover:text-trust-blue transition-colors duration-200 font-medium text-sm md:text-base"
            >
              Forside
            </button>
            <button 
              onClick={() => scrollToSection('om-os')}
              className="text-slate-700 hover:text-trust-blue transition-colors duration-200 font-medium text-sm md:text-base"
            >
              Om os
            </button>
            <button 
              onClick={() => scrollToSection('behandlinger')}
              className="text-slate-700 hover:text-trust-blue transition-colors duration-200 font-medium text-sm md:text-base"
            >
              Behandlinger
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-slate-700 hover:text-trust-blue transition-colors duration-200 font-medium text-sm md:text-base"
            >
              Team
            </button>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-trust-blue text-white hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base px-3 py-1 md:px-4 md:py-2"
            >
              Kontakt
            </Button>
          </div>
        </div>
        

      </nav>
    </header>
  );
}
