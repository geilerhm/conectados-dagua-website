import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "573205890820";
  const whatsappMessage = "Hola, me gustaría obtener más información.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send to a backend
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto. También puedes escribirnos por WhatsApp.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Calle 10 #21-05, Barrio Ricaurte\nDagua, Valle del Cauca, Colombia",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+57 320 589 0820",
    },
    {
      icon: Mail,
      title: "Email",
      content: "conectadosdagua@gmail.com",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lunes a Sábado\n8:00 AM - 6:00 PM",
    },
  ];

  return (
    <section id="contacto" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos aquí para ayudarte. Visítanos, llámanos o escríbenos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-smooth">
                  <CardContent className="p-6 flex gap-4">
                    <div className="shrink-0">
                      <div className="p-3 rounded-xl bg-secondary">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Social Links */}
            <Card className="border-2 border-primary bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Síguenos y contáctanos</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href="https://www.instagram.com/papeleria_conectados"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="mr-2 h-5 w-5" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-primary h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.123456789!2d-76.685!3d3.657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzknMjUuMiJOIDc2wrA0MScwNi4wIlc!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Papelería Conectad@s.com"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Envíanos un mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full shadow-primary" size="lg">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
