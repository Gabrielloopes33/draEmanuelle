"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
    const faqs = [
        {
            question: "O ajuste quiroprático dói?",
            answer: "Não. O ajuste é geralmente indolor. Alguns pacientes podem sentir um leve desconforto momentâneo, similar ao alívio de um alongamento profundo, mas a sensação geral é de relaxamento."
        },
        {
            question: "Para quem é indicado a quiropraxia?",
            answer: "É indicada para todas as idades, desde recém-nascidos até idosos. Tratamos dores nas costas, pescoço, dores de cabeça, hérnia de disco, e também atuamos na prevenção e melhora da postura."
        },
        {
            question: "Quantas sessões são necessárias?",
            answer: "Isso varia de acordo com cada caso. Na primeira consulta, realizamos uma avaliação completa e montamos um plano de tratamento personalizado para suas necessidades."
        },
        {
            question: "Preciso de encaminhamento médico?",
            answer: "Não é necessário. O quiropraxista é um profissional de primeiro contato, capacitado para diagnosticar e tratar problemas neuromusculoesqueléticos."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-[var(--color-off-white)]">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-pink-accent)] font-bold tracking-wider text-sm uppercase">Dúvidas Frequentes</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mt-2">
                        Perguntas Comuns
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-[var(--color-navy)] text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
