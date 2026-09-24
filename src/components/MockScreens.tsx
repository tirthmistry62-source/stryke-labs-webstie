import type { Project } from "../content";

/**
 * Mock Vardaan+ app screen — healthcare / vaccination platform.
 * Replace the entire <DeviceMock> inner content with real screenshots when provided.
 */
export function VardaanMock({ palette }: { palette: [string, string, string] }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-white to-slate-50 text-slate-900 p-5 flex flex-col">
      {/* Top status bar */}
      <div className="flex items-center justify-between text-[10px] font-medium text-slate-500">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-slate-400" />
          <span className="w-3 h-1.5 rounded-sm bg-slate-400" />
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500">Good morning</div>
          <div className="text-[17px] font-semibold tracking-tight">Priya</div>
        </div>
        <div className="w-9 h-9 rounded-full" style={{ background: palette[0] }} />
      </div>

      {/* Hero card */}
      <div
        className="mt-5 rounded-2xl p-4 text-white relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${palette[1]}, ${palette[2]})`,
        }}
      >
        <div className="text-[10px] uppercase tracking-wider opacity-80">
          Next vaccination
        </div>
        <div className="mt-1 text-[15px] font-semibold">MMR · Dose 2</div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-[11px] opacity-90">12 Feb · 10:30 AM</div>
          <div className="px-2.5 py-1 rounded-full bg-white/20 text-[10px] font-medium backdrop-blur">
            Scheduled
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[12px] font-semibold">Timeline</div>
          <div className="text-[10px] text-slate-500">View all</div>
        </div>
        <div className="space-y-2">
          {[
            { name: "BCG", done: true, date: "03 Jun" },
            { name: "OPV · Dose 1", done: true, date: "15 Jul" },
            { name: "Pentavalent", done: true, date: "28 Aug" },
            { name: "MMR · Dose 2", done: false, date: "12 Feb" },
          ].map((v, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-100/70"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  v.done ? "bg-emerald-500 text-white" : "border border-slate-300"
                }`}
              >
                {v.done && (
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <div className="text-[12px] font-medium">{v.name}</div>
                <div className="text-[9px] text-slate-500">{v.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="mt-auto pt-4 flex justify-around border-t border-slate-200/70">
        {["home", "timeline", "doctor", "profile"].map((t, i) => (
          <div
            key={t}
            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              i === 0 ? "bg-slate-900" : "bg-slate-100"
            }`}
          >
            <div
              className={`w-3 h-3 rounded-sm ${
                i === 0 ? "bg-white" : "bg-slate-400"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Mock Tricep Fulcrum app screen — fitness tracking.
 */
export function TricepMock({ palette }: { palette: [string, string, string] }) {
  return (
    <div className="relative w-full h-full bg-[#0B0B0D] text-white p-5 flex flex-col">
      <div className="flex items-center justify-between text-[10px] font-medium text-white/50">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="w-3 h-1.5 rounded-sm bg-white/40" />
        </span>
      </div>

      <div className="mt-6">
        <div className="text-[10px] uppercase tracking-wider text-white/40">
          Today's session
        </div>
        <div className="mt-1 text-[20px] font-semibold tracking-tight">
          Push · Triceps focus
        </div>
      </div>

      {/* Progress ring */}
      <div className="mt-5 flex items-center gap-4">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke={palette[2]}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="264"
              strokeDashoffset="75"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-[18px] font-bold">72%</div>
            <div className="text-[8px] uppercase tracking-wider text-white/50">
              Goal
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {[
            { l: "Sets", v: "18/25" },
            { l: "Volume", v: "3,240 kg" },
            { l: "Time", v: "42 min" },
          ].map((s) => (
            <div
              key={s.l}
              className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]"
            >
              <span className="text-white/50">{s.l}</span>
              <span className="font-medium">{s.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Exercise list */}
      <div className="mt-5 space-y-2">
        {[
          { n: "Close-grip bench", r: "4 × 8", c: palette[0] },
          { n: "Overhead extension", r: "3 × 12", c: palette[1] },
          { n: "Cable pushdown", r: "3 × 15", c: palette[2] },
          { n: "Dips", r: "3 × max", c: "#A78BFA" },
        ].map((ex, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold"
              style={{ background: `${ex.c}22`, color: ex.c }}
            >
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-medium">{ex.n}</div>
              <div className="text-[9px] text-white/40">{ex.r}</div>
            </div>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <div
          className="w-full py-3 rounded-xl text-center text-[12px] font-semibold text-[#0B0B0D]"
          style={{ background: palette[2] }}
        >
          Continue session →
        </div>
      </div>
    </div>
  );
}

/**
 * Generic placeholder screen — used as a fallback if a project has no mock.
 */
export function GenericMock({ palette }: { palette: [string, string, string] }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-6 text-white/80"
      style={{
        background: `linear-gradient(135deg, ${palette[0]}33, ${palette[1]}33, ${palette[2]}33)`,
      }}
    >
      <div
        className="w-16 h-16 rounded-2xl mb-4"
        style={{ background: `linear-gradient(135deg, ${palette[0]}, ${palette[2]})` }}
      />
      <div className="text-[13px] font-medium">Screenshots coming</div>
      <div className="text-[10px] text-white/50 mt-1">Placeholder</div>
    </div>
  );
}

/**
 * Device frame — renders any mock inside a phone-like bezel.
 * Replace children with <img src="screenshot.png" /> when real assets arrive.
 */
export function DeviceMock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Ambient glow behind the device */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[3rem] blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,255,58,0.3), transparent 70%)",
        }}
      />
      <div className="relative mx-auto w-[260px] sm:w-[290px] aspect-[9/19.5] rounded-[2.6rem] border border-white/10 bg-[#000000] p-[6px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="relative w-full h-full rounded-[2.15rem] overflow-hidden bg-[#000000]">
          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-24 h-6 rounded-full bg-black" />
          {/* Screen */}
          <div className="absolute inset-0">{children}</div>
          {/* Inner bevel */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.15rem] ring-1 ring-inset ring-white/5" />
        </div>
      </div>
    </div>
  );
}

/** Renders a real screenshot filling the device screen. */
export function ScreenshotMock({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top"
      loading="lazy"
    />
  );
}

export function MockFor({
  variant,
  palette,
}: {
  variant: Project["mockVariant"];
  palette: Project["palette"];
}) {
  if (variant === "vardaan")
    return (
      <ScreenshotMock
        src="/images/vardaan-screenshot.png"
        alt="Vardaan+ app — parent dashboard showing children and vaccination progress"
      />
    );
  if (variant === "syncly")
    return (
      <ScreenshotMock
        src="/images/syncly-screenshot.png"
        alt="Syncly web editor — media upload step"
      />
    );
  if (variant === "tricep") return <TricepMock palette={palette} />;
  return <GenericMock palette={palette} />;
}
