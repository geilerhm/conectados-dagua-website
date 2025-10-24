import { Package, Printer, Smartphone, FileText, Pencil, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Envío y Recepción de Paquetes",
      description: "Aliados de Inter Rapidísimo. Envíos seguros y rápidos a toda Colombia con seguimiento en línea.",
    },
    {
      icon: Pencil,
      title: "Artículos de Oficina y Escolares",
      description: "Amplio surtido de productos escolares, artículos de oficina y materiales para tus proyectos.",
    },
    {
      icon: Printer,
      title: "Impresiones y Escáner",
      description: "Servicios de impresión en blanco y negro, color, copias y digitalización de documentos.",
    },
    {
      icon: Smartphone,
      title: "Recargas y Pagos",
      description: "Recargas de celular, pagos de facturas de servicios públicos y otros trámites.",
    },
    {
      icon: FileText,
      title: "Gestión Documental",
      description: "Ayuda con trámites, fotocopias certificadas, encuadernación y servicios de oficina.",
    },
    {
      icon: Package,
      title: "Servicio Personalizado",
      description: "Atención dedicada para cada cliente. Si necesitas algo especial, consúltanos.",
    },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades 
            en Dagua: envíos, productos de oficina, impresiones, recargas y más.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-smooth hover:shadow-primary animate-fade-in group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-secondary group-hover:bg-primary transition-smooth">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white transition-smooth" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
