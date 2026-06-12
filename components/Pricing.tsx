"use client";
import { Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import SectionHeader from "./SectionHeader";

interface Plan {
  name: string;
  price: string;
  per: string;
  featured: boolean;
  badge?: string;
  gradient: string;
  glowColor: string;
  accentColor: string;
  items: string[];
  btnText: string;
}

const plans: Plan[] = [
  {
    name: "Gratuit",
    price: "0",
    per: "pour toujours",
    featured: false,
    gradient: "from-slate-700 to-slate-800",
    glowColor: "rgba(148,163,184,0.15)",
    accentColor: "#94a3b8",
    items: [
      "Simulateur de score BAC",
      "Suggestions de facultés",
      "Quelques cours d'accès",
    ],
    btnText: "Démarrer",
  },
  {
    name: "PRO",
    price: "89",
    per: "par trimestre",
    featured: true,
    badge: "Le plus populaire",
    gradient: "from-blue-600 to-indigo-700",
    glowColor: "rgba(59,130,246,0.4)",
    accentColor: "#3b82f6",
    items: [
      "Bibliothèque de cours complète",
      "Exercices adaptatifs illimités",
      "Lives collectifs & replays",
      "Simulateur BAC avancé",
      "Orientation personnalisée",
    ],
    btnText: "S'abonner PRO",
  },
  {
    name: "PRO MAX",
    price: "129",
    per: "par trimestre",
    featured: false,
    gradient: "from-slate-700 to-slate-800",
    glowColor: "rgba(148,163,184,0.15)",
    accentColor: "#94a3b8",
    items: [
      "Tout le contenu PRO",
      "2 Meets 1-to-1 par mois",
      "WhatsApp 24/7 prioritaire",
      "Revue de code & devoirs",
      "Certificat de complétion",
    ],
    btnText: "S'abonner PRO MAX",
  },
];

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setRotation({ x: -dy * 10, y: dx * 10 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      style={{
        // opacity: isVisible ? 1 : 0,
        // transform: isVisible ? `translateY(0px) ` : "translateY(40px)",
        // transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${
        //   index * 0.15
        // }s`,
        perspective: "1000px",
        zIndex: plan.featured ? 10 : 1,
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${
            rotation.y
          }deg) translateZ(${isHovered ? "10px" : "0px"})`,
          transition: "transform 0.1s ease",
          // transformStyle: "preserve-3d",
          borderRadius: "24px",
          position: "relative",
        }}
      >
        {/* Glow backdrop */}
        {/* <div
          style={{
            position: "absolute",
            inset: "-2px",
            borderRadius: "26px",
            background: `radial-gradient(ellipse at center, ${plan.glowColor}, transparent 70%)`,
            // opacity: isHovered || plan.featured ? 1 : 0,
            transition: "opacity 0.4s ease",
            // filter: "blur(8px)",
            zIndex: -1,
          }}
        /> */}

        {/* Sheen overlay that follows mouse */}
        {/* <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "24px",
            background: `radial-gradient(circle at ${50 + rotation.y * 3}% ${
              50 - rotation.x * 3
            }%, rgba(255,255,255,0.07))`,
            pointerEvents: "none",
            zIndex: 2,
            // transition: isHovered ? "none" : "background 0.5s ease",
          }}
        /> */}

        <div
          style={{
            // background: plan.featured
            //   ? "linear-gradient(145deg, #1e2a4a 0%, #0d1730 100%)"
            //   : "linear-gradient(145deg, #111827 0%, #0b1120 100%)",
            // border: `1px solid ${
            //   plan.featured ? plan.accentColor + "60" : "rgba(255,255,255,0.07)"
            // }`,
            borderRadius: "24px",
            padding: "36px 32px",
            position: "relative",
            // overflow: "hidden",
            boxShadow: plan.featured
              ? `0 5px 25px ${plan.glowColor}, 0 0 0 1px ${plan.accentColor}30`
              : `0 5px 25px rgba(0,0,0,0.1)`,
          }}
          className="
          border border-blue-900/20 dark:border-blue-900
    rounded-3xl
    bg-gradient-to-br
    from-sky-50
    to-sky-100
    dark:from-slate-900
    dark:to-slate-950
  "
        >
          {/* Animated grid lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px)`,
              backgroundSize: "40px 40px",
              borderRadius: "24px",
              // opacity: isHovered ? 1 : 0.5,
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Ambient orb */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${plan.accentColor}30, transparent 70%)`,
              // filter: "blur(20px)",
              animation: plan.featured
                ? "pulse-orb 3s ease-in-out infinite"
                : "none",
            }}
          />

          {plan.badge && (
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "4px 16px",
                background: `linear-gradient(90deg, ${plan.accentColor}, #6366f1)`,
                color: "white",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                boxShadow: `0 4px 20px ${plan.accentColor}60`,
                zIndex: 3,
              }}
            >
              {plan.badge}
            </div>
          )}

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Plan name */}
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: plan.accentColor,
                  background: `${plan.accentColor}15`,
                  border: `1px solid ${plan.accentColor}30`,
                  padding: "4px 12px",
                  borderRadius: "999px",
                  marginBottom: "16px",
                }}
              >
                {plan.name}
              </span>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "60px",
                    fontWeight: 900,
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                    textShadow: plan.featured
                      ? `0 0 40px ${plan.accentColor}50`
                      : "none",
                  }}
                  className="text-sky-600 dark:text-ink"
                >
                  {plan.price}
                </span>
                <div style={{ paddingBottom: "8px" }}>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                    className="text-sky-500 dark:text-slate-500"
                  >
                    DT
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      marginTop: "2px",
                    }}
                    className="text-sky-500 dark:text-slate-500"
                  >
                    {plan.per}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${plan.accentColor}40, transparent)`,
                marginBottom: "24px",
              }}
            />

            {/* Features */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 28px 0",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {plan.items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-10px)",
                    transition: `opacity 0.5s ease ${
                      index * 0.15 + i * 0.07 + 0.3
                    }s, transform 0.5s ease ${index * 0.15 + i * 0.07 + 0.3}s`,
                  }}
                  className="text-slate-600 dark:text-slate-200"
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: `${plan.accentColor}20`,
                      border: `1px solid ${plan.accentColor}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "11px",
                      color: plan.accentColor,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "14px",
                border: plan.featured
                  ? "none"
                  : `1px solid ${plan.accentColor}40`,
                // background: plan.featured
                //   ? `linear-gradient(135deg, ${plan.accentColor}, #6366f1)`
                //   : "transparent",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.03em",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: plan.featured
                  ? `0 8px 30px ${plan.accentColor}50`
                  : "none",
              }}
              className=" !bg-sky-700 text-ink"
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (plan.featured) {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${plan.accentColor}70`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                } else {
                  e.currentTarget.style.background = `${plan.accentColor}15`;
                  e.currentTarget.style.borderColor = plan.accentColor;
                }
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (plan.featured) {
                  e.currentTarget.style.boxShadow = `0 8px 30px ${plan.accentColor}50`;
                  e.currentTarget.style.transform = "translateY(0)";
                } else {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = `${plan.accentColor}40`;
                }
              }}
            >
              {plan.btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        padding: "96px 24px",
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
      id="pricing"
      className="dark:bg-black-100"
    >
      <style>{`
        @keyframes pulse-orb {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        * { box-sizing: border-box; }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}

        <SectionHeader
          sectionTitle="Tarification"
          title="Des tarifs simples et "
          customWord="transparents"
          desc="Choisis l'accompagnement qui te permettra d'atteindre tes objectifs."
        />
        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            textAlign: "center",
            marginTop: "48px",
            fontSize: "13px",
            opacity: headerVisible ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}
          className="text-slate-900/60 dark:text-ink/50"
        >
          Paiement sécurisé · Annulation à tout moment · Support inclus
        </p>
      </div>
    </section>
  );
}
