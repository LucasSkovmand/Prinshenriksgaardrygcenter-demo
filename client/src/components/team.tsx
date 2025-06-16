import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Dr. Lars Hansen",
    title: "Kiropraktor & Klinikdirektør",
    experience: "25 års erfaring inden for kiropraktik med speciale i rygbehandling og postural korrektion.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Maria Sørensen",
    title: "Fysioterapeut",
    experience: "Specialiseret i manuel terapi og genoptræning med fokus på evidensbaseret behandling.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Thomas Nielsen",
    title: "Massageterapeut",
    experience: "Certificeret i terapeutisk massage og trigger point terapi med 15 års erfaring.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Mød vores team</h2>
          <div className="w-24 h-1 bg-trust-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Vores erfarne specialister er dedikerede til at hjælpe dig med at opnå optimal rygsundhed
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{member.name}</h3>
              <p className="text-trust-blue font-medium mb-3">{member.title}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{member.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
