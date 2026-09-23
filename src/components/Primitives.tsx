import type { ReactNode } from "react";
import { IconArrow } from "./Icons";

export function SectionLabel({
  children,
  dot = true,
}: {
  children: ReactNode;
  dot?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/50 font-medium">
      {dot && (
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4FF3A] shadow-[0_0_10px_#D4FF3A]" />
      )}
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "accent";
  icon?: boolean;
  className?: string;
}) {
  const styles = {
    primary:
      "bg-white text-[#0A0A0B] hover:bg-[#D4FF3A] hover:text-[#0A0A0B]",
    accent:
      "bg-[#D4FF3A] text-[#0A0A0B] hover:bg-white",
    ghost:
      "bg-transparent text-white border border-white/15 hover:border-white/40 hover:bg-white/[0.04]",
  }[variant];

  return (
    <a
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap px-5 py-3 rounded-full text-[13px] font-medium transition-all duration-300 ${styles} ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <IconArrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function PlaceholderTag({ children }: { children: ReactNode }) {
  return <span className="placeholder">{children}</span>;
}

/** Thin hairline divider used across sections */
export function Divider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

/** A soft radial blob (pure CSS). */
export function Blob({
  className = "",
  color = "#D4FF3A",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      style={{
        background: `radial-gradient(closest-side, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}

export function PlayStoreButton({
  href,
  label = "Get it on Google Play",
}: {
  href: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-[#0A0A0B] hover:bg-white/90 transition-colors"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7l9.6-9.7L3.6 2.3Z" />
        <path d="M17 9.1l-3.1 3.1 3.1 3.1 3.5-2c.8-.5.8-1.7 0-2.2L17 9.1Z" />
        <path d="M3.6 21.7c.3.3.7.4 1.1.2l10.1-5.8-3.2-3.2-8 8.8Z" opacity=".9" />
        <path d="M14.8 7.9 4.7 2.1c-.4-.2-.8-.1-1.1.2l8 8.8 3.2-3.2Z" opacity=".9" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-[#0A0A0B]/60 font-medium">
          {label.includes("App Store") ? "Download on the" : "Get it on"}
        </span>
        <span className="text-[15px] font-semibold">
          {label.includes("App Store") ? "App Store" : "Google Play"}
        </span>
      </div>
    </a>
  );
}
