"use client";

import { Card } from "../ui/Card";
import { Activity, UserCheck, Accessibility, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            title: "Dores na Coluna",
            description: "Tratamento eficaz para lombalgia, cervicalgia e dores ciáticas.",
            icon: Activity,
        },
        {
            title: "Hérnia de Disco",
            description: "Método não-cirúrgico para alívio de dores causadas por hérnias.",
            icon: UserCheck,
        },
        {
            title: "Postura e Ergonomia",
            description: "Correção postural para prevenir lesões e melhorar a qualidade de vida.",
            icon: Accessibility,
        },
        {
            title: "Quiropraxia Esportiva",
            description: "Aumento de performance e prevenção de lesões para atletas.",
            icon: Laptop, // Using generic icon for now, could be replaced
        },
    ];

    return (
        <section id="servicos" className="py-24 bg-[var(--color-off-white)] relative overflow-hidden">
            {/* Decorative background element with parallax */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-[var(--color-blush)]/30 to-transparent -skew-y-6 transform origin-left"
            />

            <div ref={ref} className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="text-[var(--color-pink-accent)] font-bold tracking-wider text-sm uppercase">Tratamentos Especializados</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mt-2">
                        Cuidado integral para sua saúde
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Utilizamos técnicas avançadas para tratar a causa da dor, não apenas os sintomas.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <Card variant="glass" className="flex flex-col items-start gap-4 hover:bg-white/60 transition-all duration-300 h-full">
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                    className="p-3 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] text-white shadow-lg shadow-orange-500/20"
                                >
                                    <service.icon className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
