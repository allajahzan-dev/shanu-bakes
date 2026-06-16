import { useEffect, useRef, useState } from "react";
import { MessageSquare, ChefHat, PackageCheck, type LucideIcon } from "lucide-react";
import { FadeUp } from "./FadeUp";

const STEPS: { icon: LucideIcon; eyebrow: string; title: string; body: string }[] = [
  {
    icon: MessageSquare,
    eyebrow: "Step 01",
    title: "Share Your Vision",
    body: "Tell us your theme, size, flavour preferences, and any dietary or allergy requirements.",
  },
  {
    icon: ChefHat,
    eyebrow: "Step 02",
    title: "Baked with the Finest Ingredients",
    body: "Our bakers craft your cake fresh using premium, locally sourced produce — no compromises.",
  },
  {
    icon: PackageCheck,
    eyebrow: "Step 03",
    title: "Safe Delivery or Pickup",
    body: "Temperature-controlled packaging ensures your cake arrives in perfect condition — every time.",
  },
];

export function CustomCakeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState<number>(-1);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          STEPS.forEach((_, i) => {
            setTimeout(() => setActivated((a) => Math.max(a, i)), i * 400);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="custom" className="bg-white" style={{ padding: "6rem 1.5rem" }}>
      <div className="mx-auto grid items-start gap-12 lg:grid-cols-2" style={{ maxWidth: 1200 }}>
        <FadeUp>
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#CC0014",
              marginBottom: "1rem",
            }}
          >
            Custom Cake Studio
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", lineHeight: 1.1, color: "#1A1E3C" }}>
            <span style={{ fontWeight: 300, display: "block" }}>Your celebration,</span>
            <span style={{ fontWeight: 800, display: "block" }}>designed by us.</span>
          </h2>
          <p
            style={{
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#6B7280",
              maxWidth: 440,
              marginTop: "1.25rem",
            }}
          >
            We collaborate closely with you to craft the perfect theme, choose from 20+ flavours, and handle dietary needs — then deliver in temperature-controlled packaging or ready for pickup.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full transition-colors"
            style={{
              background: "#CC0014",
              color: "#FFFFFF",
              padding: "0.875rem 1.75rem",
              marginTop: "2rem",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#A8000F")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#CC0014")}
          >
            Start Your Cake Order →
          </a>
        </FadeUp>

        <FadeUp>
          <div ref={ref} className="relative" style={{ paddingLeft: 4 }}>
            {/* Base line */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: 19,
                top: 24,
                bottom: 24,
                width: 2,
                background: "#E5E7EB",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  background: "#CC0014",
                  height: activated >= 0 ? "100%" : "0%",
                  transition: "height 1.2s ease",
                }}
              />
            </div>

            {STEPS.map((s, i) => {
              const isActive = activated >= i;
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="flex items-start"
                  style={{ gap: "1.25rem", paddingBottom: i < STEPS.length - 1 ? "2.5rem" : 0 }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      borderRadius: 9999,
                      background: "#FFFFFF",
                      border: `2px solid ${isActive ? "#CC0014" : "#E5E7EB"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isActive ? "scale(1)" : "scale(1)",
                      animation: isActive ? "sbDotPulse 0.45s ease" : "none",
                      transition: "border-color 300ms",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Icon size={20} color="#CC0014" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "#CC0014",
                      }}
                    >
                      {s.eyebrow}
                    </p>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#1A1E3C",
                        marginTop: "0.125rem",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "0.875rem",
                        color: "#6B7280",
                        lineHeight: 1.7,
                        marginTop: "0.375rem",
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              );
            })}
            <style>{`@keyframes sbDotPulse { 0%{transform:scale(1)} 50%{transform:scale(1.15)} 100%{transform:scale(1)} }`}</style>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}