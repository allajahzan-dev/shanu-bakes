import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ShanuBakesLogo } from "./ShanuBakesLogo";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const linkColor = hasScrolled ? "rgba(26,30,60,0.65)" : "rgba(255,255,255,0.85)";
  const linkHover = hasScrolled ? "#1A1E3C" : "#FFFFFF";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-[#1A1E3C] focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <div
        className="fixed left-1/2 z-50"
        style={{
          top: "1.25rem",
          transform: "translateX(-50%)",
          width: "calc(100% - 3rem)",
          maxWidth: "1100px",
        }}
      >
        <div
          className="flex items-center justify-between transition-all duration-300"
          style={{
            background: hasScrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.1)",
            backdropFilter: hasScrolled ? "blur(16px)" : "blur(12px)",
            WebkitBackdropFilter: hasScrolled ? "blur(16px)" : "blur(12px)",
            border: `1px solid ${hasScrolled ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.2)"}`,
            borderRadius: "9999px",
            boxShadow: hasScrolled
              ? "0 8px 32px rgba(0,0,0,0.1)"
              : "0 4px 24px rgba(0,0,0,0.1)",
            padding: "0.625rem 1.5rem",
            height: 60,
          }}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <ShanuBakesLogo variant={hasScrolled ? "dark" : "light"} size={32} />
            <span className="flex flex-col leading-none">
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: hasScrolled ? "#1A1E3C" : "#FFFFFF",
                  transition: "color 200ms",
                }}
              >
                Shanu Bakes
              </span>
              <span
                style={{
                  display: "block",
                  marginTop: 1,
                  fontWeight: 500,
                  fontSize: "0.62rem",
                  letterSpacing: "0.08em",
                  color: hasScrolled ? "#CC0014" : "rgba(255,255,255,0.7)",
                  transition: "color 200ms",
                }}
              >
                Hot &amp; Cool
              </span>
            </span>
          </a>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative transition-colors duration-200"
                  style={{
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    color: isActive ? linkHover : linkColor,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = linkHover)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive ? linkHover : linkColor)
                  }
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        bottom: -8,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 3,
                        height: 3,
                        borderRadius: "9999px",
                        background: "#CC0014",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <a
            href="#outlets"
            className="hidden md:inline-flex items-center justify-center rounded-full transition-colors duration-200"
            style={{
              background: "#CC0014",
              color: "#FFFFFF",
              padding: "0.5rem 1.25rem",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#A8000F")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#CC0014")}
          >
            Find an Outlet
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center"
            onClick={() => setOpen(true)}
            style={{ color: hasScrolled ? "#1A1E3C" : "#FFFFFF" }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute top-6 right-6"
            style={{ color: "#CC0014" }}
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontWeight: 700, fontSize: "1.75rem", color: "#1A1E3C" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#outlets"
            onClick={() => setOpen(false)}
            className="rounded-full"
            style={{
              background: "#CC0014",
              color: "#FFFFFF",
              padding: "0.75rem 1.75rem",
              fontWeight: 600,
            }}
          >
            Find an Outlet
          </a>
        </div>
      )}
    </>
  );
}