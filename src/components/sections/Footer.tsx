import { MapPin, Phone, Instagram, Facebook, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[var(--color-navy)] text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 mb-16">

                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Dra. Emanuelle Schirm</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Quiropraxia especializada para você viver com mais saúde, movimento e sem dores. Agende sua avaliação e transforme sua qualidade de vida.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-coral-start)] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-coral-start)] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-pink-accent)]">Links Rápidos</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#hero" className="hover:text-white transition-colors">Início</Link></li>
                            <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre a Dra.</Link></li>
                            <li><Link href="#servicos" className="hover:text-white transition-colors">Tratamentos</Link></li>
                            <li><Link href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</Link></li>
                            <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Map */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-pink-accent)]">Contato</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                                <span>Av. Brasil, 123 - Centro<br />Ipatinga, MG </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 shrink-0" />
                                <span>(31) 9 8858-2205</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 shrink-0" />
                                <span>contato@draemanuelle.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Dra. Emanuelle Schirm. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
