"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    Instagram, 
    Facebook, 
    Phone, 
    Mail, 
    MapPin, 
    Calendar, 
    ExternalLink,
    MessageCircle
} from "lucide-react";
import { CONTACT_INFO, getWhatsAppUrl } from "@/lib/contact";

const links = [
    {
        name: "Agendar Consulta",
        description: "Agende sua consulta pelo WhatsApp",
        icon: Calendar,
        href: getWhatsAppUrl("Olá! Gostaria de agendar uma consulta."),
        external: true,
        color: "bg-green-500 hover:bg-green-600",
    },
    {
        name: "WhatsApp",
        description: CONTACT_INFO.phoneDisplay,
        icon: MessageCircle,
        href: getWhatsAppUrl(),
        external: true,
        color: "bg-green-500 hover:bg-green-600",
    },
    {
        name: "Instagram",
        description: "@fisioequiroems",
        icon: Instagram,
        href: "https://instagram.com/fisioequiroems",
        external: true,
        color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90",
    },
    {
        name: "Facebook",
        description: "Siga nossa página",
        icon: Facebook,
        href: "https://facebook.com/fisioequiroems",
        external: true,
        color: "bg-blue-600 hover:bg-blue-700",
    },
    {
        name: "Email",
        description: CONTACT_INFO.email,
        icon: Mail,
        href: `mailto:${CONTACT_INFO.email}`,
        external: false,
        color: "bg-gray-700 hover:bg-gray-800",
    },
    {
        name: "Endereço",
        description: CONTACT_INFO.addressShort,
        icon: MapPin,
        href: "https://maps.google.com/?q=Av.+Brasil,+595+-+Iguaçu,+Ipatinga+-+MG,+35162-082",
        external: true,
        color: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "Site Oficial",
        description: "Conheça nosso site",
        icon: ExternalLink,
        href: "/",
        external: false,
        color: "bg-[var(--color-coral-start)] hover:bg-[var(--color-coral-end)]",
    },
];

export default function LinksPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-deep-purple)] to-[var(--color-deep-navy)] py-12 px-4">
            <div className="max-w-md mx-auto">
                {/* Profile Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    {/* Logo/Avatar */}
                    <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-white">
                        <Image
                            src="/images/logo1.png"
                            alt="Dra. Emanuelle Schirm"
                            fill
                            className="object-contain p-2"
                        />
                    </div>

                    <h1 className="text-2xl font-bold text-white mb-2">
                        Dra. Emanuelle Schirm
                    </h1>
                    <p className="text-white/70 text-sm mb-4">
                        Quiropraxia Avançada e Integrativa
                    </p>

                    {/* Contact Info Pills */}
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            Ipatinga, MG
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {CONTACT_INFO.phoneDisplay}
                        </span>
                    </div>
                </motion.div>

                {/* Links Section */}
                <div className="space-y-4">
                    {links.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className={`block w-full p-4 rounded-2xl ${link.color} text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-left flex-1 min-w-0">
                                            <h3 className="font-bold text-base">{link.name}</h3>
                                            <p className="text-white/80 text-sm truncate">{link.description}</p>
                                        </div>
                                        {link.external && (
                                            <ExternalLink className="w-5 h-5 opacity-60 shrink-0" />
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/40 text-xs">
                        © {new Date().getFullYear()} Dra. Emanuelle Schirm
                    </p>
                    <p className="text-white/30 text-xs mt-1">
                        Todos os direitos reservados
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
