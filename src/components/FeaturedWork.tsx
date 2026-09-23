import { projects } from "../content";
import { Container, SectionLabel } from "./Primitives";
import { ProjectSection } from "./ProjectSection";

export function FeaturedWork() {
  return (
    <section id="work" className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 md:pt-16 md:pb-40">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-20 md:mb-28">
          <div className="max-w-2xl">
            <SectionLabel>Featured work</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] font-semibold">
              Our work
            </h2>
            <p className="mt-4 text-[16px] text-white/60 max-w-lg">
              Products currently being built and prepared for launch.
            </p>
          </div>
          <div className="text-[12px] text-white/40 tracking-wider uppercase">
            <span className="text-[#D4FF3A] font-mono">
              {String(projects.length).padStart(2, "0")}
            </span>{" "}
            · In the pipeline
          </div>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {projects.map((p, i) => (
            <ProjectSection
              key={p.id}
              project={p}
              reverse={i % 2 === 1}
              teaser={p.status === "Launching soon"}
              card={p.id === "syncly"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
