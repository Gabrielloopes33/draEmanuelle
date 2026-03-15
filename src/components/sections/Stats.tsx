"use client";

import { Users, Award, Calendar, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
}

export function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const stats = [
        { label: "Anos de Experiência", value: "+8", number: 8, icon: Calendar },
        { label: "Pacientes Atendidos", value: "+1k", number: 1000, icon: Users },
        { label: "Certificações", value: "12", number: 12, icon: Award },
        { label: "Recuperação", value: "98%", number: 98, icon: Activity },
    ];

    return (
        <section
            ref={ref}
            className="py-12 bg-white relative z-20 -mt-8 mx-4 md:mx-12 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5, y: 30 }}
                            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 30 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            className="flex flex-col items-center text-center space-y-2"
                        >
                            <motion.div
                                initial={{ rotate: -180, scale: 0 }}
                                animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.2 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                className="p-3 bg-[var(--color-blush)] rounded-full text-[var(--color-coral-end)]"
                            >
                                <stat.icon className="w-6 h-6" />
                            </motion.div>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="text-3xl font-bold text-[var(--color-navy)]"
                            >
                                {index === 1 ? (
                                    <>
                                        +<Counter end={stat.number} />
                                    </>
                                ) : index === 3 ? (
                                    <>
                                        <Counter end={stat.number} />%
                                    </>
                                ) : index === 0 ? (
                                    <>
                                        +<Counter end={stat.number} />
                                    </>
                                ) : (
                                    <Counter end={stat.number} />
                                )}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                className="text-sm text-gray-500 font-medium uppercase tracking-wide"
                            >
                                {stat.label}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
