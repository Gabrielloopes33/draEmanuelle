import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "glass-dark";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, variant = "glass", ...props }, ref) => {
        const variants = {
            default: "bg-white shadow-lg border border-gray-100",
            glass: "bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl shadow-slate-200/40",
            "glass-dark": "bg-[var(--color-navy)]/90 backdrop-blur-md text-white border border-white/10"
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";
