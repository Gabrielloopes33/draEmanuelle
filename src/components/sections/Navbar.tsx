"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Início", href: "#hero" },
        { name: "Especialidades", href: "#servicos" },
        { name: "Sobre", href: "#sobre" },
        { name: "Depoimentos", href: "#depoimentos" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative h-12 w-48 flex items-center">
                    <Image
                        src="/images/logo1.png"
                        alt="Consultório Emanuelle Schirm"
                        width={200}
                        height={48}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-coral-start)] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" className="px-6">
                        Agendar Consulta
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[var(--color-navy)]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-[var(--color-navy)] py-2 border-b border-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" fullWidth className="mt-4">
                        Agendar via WhatsApp
                    </Button>
                </div>
            )}
        </nav>
    );
}
