import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Kiropraktisk behandling",
    description: "Traditionel kiropraktik kombineret med moderne teknikker for optimal rygjustering og smertelindring.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Fysioterapi",
    description: "Specialiseret fysioterapi med fokus på styrketræning, mobilitet og genoptræning efter skader.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Massageterapi",
    description: "Terapeutisk massage for muskelafspænding, forbedret cirkulation og smertelindring.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Akupunktur",
    description: "Traditionel akupunktur for smertelindring og forbedring af kroppens naturlige helingsprocesser.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Ergonomisk rådgivning",
    description: "Professionel vurdering af din arbejdsplads og daglige vaner for at forebygge rygproblemer.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Genoptræning",
    description: "Individuelle genoptræningsprogrammer designet til at styrke din ryg og forebygge fremtidige skader.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="behandlinger" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Vores behandlinger</h2>
          <div className="w-24 h-1 bg-trust-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Vi tilbyder et bredt spektrum af behandlinger for at hjælpe dig med at opnå optimal rygsundhed
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-md transition-all duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  <Button
                    variant="link"
                    onClick={scrollToContact}
                    className="text-trust-blue hover:text-blue-700 p-0 h-auto font-medium"
                  >
                    Læs mere <ArrowRight className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
