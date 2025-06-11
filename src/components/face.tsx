// components/DotMatrixFace.tsx
'use client';
import { useRef, useEffect } from 'react';

export default function DotMatrixFace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    // Fixed face position
    const faceCenterX = width / 2;
    const faceCenterY = height / 2;

    const face = [
      [1, 1, 1, 1, 1], // forehead
      [1, 0, 1, 0, 1], // eyes
      [1, 1, 1, 1, 1], // nose
      [1, 0, 0, 0, 1], // mouth
      [1, 1, 1, 1, 1], // chin
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const dotSize = 10;
      const gap = 20;

      const offsetX = (mouseX - faceCenterX) / 40; // smaller value = slower reaction
      const offsetY = (mouseY - faceCenterY) / 40;

      face.forEach((row, y) => {
        row.forEach((dot, x) => {
          if (dot === 1) {
            // Each dot slightly shifts based on its position
            const shiftX = offsetX * (x - 2); // center at 2
            const shiftY = offsetY * (y - 2);

            ctx.beginPath();
            ctx.arc(
              faceCenterX + (x - 2) * gap + shiftX,
              faceCenterY + (y - 2) * gap + shiftY,
              dotSize / 2,
              0,
              Math.PI * 2
            );
            ctx.fillStyle = 'blue';
            ctx.fill();
          }
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
