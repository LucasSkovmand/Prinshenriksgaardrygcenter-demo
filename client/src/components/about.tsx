import { motion } from 'framer-motion';
import { Award, Users, IdCard, Heart } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: "20+ års erfaring",
    subtitle: "Dokumenteret ekspertise"
  },
  {
    icon: Users,
    title: "5000+ patienter",
    subtitle: "Succesfuldt behandlet"
  },
  {
    icon: IdCard,
    title: "Certificerede specialister",
    subtitle: "Kontinuerlig uddannelse"
  },
  {
    icon: Heart,
    title: "Personlig pleje",
    subtitle: "Individuel tilgang"
  }
];

export default function About() {
  return (
    <section id="om-os" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
              Om Prins Henriks Gård Rygcenter
            </h2>
            <div className="w-24 h-1 bg-trust-blue mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Siden 2003 har vi været førende inden for rygbehandling i Syddanmark. Vores center kombinerer 
              traditionelle behandlingsmetoder med moderne teknologi for at give vores patienter den bedst mulige pleje.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Vi tror på en helhedsorienteret tilgang til rygsundhed, hvor vi ikke kun behandler symptomerne, 
              men også arbejder med forebyggelse og livsstilsændringer for at sikre langvarig sundhed og trivsel.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4">
                    <achievement.icon className="text-trust-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{achievement.title}</h4>
                    <p className="text-sm text-slate-600">{achievement.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Idyllisk dansk landskab med grønne marker og fredelig atmosfære"
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-64 h-48 rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Moderne klinikfaciliteter med professionelt udstyr"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
