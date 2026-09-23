import { company, contact, founder, nav } from "../content";
import { Container } from "./Primitives";
import { Logo } from "./Logo";
import { IconLinkedin } from "./Icons";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "About", href: "#about" },
  { label: "Build with us", href: "#build" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const socials = [
    {
      label: contact.linkedinLabel,
      icon: IconLinkedin,
      href: contact.linkedin,
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070708]">
      <Container className="py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size={32} />
            <p className="mt-5 text-[14px] text-white/55 max-w-sm leading-relaxed">
              {company.tagline}
            </p>
            <p className="mt-2 text-[14px] text-white/70 max-w-sm leading-relaxed">
              <span className="text-white">{founder.name}</span> is the founder of Stryke Labs.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">
              Navigate
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 min-[420px]:grid-cols-3 md:grid-cols-2">
              {[...nav, ...footerLinks.slice(3)].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">
              Connect
            </div>
            <ul className="space-y-3">
              {socials.map((s) => {
                const Icon = s.icon;
                const isPlaceholder = s.href.startsWith("[");
                return (
                  <li key={s.label}>
                    <a
                      href={isPlaceholder ? "#" : s.href}
                      target={isPlaceholder ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] text-white/70 hover:text-white transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-[12px] text-white/40 sm:mt-14 sm:flex-row sm:items-center">
          <div>© 2026 {company.name}. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4FF3A] opacity-50 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4FF3A]" />
            </span>
            Building in public
          </div>
        </div>
      </Container>
    </footer>
  );
}
