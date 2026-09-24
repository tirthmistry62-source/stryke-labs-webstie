import { useEffect, useRef, useState } from "react";
import { hero } from "../content";
import { ButtonLink, Container, SectionLabel } from "./Primitives";

/** A single floating particle — slow, subtle. */
function Particle({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <span
      className="absolute block w-[2px] h-[2px] rounded-full bg-white/40"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `pulse-soft 4s ease-in-out ${delay}s infinite`,
        boxShadow: "0 0 6px rgba(255,255,255,0.5)",
      }}
    />
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      setMouse({
        x: (e.clientX - r.left - r.width / 2) / r.width,
        y: (e.clientY - r.top - r.height / 2) / r.height,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Deterministic particles so they don't reshuffle on re-render.
  const particles = Array.from({ length: 24 }, (_, i) => ({
    x: (i * 53) % 100,
    y: (i * 37) % 100,
    delay: (i % 7) * 0.4,
  }));

  return (
    <section
      ref={ref}
      className="relative min-h-0 sm:min-h-[100svh] w-full flex items-center overflow-hidden pt-28 sm:pt-32 pb-10 sm:pb-20"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% -10%, rgba(212,255,58,0.08), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(59,130,246,0.05), transparent 70%), linear-gradient(180deg, #000000 0%, #000000 100%)",
          }}
        />
        {/* Drifting blobs */}
        <div
          className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full blur-3xl opacity-25 animate-drift"
          style={{
            background:
              "radial-gradient(closest-side, #D4FF3A 0%, transparent 70%)",
            transform: `translate(${mouse.x * 14}px, ${mouse.y * 14}px)`,
            transition: "transform 1.2s cubic-bezier(.2,.7,.2,1)",
          }}
        />
        <div
          className="absolute top-20 right-[-200px] w-[620px] h-[620px] rounded-full blur-3xl opacity-20 animate-drift"
          style={{
            background:
              "radial-gradient(closest-side, #3B82F6 0%, transparent 70%)",
            transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px)`,
            transition: "transform 1.2s cubic-bezier(.2,.7,.2,1)",
            animationDelay: "4s",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 80%)",
          }}
        />
        {/* Particles */}
        <div className="absolute inset-0">
          {particles.map((p, i) => (
            <Particle key={i} {...p} />
          ))}
        </div>
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, transparent 40%, rgba(10,10,11,0.9) 100%)",
          }}
        />
        <div className="noise" />
      </div>

      <Container className="relative">
        {/* Hanging brand pendant — one connected chain and emblem */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-16%] top-[-12rem] hidden md:block lg:right-[-12%]"
        >
          <div className={`pendant-swing ${mounted ? "opacity-100" : "opacity-0"}`}>
            <img
              src="/images/stryke-labs-pendant.png"
              alt=""
              className="block h-auto w-full"
            />
          </div>
        </div>
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <SectionLabel>{hero.eyebrow}</SectionLabel>

          <h1 className="mt-6 font-sans text-[clamp(2.45rem,13vw,7.25rem)] leading-[0.95] tracking-[-0.04em] sm:tracking-[-0.035em] font-semibold text-white max-w-5xl">
            We build{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-serif)", color: "#D4FF3A" }}
            >
              products
            </span>{" "}
            that matter.
          </h1>

          <p className="mt-6 sm:mt-8 max-w-xl text-[15.5px] sm:text-[17px] leading-relaxed text-white/65">
            {hero.supporting}
          </p>

          <div className="mt-8 sm:mt-10 grid w-full grid-cols-1 gap-3 min-[420px]:inline-flex min-[420px]:w-auto min-[420px]:items-center">
            <ButtonLink href={hero.primary.href} variant="primary" className="w-full min-[420px]:w-auto">
              {hero.primary.label}
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="ghost" className="w-full min-[420px]:w-auto">
              {hero.secondary.label}
            </ButtonLink>
          </div>
        </div>

        {/* Status line */}
        <div
          className={`mt-12 sm:mt-20 md:mt-28 flex max-w-full items-center gap-3 text-[12px] text-white/50 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="tracking-wide leading-relaxed">{hero.status}</span>
        </div>
      </Container>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/30 text-[11px] uppercase tracking-[0.25em]">
        <span>Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
