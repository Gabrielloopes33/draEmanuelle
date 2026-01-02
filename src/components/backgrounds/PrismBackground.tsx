"use client";

export function PrismBackground() {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -30px) scale(1.1);
                    }
                    66% {
                        transform: translate(-30px, 30px) scale(0.9);
                    }
                }

                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>

            {/* Gradient blobs with smooth animations */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30 blur-[80px]"
                style={{
                    background: "radial-gradient(circle, rgba(91, 46, 145, 0.6) 0%, rgba(91, 46, 145, 0.1) 70%)",
                    animation: "float 15s ease-in-out infinite",
                }}
            />

            <div
                className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-25 blur-[90px]"
                style={{
                    background: "radial-gradient(circle, rgba(198, 26, 142, 0.5) 0%, rgba(198, 26, 142, 0.1) 70%)",
                    animation: "float 20s ease-in-out infinite reverse",
                    animationDelay: "2s",
                }}
            />

            <div
                className="absolute bottom-[-10%] left-[30%] w-[550px] h-[550px] rounded-full opacity-20 blur-[100px]"
                style={{
                    background: "radial-gradient(circle, rgba(91, 46, 145, 0.4) 0%, rgba(198, 26, 142, 0.2) 50%, transparent 70%)",
                    animation: "float 18s ease-in-out infinite",
                    animationDelay: "4s",
                }}
            />

            {/* Center light pillar effect */}
            <div
                className="absolute top-0 left-1/2 w-[200px] h-full -translate-x-1/2 opacity-10 blur-[60px]"
                style={{
                    background: "linear-gradient(180deg, rgba(198, 26, 142, 0.3) 0%, rgba(91, 46, 145, 0.2) 50%, rgba(198, 26, 142, 0.3) 100%)",
                    animation: "rotate 30s linear infinite",
                }}
            />
        </div>
    );
}
