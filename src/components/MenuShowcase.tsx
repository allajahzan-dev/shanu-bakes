import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Cake, Star, Sun, Wheat, Flame, Sandwich, Layers, Beef,
  GlassWater, Droplets, Leaf, Coffee, type LucideIcon,
} from "lucide-react";
import { FadeUp } from "./FadeUp";
import { MENU_TABS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Cake, Star, Sun, Wheat, Flame, Sandwich, Layers, Beef,
  GlassWater, Droplets, Leaf, Coffee,
};

export function MenuShowcase() {
  const [active, setActive] = useState(MENU_TABS[0].id);
  const tab = MENU_TABS.find((t) => t.id === active)!;
  const reduced = useReducedMotion();

  return (
    <section id="menu" style={{ background: "#F4F4F6", padding: "6rem 1.5rem" }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
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
            What We Serve
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", lineHeight: 1.1, color: "#1A1E3C" }}>
            <span style={{ fontWeight: 300, display: "block" }}>A menu built for</span>
            <span style={{ fontWeight: 800, display: "block" }}>every craving.</span>
          </h2>
          <p
            style={{
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#6B7280",
              maxWidth: 460,
              marginTop: "0.75rem",
            }}
          >
            Crafted fresh daily — from celebration cakes and live-counter savories to cold refreshments.
          </p>
        </FadeUp>

        {/* Tab bar */}
        <div className="mt-10 mb-8 overflow-x-auto">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="inline-flex"
            style={{
              background: "#FFFFFF",
              borderRadius: 9999,
              padding: "0.375rem",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            {MENU_TABS.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${t.id}`}
                  id={`tab-${t.id}`}
                  onClick={() => setActive(t.id)}
                  className="rounded-full transition-colors duration-200 whitespace-nowrap"
                  style={{
                    padding: "0.5rem 1.25rem",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: isActive ? "#FFFFFF" : "#6B7280",
                    background: isActive ? "#CC0014" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#1A1E3C";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#6B7280";
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="wait">
            {tab.items.map((item, i) => {
              const Icon = ICONS[item.icon] ?? Star;
              return (
                <motion.article
                  key={`${tab.id}-${item.name}`}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  animate={reduced ? undefined : { opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "1rem",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    overflow: "hidden",
                    position: "relative",
                    transition: "all 300ms",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "16px",
                      right: "16px",
                      height: "3px",
                      background: "#CC0014",
                      borderRadius: "0 0 4px 4px",
                    }}
                  />
                  <div className="flex flex-col h-full" style={{ padding: "1.5rem" }}>
                    <Icon size={22} color="#CC0014" style={{ marginBottom: "0.75rem" }} />
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#1A1E3C" }}>
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "0.875rem",
                        color: "#6B7280",
                        lineHeight: 1.7,
                        marginTop: "0.5rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.description}
                    </p>
                    <span
                      style={{
                        marginTop: "auto",
                        paddingTop: "1rem",
                        display: "block",
                        fontWeight: 600,
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "#CC0014",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}