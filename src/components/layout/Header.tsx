import { Package, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpeg';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Contacto', href: '#contacto' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-2 transition-smooth hover:opacity-80">
                        <img src={logo} alt="Conectad@s.com S&A Logo" className="h-8 w-8 rounded-full object-cover" />
                        <div className="flex flex-col">
                            <span className="font-bold text-base md:text-lg text-foreground leading-tight">
                                Conectad@s.com S&A
                            </span>
                            <span className="text-xs text-muted-foreground hidden sm:block">
                                Dagua, Valle del Cauca
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
                            >
                                {item.label}
                            </a>
                        ))}
                        <Button asChild size="sm" className="shadow-primary">
                            <a href="#contacto">Contáctanos</a>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-medium text-foreground hover:text-primary transition-smooth py-2"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button asChild size="sm" className="w-full shadow-primary">
                                <a href="#contacto" onClick={() => setIsMenuOpen(false)}>
                                    Contáctanos
                                </a>
                            </Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
