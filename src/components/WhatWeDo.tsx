import { motion } from "framer-motion";
import { whatWeDo } from "../content";
import { Container, SectionLabel } from "./Primitives";
import { iconMap } from "./Icons";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative pt-10 pb-10 sm:pt-28 sm:pb-14 md:pt-40 md:pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-3xl"
        >
          <SectionLabel>What we do</SectionLabel>
          <h2 className="mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] font-semibold">
            We turn ideas into{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-serif)", color: "#D4FF3A" }}
            >
              products.
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
                className="group relative h-full bg-[#000000] p-6 transition-colors duration-500 hover:bg-[#0F0F12] sm:p-8 md:p-10"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#D4FF3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:text-[#D4FF3A] group-hover:border-[#D4FF3A]/30 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-6 text-[17px] font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/55">
                  {item.description}
                </p>
                <div className="mt-8 text-[11px] tracking-[0.18em] uppercase text-white/30">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
