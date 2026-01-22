"use client";

import React, { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    pulseSpeed: number;
    pulseDirection: 1 | -1;
}

const StarBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars: Star[] = [];
        const numStars = 150; // High density for effect

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.5 + 0.5, // 0.5px to 2px
                opacity: Math.random() * 0.5 + 0.2, // Low opacity
                speed: Math.random() * 0.2 + 0.05, // Slow float upwards
                pulseSpeed: Math.random() * 0.005 + 0.001,
                pulseDirection: 1,
            });
        }

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                // Move star upwards
                star.y -= star.speed;

                // Reset if off top
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }

                // Pulse opacity
                star.opacity += star.pulseSpeed * star.pulseDirection;
                if (star.opacity >= 0.8 || star.opacity <= 0.2) {
                    star.pulseDirection *= -1;
                }

                // Draw star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
        />
    );
};

export default StarBackground;
