import { CheckCircle } from 'lucide-react';
import storeFront from '@/assets/bussines-front.jpeg';

const About = () => {
    return (
        <section id="nosotros" className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Image */}
                    <div className="order-2 md:order-1 animate-fade-in">
                        <img
                            src={storeFront}
                            alt="Local de Papelería Conectad@s.com"
                            className="rounded-2xl shadow-primary w-full object-cover aspect-square"
                        />
                    </div>

                    {/* Content */}
                    <div className="order-1 md:order-2 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Sobre Nosotros</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            <span className="font-semibold text-foreground">Conectad@s.com</span> (Conectados Dagua S&A)
                            es tu aliado local de confianza en Dagua, Valle del Cauca. Somos distribuidores oficiales de{' '}
                            <span className="font-semibold text-primary">Inter Rapidísimo</span>, ofreciendo servicios
                            de envío y recepción de paquetes a nivel nacional.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Además de nuestros servicios de mensajería, contamos con una amplia gama de productos de
                            oficina, útiles escolares, servicios de impresión, recargas, pagos y mucho más. Nos
                            enorgullece servir a nuestra comunidad con atención personalizada y profesional.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                <p className="text-foreground">
                                    <span className="font-semibold">Aliados de Inter Rapidísimo</span> - Envíos seguros
                                    a toda Colombia
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                <p className="text-foreground">
                                    <span className="font-semibold">Atención personalizada</span> - Somos tu negocio de
                                    confianza en Dagua
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                <p className="text-foreground">
                                    <span className="font-semibold">Servicios completos</span> - Oficina, impresiones,
                                    recargas y más
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
