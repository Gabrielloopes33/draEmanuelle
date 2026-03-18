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
            content: "Conheço Emanuelle há muitos anos e trato com a quiropraxia desde 2017. E os resultados me trazem alívio para as dores e desligamentos decorrentes da minha profissão. A Emanuelle é uma excelente profissional que se destaca pela incansável busca pelo conhecimento. Ela realiza inúmeros cursos que a habilitam em diversas técnicas, trazendo resolutividade para as necessidades dos pacientes. Em um ambiente calmo e agradável, com uma consulta individualizada e personalizada é uma profissional que se destaca em um mercado cheio de pseudos quiropraxistas que não resolvem os problemas dos pacientes.",
        },
        {
            name: "Carlos Mendes",
            role: "Atleta Amador",
            content: "Capacidade e amor pelo que faz! Esta é Emanuelle, Fisioterapeuta Quiropraxista, uma profissional que ama o que faz e não se basta do conhecimento e capacitação. A ela todo o meu respeito, agradecimento e carinho. Obrigada por sempre estar aí, para devolver ao meu corpo o equilíbrio que esta quiropraxia proporciona ❤️",
        },
        {
            name: "Julia Pereira",
            role: "Advogada",
            content: "A Emanuelle foi uma salvação para mim! Estava sofrendo com uma séria inflamação no pé, impossibilitada de andar e sentindo muita dor. Seu atendimento foi extremamente gentil e acolhedor, com muito jeito, ela fez ajustes no meu pé e corpo inteiro, pude sentir 100% de melhora do meu problema! Recomendo!"
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
