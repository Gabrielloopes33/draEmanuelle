import { Users, Award, Calendar, Activity } from "lucide-react";

export function Stats() {
    const stats = [
        { label: "Anos de Experiência", value: "+8", icon: Calendar },
        { label: "Pacientes Atendidos", value: "+5k", icon: Users },
        { label: "Certificações", value: "12", icon: Award },
        { label: "Recuperação", value: "98%", icon: Activity },
    ];

    return (
        <section className="py-12 bg-white relative z-20 -mt-8 mx-4 md:mx-12 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-2">
                            <div className="p-3 bg-[var(--color-blush)] rounded-full text-[var(--color-coral-end)]">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-[var(--color-navy)]">{stat.value}</h3>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
