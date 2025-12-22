"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, BadgeCheck } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[var(--color-off-white)]">
            {/* Dynamic Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-blush)] rounded-full blur-[100px] opacity-60 animate-[float_8s_ease-in-out_infinite]" />
            <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[var(--color-coral-start)] rounded-full blur-[120px] opacity-20 animate-[float_10s_ease-in-out_infinite_reverse]" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-[var(--color-navy)] text-sm font-semibold shadow-sm">
                        <BadgeCheck className="w-5 h-5 text-[var(--color-coral-start)]" />
                        Quiropraxia Avançada e Integrativa
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-[var(--color-navy)] leading-[1.15]">
                        Recupere sua <span className="text-transparent bg-clip-text bg-linear-to-r from-[var(--color-deep-purple)] to-[var(--color-neon-pink)]">Mobilidade</span> e viva sem dor.
                    </h1>

                    <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                        Diagnóstico preciso e tratamento especializado para dores nas costas, cervical, hérnia de disco e correção postural.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button variant="primary" icon={ArrowRight}>
                            Agendar Avaliação
                        </Button>
                        <Button variant="secondary">
                            Saiba como funciona
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">
                                    user
                                </div>
                            ))}
                        </div>
                        <p>+5.000 pacientes atendidos<br />em Florianópolis</p>
                    </div>
                </motion.div>

                {/* Hero Image / Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Main Photo Placeholder */}
                    <div className="relative z-20 w-full h-[600px] bg-gradient-to-b from-transparent to-[var(--color-off-white)]">
                        <div className="w-[80%] mx-auto h-full bg-gray-200 rounded-t-[100px] relative overflow-hidden shadow-2xl">
                            {/* Replace with actual doctor photo */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                                Foto da Dra. Emanuelle
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)]/30 to-transparent"></div>
                        </div>
                    </div>

                    {/* Floating Card Element */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 left-10 z-30 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 max-w-[200px]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <BadgeCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-semibold">Resultado</p>
                                <p className="text-sm font-bold text-[var(--color-navy)]">Alívio Imediato</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
