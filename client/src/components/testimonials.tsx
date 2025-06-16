import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    quote: "Efter kun få behandlinger hos Dr. Hansen følte jeg en markant forbedring af mine rygsmerter. Personalet er utroligt professionelt og omsorgsfuldt.",
    name: "Anne Kristensen",
    location: "Svendborg"
  },
  {
    quote: "Fantastisk behandling og vejledning. Maria hjalp mig med at forstå mine rygproblemer og gav mig redskaber til at forebygge dem.",
    name: "Jens Pedersen",
    location: "Odense"
  },
  {
    quote: "Jeg har været patient her i over 2 år, og hver gang bliver jeg mødt med professionalisme og en virkelig personlig tilgang til min behandling.",
    name: "Lise Andersen",
    location: "Aabenraa"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-light-blue">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Hvad siger vores patienter
          </h2>
          <div className="w-24 h-1 bg-trust-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Læs om andres oplevelser med vores behandlinger og se hvordan vi har hjulpet dem
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-slate-600 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                      <User className="text-slate-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
