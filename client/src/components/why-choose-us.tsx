import { motion } from 'framer-motion';
import { UserCheck, Microscope, Heart } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: "Erfaring og ekspertise",
    description: "Over 20 års erfaring inden for rygbehandling og kiropraktik. Vores specialister er certificerede og følger de nyeste behandlingsprotokroller."
  },
  {
    icon: Microscope,
    title: "Moderne behandlingsmetoder",
    description: "Vi anvender de mest avancerede teknologier og evidensbaserede behandlingsmetoder for optimal patientpleje og hurtig bedring."
  },
  {
    icon: Heart,
    title: "Personlig og omsorgsfuld tilgang",
    description: "Hver patient får en individuelt tilpasset behandlingsplan. Vi tager os tid til at lytte og forstå dine specifikke behov."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Derfor vælger patienter os
          </h2>
          <div className="w-24 h-1 bg-trust-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Vi kombinerer årtiers erfaring med moderne behandlingsmetoder for at give dig den bedste rygbehandling
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-trust-blue group-hover:scale-110 transition-all duration-300">
                <feature.icon className="text-2xl text-trust-blue group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
