import { motion } from "framer-motion";
import { Container, SectionLabel } from "./Primitives";

export function About() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] py-20 sm:py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.03em] font-semibold">
              About Stryke Labs
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-[18px] leading-[1.55] tracking-[-0.01em] text-white/80 sm:text-[20px] md:text-[22px]">
              Stryke Labs is an independent technology company focused on
              building useful products and exploring new ideas.
            </p>
            <p className="mt-5 text-[16px] leading-relaxed text-white/55 max-w-2xl">
              We develop our own products, experiment with emerging
              technologies, and work with others to turn ambitious ideas into
              working software.
            </p>

            {/* Pillars */}
            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-3">
              {[
                { k: "Build", v: "Our own products" },
                { k: "Explore", v: "Emerging technology" },
                { k: "Ship", v: "Real, working software" },
              ].map((p) => (
                <div key={p.k} className="bg-[#000000] p-5">
                  <div className="text-[12px] uppercase tracking-[0.2em] text-[#D4FF3A]/90">
                    {p.k}
                  </div>
                  <div className="mt-2 text-[14px] text-white/75">{p.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
