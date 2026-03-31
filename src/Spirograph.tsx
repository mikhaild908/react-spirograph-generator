import { useRef, useEffect } from 'react';

interface SpirographProps {
  R1: number;
  r2: number;
  l: number;
  red?: number;
  green?: number;
  blue?: number;
}

function gcd(a: number, b: number): number {
  return b ? gcd(b, a % b) : Math.abs(a);
}

function toRadians(theta: number): number {
  return theta * (Math.PI / 180.0);
}

function getColor(r: number, g: number, b: number, a: number): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function Spirograph({ R1, r2, l, red = 255, green = 255, blue = 0 }: SpirographProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const xc = canvas.width / 2;
    const yc = canvas.height / 2;

    const gcdVal = gcd(r2, R1);
    const k = r2 / R1;
    const nRot = r2 / gcdVal;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = getColor(red, green, blue, 1.0);

    const max = 360 * nRot;

    for (let i = 0; i < max + 1; i++) {
      const theta = toRadians(i);

      const x = R1 * ((1 - k) * Math.cos(theta) + l * k * Math.cos(((1 - k) * theta) / k));
      const y = R1 * ((1 - k) * Math.sin(theta) - l * k * Math.sin(((1 - k) * theta) / k));

      ctx.fillRect(xc + x, yc + y, 1, 1);
    }

    ctx.fill();
  }, [R1, r2, l, red, green, blue]);

  return (
    <div>
      <canvas ref={canvasRef} height={800} width={1000} />
    </div>
  );
}

export default Spirograph;
