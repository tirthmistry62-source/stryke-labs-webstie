import { motion } from "framer-motion";
import { process } from "../content";
import { Container, SectionLabel } from "./Primitives";

export function HowWeBuild() {
  return (
    <section className="relative border-t border-white/[0.06] py-20 sm:py-28 md:py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-3xl"
        >
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] font-semibold">
            From idea to{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-serif)", color: "#D4FF3A" }}
            >
              product.
            </span>
          </h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block mt-20 relative">
          {/* Line */}
          <div className="absolute top-[38px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="grid grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <div className="relative z-10 w-4 h-4 rounded-full bg-[#0A0A0B] border border-white/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF3A] shadow-[0_0_10px_#D4FF3A]" />
                  </div>
                  <div className="font-mono text-[11px] text-white/40 tracking-widest">
                    {p.step}
                  </div>
                </div>
                <div className="mt-6 pl-0">
                  <div className="text-[19px] font-medium tracking-tight">
                    {p.title}
                  </div>
                  <div className="mt-2 text-[14px] text-white/55 leading-relaxed max-w-[220px]">
                    {p.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative mt-12 pl-6 md:hidden">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div className="space-y-9">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#0A0A0B] border border-white/20 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#D4FF3A]" />
                </div>
                <div className="font-mono text-[11px] text-white/40 tracking-widest">
                  {p.step}
                </div>
                <div className="mt-1.5 text-[20px] font-medium tracking-tight">
                  {p.title}
                </div>
                <div className="mt-1.5 text-[14px] text-white/55">
                  {p.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
