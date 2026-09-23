import { motion } from "framer-motion";
import { exploring } from "../content";
import { Container, SectionLabel } from "./Primitives";

export function Exploring() {
  return (
    <section className="relative py-20 sm:py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <SectionLabel>Lab</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] font-semibold">
              What's{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-serif)", color: "#D4FF3A" }}
              >
                next?
              </span>
            </h2>
            <p className="mt-4 text-[16px] text-white/60 max-w-md">
              We're constantly experimenting, prototyping, and building new
              products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-3 lg:col-span-7">
            {exploring.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-[#0A0A0B] p-6 transition-colors hover:bg-[#0F0F12] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/40">
                    0{i + 1}
                  </span>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4FF3A] opacity-50 animate-ping" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4FF3A]" />
                  </span>
                </div>
                <div className="mt-10 text-[16px] font-medium tracking-tight">
                  {e.title}
                </div>
                <div className="mt-2 text-[13px] text-white/55 leading-relaxed">
                  {e.description}
                </div>
                <div className="mt-6 text-[11px] text-white/30 tracking-[0.15em] uppercase group-hover:text-[#D4FF3A]/70 transition-colors">
                  Soon →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
