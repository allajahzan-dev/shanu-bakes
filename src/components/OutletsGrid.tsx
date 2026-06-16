import { MapPin, Dot } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { OUTLETS } from "@/lib/data";

export function OutletsGrid() {
  return (
    <section id="outlets" style={{ background: "#F4F4F6", padding: "6rem 1.5rem" }}>
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
            Our Locations
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", lineHeight: 1.1, color: "#1A1E3C" }}>
            <span style={{ fontWeight: 300, display: "block" }}>Find us across</span>
            <span style={{ fontWeight: 800, display: "block" }}>Tamil Nadu.</span>
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
            25+ branches — from 24/7 highway pitstops to city neighbourhood favourites.
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OUTLETS.map((o, i) => (
            <FadeUp key={o.name} delay={i * 0.06}>
              <article
                className="relative h-full"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "1rem",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  transition: "all 300ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                }}
              >
                {/* Inset top red bar */}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "16px",
                    right: "16px",
                    height: "4px",
                    background: "#CC0014",
                    borderRadius: "0 0 4px 4px",
                  }}
                />
                {o.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "#CC0014",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "0.5rem",
                    }}
                  >
                    {o.badge}
                  </span>
                )}
                <div style={{ padding: "1.5rem" }}>
                  <div className="flex items-center" style={{ gap: "0.5rem" }}>
                    <MapPin size={15} color="#CC0014" />
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#1A1E3C" }}>
                      {o.name}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "#CC0014",
                      marginTop: "0.25rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {o.tag}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {o.features.map((f) => (
                      <li key={f} className="flex items-start gap-1" style={{ padding: "0.125rem 0" }}>
                        <Dot size={20} color="#CC0014" style={{ flexShrink: 0, marginLeft: -6 }} />
                        <span
                          style={{
                            fontWeight: 400,
                            fontSize: "0.875rem",
                            color: "#6B7280",
                            lineHeight: 1.6,
                          }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <p
            className="text-center"
            style={{
              fontWeight: 400,
              fontSize: "0.875rem",
              color: "#6B7280",
              marginTop: "2rem",
            }}
          >
            + Many more across Salem, Trichy, and growing — always getting closer to you.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}