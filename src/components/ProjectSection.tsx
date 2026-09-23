import { motion } from "framer-motion";
import type { Project } from "../content";
import { PlayStoreButton } from "./Primitives";
import { IconArrow } from "./Icons";

function isPlaceholder(href: string) {
  return !href || href.startsWith("[") || href === "#";
}

/**
 * A project block. Routes to CardSection for all projects.
 *
 * `teaser`  — renders content blurred with a "launching soon" overlay on top (Vardaan+).
 * `card`    — renders content fully visible, no device mock (Syncly).
 */
export function ProjectSection({
  project,
  reverse = false,
  teaser = false,
  card = false,
}: {
  project: Project;
  reverse?: boolean;
  teaser?: boolean;
  card?: boolean;
}) {
  return <CardSection project={project} teaser={teaser} />;
}

/**
 * Shared card layout used by all projects.
 * When `teaser` is true, the content is blurred and a centred overlay is shown instead.
 */
function CardSection({
  project,
  teaser = false,
}: {
  project: Project;
  teaser?: boolean;
}) {
  const isAttelexian = project.id === "attelexian";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem]"
    >
      {/* Card border + glow */}
      <div
        aria-hidden
        className={`absolute inset-0 rounded-[1.75rem] border md:rounded-[2rem] pointer-events-none ${
          teaser
            ? "border-white/20 shadow-[0_0_0_1px_rgba(212,255,58,0.10),0_24px_90px_-50px_rgba(212,255,58,0.45)]"
            : isAttelexian
            ? "border-[#8B5CF6]/25 bg-[linear-gradient(135deg,rgba(139,92,246,0.045),rgba(56,189,248,0.025)_48%,rgba(255,255,255,0.012))]"
            : "border-white/20 bg-white/[0.018]"
        }`}
        style={
          teaser
            ? undefined
            : {
                boxShadow: isAttelexian
                  ? `0 0 0 1px ${project.palette[0]}24, 0 0 45px -28px ${project.palette[1]}70, 0 24px 90px -50px ${project.palette[0]}45`
                  : `0 0 0 1px ${project.palette[0]}1A, 0 24px 90px -50px ${project.palette[1]}70`,
              }
        }
      />

      {isAttelexian && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-[1.75rem] opacity-20 pointer-events-none md:rounded-[2rem]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 78%)",
          }}
        />
      )}

      {/* Ambient colour blob */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[420px] h-[420px] blur-3xl opacity-25 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(closest-side, ${project.palette[1]}88, transparent 70%)`,
        }}
      />

      {/* Teaser overlay — shown on top of blurred content */}
      {teaser && <TeaserOverlay project={project} />}

      {/* Card content */}
      <div
        aria-hidden={teaser}
        className={`relative z-10 flex flex-col gap-4 p-5 sm:gap-6 sm:p-8 lg:p-10 transition-all duration-500 ${
          teaser
            ? "blur-lg saturate-[0.7] opacity-35 select-none pointer-events-none scale-[1.03]"
            : ""
        }`}
      >
        {/* Header row: index + category */}
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/40">
          <span className="font-mono text-[#D4FF3A]">{project.index}</span>
          <span className="h-px w-8 bg-white/20" />
          <span>{project.category}</span>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:gap-12">
          {/* Left: name, description, meta, CTA */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              {project.logoSrc && (
                <img
                  src={project.logoSrc}
                  alt={`${project.name} logo`}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl object-cover ring-1 ring-white/10 flex-shrink-0"
                />
              )}
              <h3 className="text-[clamp(1.4rem,5vw,2.75rem)] leading-[1.02] tracking-[-0.03em] font-semibold">
                {project.name}
              </h3>
            </div>

            <p className="mt-2 sm:mt-4 text-[13px] sm:text-[15px] leading-relaxed text-white/65 max-w-xl">
              {project.description}
            </p>

            {/* Meta row */}
            <div className="mt-3 sm:mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
              <div>
                <div className="text-white/40 text-[10px] sm:text-[11px] uppercase tracking-[0.18em]">
                  Platform
                </div>
                <div className="mt-0.5 sm:mt-1 text-white/90 text-[13px]">{project.platform}</div>
              </div>
              <div>
                <div className="text-white/40 text-[10px] sm:text-[11px] uppercase tracking-[0.18em]">
                  Status
                </div>
                <div className="mt-0.5 sm:mt-1 inline-flex items-center gap-2 text-white/90">
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full ${
                        project.status === "Launching soon"
                          ? "bg-amber-400"
                          : project.status === "Available"
                          ? "bg-[#D4FF3A]"
                          : "bg-sky-400"
                      } opacity-70 animate-ping`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                        project.status === "Launching soon"
                          ? "bg-amber-400"
                          : project.status === "Available"
                          ? "bg-[#D4FF3A]"
                          : "bg-sky-400"
                      }`}
                    />
                  </span>
                  {project.status}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-4 min-h-10 sm:mt-8 flex flex-wrap items-center gap-3">
              {project.storeLinks.map((link) =>
                isPlaceholder(link.href) ? (
                  <div
                    key={link.label}
                    className="inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border border-dashed border-white/15 text-white/50 text-[13px]"
                    title="Real link to be provided"
                  >
                    <span className="placeholder">{link.label} link</span>
                  </div>
                ) : link.store === "web" ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-white text-[#0A0A0B] hover:bg-white/90 transition-colors text-[13px] font-medium"
                  >
                    {link.label}
                    <IconArrow className="w-4 h-4" />
                  </a>
                ) : (
                  <PlayStoreButton key={link.label} href={link.href} />
                )
              )}
            </div>
          </div>

          {/* Right: feature highlights — hidden on mobile, visible from lg */}
          <div className="hidden lg:block lg:w-[260px] lg:flex-shrink-0">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
              Highlights
            </div>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-[14px] text-white/75"
                >
                  <span className="w-1 h-1 rounded-full bg-[#D4FF3A] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Centred overlay shown on top of blurred Vardaan+ content.
 */
function TeaserOverlay({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center px-5 sm:px-6">
      <div className="max-w-md text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D4FF3A]/30 bg-[#D4FF3A]/[0.06] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#D4FF3A] sm:px-4 sm:text-[11px] sm:tracking-[0.2em]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4FF3A] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4FF3A]" />
          </span>
          {project.status}
        </div>

        <h3 className="mt-5 text-[clamp(2.35rem,13vw,4.5rem)] leading-[0.95] tracking-[-0.04em] font-semibold text-white sm:mt-6 sm:tracking-[-0.03em]">
          {project.name}
        </h3>

        <div className="mt-6 inline-flex max-w-full flex-wrap items-center justify-center gap-3 text-[13px] text-white/60">
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-[11px]">
            Platform
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-white/85">{project.platform}</span>
        </div>
      </div>
    </div>
  );
}
