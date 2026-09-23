import { motion } from "framer-motion";
import { services } from "../content";
import { ButtonLink, Container, SectionLabel } from "./Primitives";

export function BuildWithUs() {
  return (
    <section id="build" className="relative py-20 sm:py-28 md:py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-br from-[#111113] via-[#0D0D0F] to-[#0A0A0B] p-6 sm:rounded-[2rem] sm:p-8 md:p-16"
        >
          {/* Decorative */}
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(closest-side, #D4FF3A 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-20"
            style={{
              background:
                "radial-gradient(closest-side, #3B82F6 0%, transparent 70%)",
            }}
          />
          <div className="noise" />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Build with us</SectionLabel>

              <div className="mt-4 text-[15px] text-white/60">
                Have something in mind?
              </div>

              <h2 className="mt-2 text-[clamp(2.35rem,13vw,5.5rem)] leading-[0.95] tracking-[-0.04em] font-semibold sm:tracking-[-0.035em]">
                Let's{" "}
                <span
                  className="italic font-normal"
                  style={{ fontFamily: "var(--font-serif)", color: "#D4FF3A" }}
                >
                  build
                </span>{" "}
                it.
              </h2>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 sm:mt-6 sm:text-[16px]">
                Whether it's a website, mobile app, custom software, AI-powered
                product, or MVP — tell us what you want to build and we'll help
                turn the idea into something real.
              </p>

              <div className="mt-7 sm:mt-8">
                <ButtonLink href="#contact" variant="accent" className="w-full min-[420px]:w-auto">
                  Start a Project
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">
                We build
              </div>
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2">
                {services.map((s, i) => (
                  <li
                    key={s}
                    className="group flex items-center justify-between gap-2 bg-[#0A0A0B]/70 p-4 backdrop-blur transition-colors hover:bg-[#D4FF3A]/5 sm:p-5"
                  >
                    <span className="text-[14px] text-white/85 group-hover:text-white">
                      {s}
                    </span>
                    <span className="font-mono text-[10px] text-white/30">
                      0{i + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
