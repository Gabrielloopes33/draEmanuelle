import { Card } from "../ui/Card";
import { Quote } from "lucide-react";

export function Testimonials() {
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-blush)] rounded-full blur-[80px] opacity-40" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-pink-accent)] font-bold tracking-wider text-sm uppercase">Depoimentos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mt-2">
                        O que nossos pacientes dizem
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} variant="default" className="relative pt-12">
                            <div className="absolute top-0 left-8 -translate-y-1/2 bg-[var(--color-coral-start)] p-3 rounded-full text-white shadow-lg">
                                <Quote className="w-5 h-5 fill-current" />
                            </div>
                            <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.content}"</p>
                            <div>
                                <strong className="block text-[var(--color-navy)]">{t.name}</strong>
                                <span className="text-sm text-gray-400">{t.role}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
