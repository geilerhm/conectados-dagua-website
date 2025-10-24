import { Package, Printer, Smartphone, FileText, Pencil, Truck, LucideIcon } from 'lucide-react';

export interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        icon: Truck,
        title: 'Envío y Recepción de Paquetes',
        description: 'Aliados de Inter Rapidísimo. Envíos seguros y rápidos a toda Colombia con seguimiento en línea.',
    },
    {
        icon: Pencil,
        title: 'Artículos de Oficina y Escolares',
        description: 'Amplio surtido de productos escolares, artículos de oficina y materiales para tus proyectos.',
    },
    {
        icon: Printer,
        title: 'Impresiones y Escáner',
        description: 'Servicios de impresión en blanco y negro, color, copias y digitalización de documentos.',
    },
    {
        icon: Smartphone,
        title: 'Recargas y Pagos',
        description: 'Recargas de celular, pagos de facturas de servicios públicos y otros trámites.',
    },
    {
        icon: FileText,
        title: 'Gestión Documental',
        description: 'Ayuda con trámites, fotocopias certificadas, encuadernación y servicios de oficina.',
    },
    {
        icon: Package,
        title: 'Servicio Personalizado',
        description: 'Atención dedicada para cada cliente. Si necesitas algo especial, consúltanos.',
    },
];
