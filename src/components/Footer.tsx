import { Instagram, Linkedin } from "lucide-react";
import { ShanuBakesLogo } from "./ShanuBakesLogo";
import { FadeUp } from "./FadeUp";
import { NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" style={{ background: "#CC0014", padding: "4rem 1.5rem 2rem" }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Col 1 */}
          <FadeUp>
            <div className="flex items-center gap-3">
              <ShanuBakesLogo variant="light" size={40} />
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "#FFFFFF" }}>
                  Shanu Bakes
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: "0.68rem",
                    marginTop: 2,
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Hot &amp; Cool
                </div>
              </div>
            </div>
            <p
              style={{
                marginTop: "1rem",
                fontWeight: 400,
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Baked with love since 2010.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  href: "https://www.instagram.com/shanu_bakes/",
                  Icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/shanu-bakes/",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center rounded-full transition-all"
                  style={{
                    width: 38,
                    height: 38,
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </FadeUp>

          {/* Col 2 */}
          <FadeUp delay={0.1}>
            <p
              style={{
                fontWeight: 600,
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: "1.25rem",
              }}
            >
              Explore
            </p>
            <nav className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  className="transition-colors duration-150"
                  style={{
                    fontWeight: 400,
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.75)",
                    padding: "0.375rem 0",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                  }
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </FadeUp>

          {/* Col 3 */}
          <FadeUp delay={0.2}>
            <p
              style={{
                fontWeight: 600,
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              Stay in the Loop
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "1.25rem",
                fontWeight: 400,
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              New flavours, festive specials, and branch openings — straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-full focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  padding: "0.75rem 1.25rem",
                  color: "#FFFFFF",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#FFFFFF")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")
                }
              />
              <button
                type="submit"
                className="rounded-full transition-colors"
                style={{
                  background: "#FFFFFF",
                  color: "#CC0014",
                  fontWeight: 700,
                  padding: "0.75rem 1.25rem",
                  marginTop: "0.75rem",
                  width: "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.9)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
              >
                Subscribe
              </button>
            </form>
          </FadeUp>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            marginTop: "3rem",
            marginBottom: "1.5rem",
          }}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontWeight: 400, fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
            © 2025 Shanu Bakes. All rights reserved.
          </p>
          <p style={{ fontWeight: 400, fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
            Crafted for Tamil Nadu with love.
          </p>
        </div>
      </div>

      <style>{`
        #newsletter-email::placeholder { color: rgba(255,255,255,0.45); }
      `}</style>
    </footer>
  );
}