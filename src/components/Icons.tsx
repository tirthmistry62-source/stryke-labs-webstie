import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
} as const;

export function IconLayers(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 18 9 5 9-5" />
    </svg>
  );
}

export function IconDevice(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function IconSpark(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}

export function IconCode(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16" />
    </svg>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconPlay(p: IconProps) {
  return (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M3 2.5v19l16-9.5L3 2.5Z" />
    </svg>
  );
}

export function IconGooglePlay(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 3.5 15 12 4 20.5V3.5Z" />
      <path d="m4 3.5 13.5 7.5" />
      <path d="m4 20.5 13.5-7.5" />
      <path d="M17.5 11 20 12l-2.5 1" />
    </svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconLinkedin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </svg>
  );
}

export function IconGithub(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.5c-2.5.54-3.03-1.2-3.03-1.2-.4-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.1.98 2.62.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.46 0-.99.35-1.8.93-2.43-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.48.93a8.63 8.63 0 0 1 4.52 0c1.72-1.17 2.48-.93 2.48-.93.5.25.18 1.17.09 2.4.58.63.92 1.44.92 2.43 0 3.47-2.1 4.23-4.11 4.45.32.28.6.82.6 1.66v2.46c0 .24.16.52.62.43A9 9 0 0 0 12 3Z" />
    </svg>
  );
}

export function IconX(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4h4l5 7 5-7h2L14 12l6 8h-4l-5-7-5 7H4l6-8-6-8Z" />
    </svg>
  );
}

export const iconMap = {
  layers: IconLayers,
  device: IconDevice,
  spark: IconSpark,
  code: IconCode,
} as const;
