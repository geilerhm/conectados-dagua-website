import { Package, Instagram, Mail, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/contact';

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
                                <h3 className="font-bold text-lg">{BUSINESS_INFO.name}</h3>
                                <p className="text-sm text-background/80">{BUSINESS_INFO.legalName}</p>
                            </div>
                        </div>
                        <p className="text-background/80 text-sm leading-relaxed">
                            Tu aliado local en {BUSINESS_INFO.address.city} para envíos, servicios de oficina,
                            impresiones y más. Distribuidores oficiales de Inter Rapidísimo.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Contacto</h4>
                        <div className="space-y-2 text-sm text-background/80">
                            <p className="flex items-start gap-2">
                                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>{BUSINESS_INFO.phone}</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>{BUSINESS_INFO.email}</span>
                            </p>
                            <p className="text-background/80">
                                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.neighborhood}
                                <br />
                                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state},{' '}
                                {BUSINESS_INFO.address.country}
                            </p>
                        </div>
                    </div>

                    {/* Hours & Social */}
                    <div>
                        <h4 className="font-semibold mb-4">Horario</h4>
                        <p className="text-sm text-background/80 mb-4">
                            {BUSINESS_INFO.hours.weekdays}
                            <br />
                            {BUSINESS_INFO.hours.time}
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={BUSINESS_INFO.social.instagram}
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
                    <p>
                        © {currentYear} {BUSINESS_INFO.name} - {BUSINESS_INFO.legalName}. Todos los derechos
                        reservados.
                    </p>
                    <p className="mt-2">
                        <a href={`https://${BUSINESS_INFO.website}`} className="hover:text-primary transition-smooth">
                            {BUSINESS_INFO.website}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
