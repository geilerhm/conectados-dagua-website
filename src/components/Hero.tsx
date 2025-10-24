import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const whatsappNumber = "573205890820";
  const whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior de Papelería Conectad@s.com"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            Conectamos Dagua con todo Colombia
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/95 font-light animate-fade-in max-w-2xl mx-auto">
            Envíos rápidos y seguros con Inter Rapidísimo. 
            Atención cercana y servicios completos de papelería.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base font-semibold shadow-lg hover:shadow-xl transition-smooth"
            >
              <a href="#servicios">
                Ver servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-base font-semibold bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-smooth"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold mb-1">Horario</p>
              <p className="text-white/90">Lunes a Sábado, 8:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Ubicación</p>
              <p className="text-white/90">Calle 10 #21-05, Dagua, Valle</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Teléfono</p>
              <p className="text-white/90">+57 320 589 0820</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
