import { MessageCircle, ArrowRight, Truck, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/bussines-into.jpeg';
import { BUSINESS_INFO, WHATSAPP_MESSAGE } from '@/constants/contact';
/**
 *
 * @description Hero section component for the homepage.
 * @returns {JSX.Element} The Hero section JSX element.
 */
const Hero = () => {
    const whatsappLinkShipping = `https://wa.me/${BUSINESS_INFO.contact.shipping.whatsapp}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
    )}`;
    const whatsappLinkStationery = `https://wa.me/${
        BUSINESS_INFO.contact.stationery.whatsapp
    }?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Interior de Papelería Conectad@s.com S&A"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/75 to-foreground/70"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                        Conectamos Dagua con todo Colombia
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/95 font-light animate-fade-in max-w-2xl mx-auto">
                        Envíos rápidos y seguros con Inter Rapidísimo. Tu aliado local para todo lo que necesitas.
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
                            className="w-full sm:w-auto text-base font-semibold bg-primary text-foreground hover:bg-primary-hover shadow-lg hover:shadow-xl transition-smooth"
                        >
                            <a href={whatsappLinkShipping} target="_blank" rel="noopener noreferrer">
                                <Truck className="mr-2 h-5 w-5" />
                                WhatsApp Envíos
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto text-base font-semibold bg-primary text-foreground hover:bg-primary-hover shadow-lg hover:shadow-xl transition-smooth"
                        >
                            <a href={whatsappLinkStationery} target="_blank" rel="noopener noreferrer">
                                <Pencil className="mr-2 h-5 w-5" />
                                WhatsApp Papelería
                            </a>
                        </Button>
                    </div>

                    {/* Quick Info */}
                    <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div>
                            <p className="font-semibold mb-1">Horario</p>
                            <p className="text-white/90">
                                {BUSINESS_INFO.hours.weekdays}, {BUSINESS_INFO.hours.time}
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold mb-1">Ubicación</p>
                            <p className="text-white/90">
                                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city},{' '}
                                {BUSINESS_INFO.address.state}
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold mb-1">Teléfonos</p>
                            <p className="text-white/90">Envíos: {BUSINESS_INFO.contact.shipping.phone}</p>
                            <p className="text-white/90">Papelería: {BUSINESS_INFO.contact.stationery.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
