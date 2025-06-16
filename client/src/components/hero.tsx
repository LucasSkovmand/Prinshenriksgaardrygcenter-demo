import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="forside" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2353&h=1569')`
        }}
      >
        <div className="absolute inset-0 bg-slate-900 bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            <span className="block font-normal">Prins Henriks Gård</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-blue-200 mt-2">
              Rygcenter Syddanmark
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            Specialister i rygbehandling, kiropraktik og helhedsorienteret rygsundhed med over 20 års erfaring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('kontakt')}
              size="lg"
              className="bg-trust-blue text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Book konsultation
            </Button>
            <Button
              onClick={() => scrollToSection('om-os')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-800 transition-all duration-300"
            >
              Læs mere om os
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
