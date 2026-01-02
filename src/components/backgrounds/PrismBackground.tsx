"use client";

import { useEffect, useRef } from "react";

export function PrismBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const canvas = document.createElement("canvas");
        container.appendChild(canvas);

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let time = 0;
        let animationId: number;

        const animate = () => {
            time += 0.005;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Cores do tema
            const purpleColor = "#2A1B5E";
            const pinkColor = "#E93CAC";

            // Pilar de luz principal
            const pillarWidth = 200;
            const pillarX = centerX - pillarWidth / 2;

            // Gradient linear para o pilar
            const gradient = ctx.createLinearGradient(
                centerX - pillarWidth / 2 - 100,
                0,
                centerX + pillarWidth / 2 + 100,
                0
            );

            gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(0.2, `${purpleColor}30`);
            gradient.addColorStop(0.5, `${pinkColor}50`);
            gradient.addColorStop(0.8, `${purpleColor}30`);
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

            // Draw main pillar with distortion
            ctx.globalAlpha = 0.6;
            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.moveTo(pillarX - 150, 0);

            for (let y = 0; y < canvas.height; y += 10) {
                const wave = Math.sin(y * 0.01 + time * 2) * 50;
                const x = centerX + wave - pillarWidth / 2;
                ctx.lineTo(x, y);
            }

            ctx.lineTo(pillarX + pillarWidth + 150, canvas.height);

            for (let y = canvas.height; y > 0; y -= 10) {
                const wave = Math.sin(y * 0.01 + time * 2) * 50;
                const x = centerX + wave + pillarWidth / 2;
                ctx.lineTo(x, y);
            }

            ctx.closePath();
            ctx.fill();

            // Glow effect com blur
            ctx.globalAlpha = 0.3;
            ctx.filter = "blur(60px)";
            ctx.fill();
            ctx.filter = "none";

            // Radial glow around center
            ctx.globalAlpha = 0.15;
            const radialGradient = ctx.createRadialGradient(
                centerX,
                centerY,
                0,
                centerX,
                centerY,
                400
            );
            radialGradient.addColorStop(0, `${pinkColor}60`);
            radialGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.fillStyle = radialGradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 400, 0, Math.PI * 2);
            ctx.fill();

            // Rotating effect
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(time * 0.3);

            ctx.globalAlpha = 0.1;
            ctx.strokeStyle = `${pinkColor}40`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, 300, 0, Math.PI * 2);
            ctx.stroke();

            ctx.restore();

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
            canvas.remove();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{
                background: "white",
            }}
        />
    );
}
