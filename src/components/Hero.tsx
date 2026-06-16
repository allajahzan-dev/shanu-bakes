import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Star, UtensilsCrossed, ArrowRight, ChevronDown } from "lucide-react";

const PICKS = [
  "Choco Oreo Pastry",
  "Signature Bread Omelette",
  "Mango Alphonso Cake",
  "Signature Falooda",
];

export function Hero() {
  const reduced = useReducedMotion();
  const headlineWords = ["Where", "Tradition", "Meets", "Innovation", "in", "Every", "Bite."];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100svh",
        background:
          "linear-gradient(135deg, #1a0005 0%, #3d0010 50%, #1a0005 100%)",
      }}
    >
      <div
        className="mx-auto grid items-center gap-12 px-6 lg:grid-cols-[55fr_45fr]"
        style={{ maxWidth: 1280, paddingTop: "7rem", paddingBottom: "5rem" }}
      >
        {/* LEFT */}
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.08)",
              padding: "0.375rem 1rem",
            }}
          >
            <Sparkles size={14} color="rgba(255,255,255,0.7)" />
            <span
              style={{
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Tamil Nadu's Favourite Since 2010
            </span>
          </div>

          <h1
            className="mt-6"
            style={{
              fontWeight: 800,
              color: "#FFFFFF",
              fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "inline-block", marginRight: "0.28em" }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5"
            style={{
              maxWidth: 420,
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Freshly baked cakes, live-counter savories, and cool refreshments — across 25+ branches in Tamil Nadu.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full transition-colors"
              style={{
                background: "#CC0014",
                color: "#FFFFFF",
                padding: "0.875rem 1.75rem",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#A8000F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#CC0014")}
            >
              Explore Our Menu
            </a>
            <a
              href="#custom"
              className="inline-flex items-center justify-center rounded-full transition-all"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#FFFFFF",
                background: "transparent",
                padding: "0.875rem 1.75rem",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Order a Custom Cake
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Today's Picks */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="sb-float w-full"
            style={{
              maxWidth: 320,
              minWidth: 260,
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "1.25rem",
              padding: "1.75rem",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                Today's Picks
              </span>
              <UtensilsCrossed size={16} color="rgba(255,255,255,0.5)" />
            </div>

            <div>
              {PICKS.map((name, i) => (
                <div
                  key={name}
                  className="flex items-center justify-between transition-all duration-150"
                  style={{
                    padding: "0.75rem 0.5rem",
                    borderBottom:
                      i < PICKS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    borderRadius: "0.5rem",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <span style={{ fontWeight: 500, fontSize: "0.9rem", color: "#FFFFFF" }}>
                    {name}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={13} fill="#F59E0B" color="#F59E0B" />
                    <span style={{ fontWeight: 600, fontSize: "0.82rem", color: "#F59E0B" }}>
                      4.5
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#menu"
              className="group mt-5 inline-flex items-center transition-all duration-200"
              style={{
                fontWeight: 600,
                fontSize: "0.82rem",
                color: "#CC0014",
                gap: "0.25rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "0.5rem")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "0.25rem")}
            >
              View Full Menu
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sb-bounce">
        <ChevronDown size={22} color="rgba(255,255,255,0.35)" />
      </div>
    </section>
  );
}