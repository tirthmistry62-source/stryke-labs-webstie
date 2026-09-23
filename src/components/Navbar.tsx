import { useEffect, useState } from "react";
import { nav } from "../content";
import { Logo } from "./Logo";
import { IconArrow } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-5">
      <nav
        className={`
          w-full max-w-6xl flex items-center justify-between
          transition-all duration-500 ease-out
          ${
            scrolled
              ? "py-2 px-3 sm:px-4 bg-[#0A0A0B]/75 backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]"
              : "py-2.5 px-3.5 sm:py-3 sm:px-5 bg-white/[0.02] backdrop-blur-sm border border-white/[0.04] rounded-2xl"
          }
        `}
      >
        <Logo size={scrolled ? 36 : 42} />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="px-3 py-2 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#build"
            className="group hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-[#0A0A0B] text-[13px] font-medium hover:bg-[#D4FF3A] transition-colors"
          >
            Build with us
            <IconArrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 md:hidden"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute left-3 right-3 top-[64px] rounded-2xl border border-white/[0.08] bg-[#0D0D0F]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden sm:left-4 sm:right-4 sm:top-[72px]">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={n.href}
                  className="block px-4 py-3 text-sm text-white/80 hover:bg-white/[0.04] rounded-xl"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#build"
                className="block px-4 py-3 text-sm text-[#D4FF3A] font-medium rounded-xl"
              >
                Build with us →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
