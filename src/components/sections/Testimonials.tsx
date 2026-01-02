"use client";

import { Card } from "../ui/Card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const testimonials = [
        {
            name: "Ana Silva",
            role: "Paciente desde 2023",
            content: "Eu sofria com dores de cabeça constantes. Após o tratamento com a Dra. Emanuelle, minha qualidade de vida mudou completamente. Recomendo de olhos fechados!",
        },
        {
            name: "Carlos Mendes",
            role: "Atleta Amador",
            content: "A quiropraxia esportiva me ajudou a recuperar de uma lesão no joelho e melhorar meu desempenho nos treinos. O atendimento é impecável.",
        },
        {
            name: "Julia Pereira",
            role: "Advogada",
            content: "Ambiente acolhedor e profissionalismo nota 10. A Dra. explica tudo com muita clareza e o tratamento é muito eficaz.",
        }
    ];

    return (
        <section id="depoimentos" className="py-24 bg-white relative">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 0.4 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-blush)] rounded-full blur-[80px]"
            />

            <div ref={ref} className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-pink-accent)] font-bold tracking-wider text-sm uppercase">Depoimentos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mt-2">
                        O que nossos pacientes dizem
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2 + i * 0.15,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Card variant="default" className="relative pt-12 h-full">
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.4 + i * 0.15,
                                        ease: "easeOut",
                                    }}
                                    className="absolute top-0 left-8 -translate-y-1/2 bg-gradient-to-br from-[var(--color-coral-start)] to-[var(--color-coral-end)] p-3 rounded-full text-white shadow-lg"
                                >
                                    <Quote className="w-5 h-5 fill-current" />
                                </motion.div>
                                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.content}"</p>
                                <div>
                                    <strong className="block text-[var(--color-navy)]">{t.name}</strong>
                                    <span className="text-sm text-gray-400">{t.role}</span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
