import { company } from "../content";

/**
 * Stryke Labs wordmark + logo mark.
 */
export function Logo({
  size = 28,
  showWordmark = true,
  className = "",
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Stryke Labs home"
    >
      <img
        src="/images/stryke-labs-icon.png"
        alt="Stryke Labs"
        className="rounded-lg object-contain"
        style={{ width: size, height: size }}
      />
      {showWordmark && (
        <span className="flex items-baseline leading-none">
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-white">
            {company.name}
          </span>
        </span>
      )}
    </a>
  );
}
