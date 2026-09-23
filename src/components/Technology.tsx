import { motion } from "framer-motion";
import { tech } from "../content";
import { Container, SectionLabel } from "./Primitives";

export function Technology() {
  // Repeat for a seamless marquee
  const row = [...tech, ...tech];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-16 sm:py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-12"
        >
          <div>
            <SectionLabel>Stack</SectionLabel>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.02em] font-semibold">
              Technology we work with
            </h2>
          </div>
          <div className="text-[12px] text-white/40 max-w-sm">
            Tools chosen per project - not a fixed stack. We pick what fits the
            problem.
          </div>
        </motion.div>
      </Container>

      {/* Marquee */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] font-medium text-white/50 hover:text-white transition-colors"
            >
              {t}
              <span className="ml-12 text-[#D4FF3A]/40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
