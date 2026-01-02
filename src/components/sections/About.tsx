import { Button } from "../ui/Button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section id="sobre" className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* Part 1: What is Chiropractic */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 md:order-1 relative">
                        <div className="aspect-square bg-[var(--color-blush)] rounded-[2rem] relative z-0 transform -rotate-3"></div>
                        <div className="absolute inset-0 rounded-[2rem] transform rotate-3 z-10 border-4 border-white shadow-xl overflow-hidden">
                            <Image
                                src="/images/IMG_9537.jpg"
                                alt="Ilustração de tratamento de coluna e nervos"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <span className="text-[var(--color-pink-accent)] font-bold tracking-wider text-sm uppercase">O que é Quiropraxia?</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mt-2 mb-6">
                            Muito além do alívio da dor
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            A quiropraxia é uma profissão da saúde que se dedica ao diagnóstico, tratamento e prevenção de problemas do sistema neuro-músculo-esquelético. O foco principal é a relação entre a coluna vertebral e o sistema nervoso.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Sem medicamentos ou cirurgias",
                                "Tratamento da causa, não do sintoma",
                                "Melhora da postura e flexibilidade",
                                "Fortalecimento do sistema imunológico"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[var(--color-navy)] font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--color-coral-start)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Part 2: About the Doctor */}
                <div className="bg-[var(--color-deep-navy)] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <span className="text-[var(--color-pink-accent)] font-bold tracking-wider text-sm uppercase">Conheça a Especialista</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Dra. Emanuelle Schirm</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Com mais de 8 anos de experiência clínica, a Dra. Emanuelle é referência em quiropraxia integrativa. Formada pela [Universidade], possui especializações em Quiropraxia Esportiva e Reabilitação de Coluna.
                            </p>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Seu método de trabalho une a ciência da quiropraxia com um olhar humano e acolhedor, garantindo que cada paciente receba um tratamento personalizado para suas necessidades específicas.
                            </p>
                            <Button variant="primary">
                                Agendar Consulta com a Dra.
                            </Button>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-64 h-80 md:w-80 md:h-96 relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20">
                                <Image
                                    src="/images/dra-emanuelle.jpg"
                                    alt="Dra. Emanuelle Schirm realizando procedimento"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
