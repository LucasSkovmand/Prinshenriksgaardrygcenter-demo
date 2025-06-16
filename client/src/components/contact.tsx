import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  treatmentType: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    treatmentType: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Besked sendt!",
        description: "Tak for din besked! Vi kontakter dig inden for 24 timer.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        treatmentType: '',
        message: ''
      });
    },
    onError: () => {
      toast({
        title: "Fejl",
        description: "Der opstod en fejl ved afsendelse af din besked. Prøv igen senere.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Manglende oplysninger",
        description: "Udfyld venligst alle obligatoriske felter.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Ugyldig e-mail",
        description: "Indtast venligst en gyldig e-mailadresse.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="kontakt" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Kontakt os</h2>
          <div className="w-24 h-1 bg-trust-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Book en konsultation eller kontakt os for mere information om vores behandlinger
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send os en besked</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Fulde navn *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Dit fulde navn"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="din@email.dk"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+45 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="treatment">Behandlingstype</Label>
                      <Select value={formData.treatmentType} onValueChange={(value) => handleInputChange('treatmentType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vælg behandling" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kiropraktik">Kiropraktisk behandling</SelectItem>
                          <SelectItem value="fysioterapi">Fysioterapi</SelectItem>
                          <SelectItem value="massage">Massageterapi</SelectItem>
                          <SelectItem value="akupunktur">Akupunktur</SelectItem>
                          <SelectItem value="ergonomisk">Ergonomisk rådgivning</SelectItem>
                          <SelectItem value="genoptræning">Genoptræning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Besked *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Fortæl os om dine symptomer eller spørgsmål..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-trust-blue hover:bg-blue-700"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? 'Sender...' : 'Send besked'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information & Map */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Kontaktoplysninger</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4 mt-1">
                      <MapPin className="text-trust-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Adresse</h4>
                      <p className="text-slate-600">Prins Henriks Ave 10<br />6400 Sønderborg, Danmark</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4 mt-1">
                      <Phone className="text-trust-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Telefon</h4>
                      <p className="text-slate-600">+45 74 62 85 90</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4 mt-1">
                      <Mail className="text-trust-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">E-mail</h4>
                      <p className="text-slate-600">info@rygcenter-syddanmark.dk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mr-4 mt-1">
                      <Clock className="text-trust-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Åbningstider</h4>
                      <div className="text-slate-600 text-sm">
                        <p>Mandag - Fredag: 08:00 - 18:00</p>
                        <p>Lørdag: 09:00 - 14:00</p>
                        <p>Søndag: Lukket</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Interactive Map */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2269.4569!2d9.7864!3d54.9103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUHJpbnMgSGVucmlrcyBBdmUgMTAsIDY0MDAgU8O4bmRlcmJvcmcsIERhbm1hcms!5e0!3m2!1sda!2sdk!4v1671000000000!5m2!1sda!2sdk"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prins Henriks Gård Rygcenter Syddanmark - Prins Henriks Ave 10, 6400 Sønderborg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
