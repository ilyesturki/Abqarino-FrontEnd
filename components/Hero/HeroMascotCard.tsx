"use client";

import { useRef, useEffect, useState } from "react";

const bacs = [
  { label: "BAC Info", icon: "💻", color: "#7F77DD" },
  { label: "BAC Maths", icon: "📐", color: "#1D9E75" },
  { label: "BAC Sciences", icon: "🔬", color: "#D85A30" },
  { label: "BAC Lettres", icon: "📖", color: "#D4537E" },
  { label: "BAC Éco", icon: "🏦", color: "#378ADD" },
  { label: "BAC Technique", icon: "⚙️", color: "#BA7517" },
  { label: "BAC Sport", icon: "⚽", color: "#16A34A" },
];

function getPillPositions(W: number, H: number) {
  return [
    { x: -35, y: 35 },
    { x: W - 90, y: 25 },
    { x: -50, y: 120 },
    { x: W - 110, y: 135 },
    { x: 10, y: H - 55 },
    { x: W - 130, y: H - 55 },
    { x: W / 2 - 50, y: -20 },
  ];
}

const WAVE_PARAMS = bacs.map((_, i) => ({
  phaseX: (i * Math.PI * 2) / bacs.length,
  phaseY: (i * Math.PI * 2) / bacs.length + Math.PI / 3,
  speedX: 0.00035 + i * 0.00004,
  speedY: 0.00028 + i * 0.00005,
  ampX: 22 + i * 3,
  ampY: 18 + i * 2,
}));

export default function HeroMascotCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [offsets, setOffsets] = useState<{ x: number; y: number }[]>(
    bacs.map(() => ({ x: 0, y: 0 }))
  );
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (cardRef.current) {
      const { offsetWidth: W, offsetHeight: H } = cardRef.current;
      setPositions(getPillPositions(W, H));
      setTimeout(() => setVisible(true), 200);
    }
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      setOffsets(
        WAVE_PARAMS.map((p) => ({
          x: Math.sin(time * p.speedX + p.phaseX) * p.ampX,
          y: Math.sin(time * p.speedY + p.phaseY) * p.ampY,
        }))
      );
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col items-center rounded-lg border border-accent-2/30 bg-dark bg-opacity-70 p-10 overflow-visible"
    >
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(108,71,255,0.25)_0%,transparent_70%)]" />

      {positions.map((pos, i) => (
        <span
          key={i}
          className="absolute z-0 flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs whitespace-nowrap pointer-events-none select-none backdrop-blur-sm shadow-lg text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15]  text-ink"
          style={{
            left: pos.x + (offsets[i]?.x ?? 0),
            top: pos.y + (offsets[i]?.y ?? 0),
            backgroundColor: bacs[i].color,
            opacity: visible ? 0.9 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          <span>{bacs[i].icon}</span>
          {bacs[i].label}
        </span>
      ))}

      <img
        src="/imgs/heroLogo.png"
        alt="Abqarino"
        className="relative z-10 h-40 w-40 animate-hover rounded-full border-[3px] border-amber"
      />

      <div className="relative z-10 mt-6 w-full rounded-xl bg-white/4">
        <p className="relative overflow-hidden rounded-lg p-[1px] text-xs leading-[1.55] text-white/70">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-block h-full w-full cursor-pointer rounded-lg bg-slate-950 bg-opacity-95 px-4 py-2 text-sm font-bold text-white backdrop-blur-3xl">
            <strong className="inline font-bold text-amber">Bonjour !</strong>{" "}
            Je suis ton guide sur Abqarino. Je t'accompagne à chaque étape — des
            cours jusqu'à l'orientation universitaire.
          </span>
        </p>
      </div>
    </div>
  );
}
