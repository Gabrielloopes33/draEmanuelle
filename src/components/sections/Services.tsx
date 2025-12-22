import { Card } from "../ui/Card";
import { Activity, UserCheck, Accessibility, Laptop } from "lucide-react";

export function Services() {
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
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-[var(--color-blush)]/30 to-transparent -skew-y-6 transform origin-left" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[var(--color-pink-accent)] font-bold tracking-wider text-sm uppercase">Tratamentos Especializados</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mt-2">
                        Cuidado integral para sua saúde
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Utilizamos técnicas avançadas para tratar a causa da dor, não apenas os sintomas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} variant="glass" className="flex flex-col items-start gap-4 hover:bg-white/60">
                            <div className="p-3 rounded-2xl bg-gradient-to-br from-[var(--color-coral-start)] to-[var(--color-coral-end)] text-white shadow-lg shadow-orange-500/20">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
