import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "text" | "glass";
    size?: "sm" | "md" | "lg";
    icon?: LucideIcon;
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant = "primary", size = "md", icon: Icon, fullWidth, ...props }, ref) => {
        const variants = {
            primary: "bg-linear-to-r from-[var(--color-coral-start)] to-[var(--color-coral-end)] text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 border-none",
            secondary: "border-2 border-[var(--color-deep-purple)] text-[var(--color-deep-purple)] hover:bg-[var(--color-deep-purple)] hover:text-white",
            text: "text-[var(--color-navy)] hover:text-[var(--color-coral-start)] px-2",
            glass: "bg-white/20 backdrop-blur-md border border-white/50 text-white hover:bg-white/30"
        };

        const sizes = {
            sm: "text-sm px-4 py-2",
            md: "text-base px-8 py-3",
            lg: "text-lg px-10 py-4"
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                    variants[variant],
                    sizes[size],
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            >
                {children}
                {Icon && <Icon className="w-5 h-5" />}
            </button>
        );
    }
);

Button.displayName = "Button";
