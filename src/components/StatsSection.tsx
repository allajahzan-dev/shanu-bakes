import { useEffect, useRef, useState } from "react";
import { FadeUp } from "./FadeUp";
import { STATS } from "@/lib/data";

function CountUp({
  target,
  suffix,
  decimals = 0,
  start,
}: {
  target: number;
  suffix: string;
  decimals?: number;
  start: boolean;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const dur = 1500;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);
  return (
    <span>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="bg-white" style={{ padding: "6rem 1.5rem" }}>
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
            About Us
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
              lineHeight: 1.1,
              color: "#1A1E3C",
            }}
          >
            <span style={{ fontWeight: 300, display: "block" }}>15 Years of</span>
            <span style={{ fontWeight: 800, color: "#1A1E3C", display: "block" }}>
              quality &amp; craft.
            </span>
          </h2>
          <p
            style={{
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#6B7280",
              maxWidth: 400,
              marginTop: "1.25rem",
            }}
          >
            Shanu Bakes has been crafting joy since 2010, growing from one outlet to 25+ branches across Tamil Nadu. Every item is prepared fresh daily using locally sourced ingredients.
          </p>
        </FadeUp>

        <div ref={ref} className="grid grid-cols-2 gap-x-8 gap-y-10">
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div style={{ paddingBottom: "2rem", borderBottom: "1px solid #E5E7EB" }}>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)",
                    color: "#1A1E3C",
                    lineHeight: 1,
                  }}
                >
                  <CountUp
                    target={s.target}
                    suffix={s.suffix}
                    decimals={"decimals" in s ? (s.decimals as number) : 0}
                    start={start}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    color: "#6B7280",
                    marginTop: "0.5rem",
                  }}
                >
                  {s.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}