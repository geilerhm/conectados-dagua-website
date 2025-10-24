import { Package, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-lg">Papelería Conectad@s.com</h3>
                <p className="text-sm text-background/80">Conectados Dagua S&A</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Tu aliado local en Dagua para envíos, servicios de oficina, impresiones y más.
              Distribuidores oficiales de Inter Rapidísimo.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+57 320 589 0820</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>conectadosdagua@gmail.com</span>
              </p>
              <p className="text-background/80">
                Calle 10 #21-05, Barrio Ricaurte<br />
                Dagua, Valle del Cauca, Colombia
              </p>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-semibold mb-4">Horario</h4>
            <p className="text-sm text-background/80 mb-4">
              Lunes a Sábado<br />
              8:00 AM - 6:00 PM
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/papeleria_conectados"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>© {currentYear} Papelería Conectad@s.com - Conectados Dagua S&A. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="https://www.conectadosdagua.co" className="hover:text-primary transition-smooth">
              www.conectadosdagua.co
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
