// Central content file — all copy and data for the Stryke Labs website.
// Anything wrapped in [[ ]] is a placeholder waiting for real info from the founder.

export type Project = {
  id: string;
  index: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  platform: string;
  status: "Launching soon" | "Available" | "In development" | "Prototype";
  storeLinks: { label: string; href: string; store: "play" | "apple" | "web" }[];
  caseStudyHref?: string;
  /** Optional brand mark displayed beside the project name. */
  logoSrc?: string;
  /** Gradient palette used for the mock device screen */
  palette: [string, string, string];
  /** Mock UI variant rendered inside the device frame */
  mockVariant: "vardaan" | "tricep" | "syncly" | "generic";
};

export const company = {
  name: "Stryke Labs",
  tagline: "Build. Experiment. Ship.",
  domain: "[strykelabs.com]",
  accent: "#D4FF3A",
};

export const founder = {
  name: "Tirth Mistry",
  role: "Founder, Stryke Labs",
  bio: "Tirth Mistry is the founder of Stryke Labs.",
};

export const contact = {
  email: "strykelabs@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/tirth-mistry-ab0815406?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  linkedinLabel: "The Developer's LinkedIn Profile",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "About", href: "#about" },
];

export const hero = {
  eyebrow: "Stryke Labs · Independent product studio",
  headline: "We build products that matter.",
  supporting:
    "We design, build, and launch software and digital products — from our own ideas to products built for others.",
  primary: { label: "Explore our work", href: "#work" },
  secondary: { label: "Build with us →", href: "#build" },
  
};

export const whatWeDo = [
  {
    title: "Product Development",
    description: "Concept → design → development → launch.",
    icon: "layers",
  },
  {
    title: "Mobile & Web",
    description: "Modern applications designed for real users.",
    icon: "device",
  },
  {
    title: "AI & Intelligent Systems",
    description: "Practical AI-powered products and experiences.",
    icon: "spark",
  },
  {
    title: "Custom Software",
    description: "Software built around a specific problem, workflow, or business.",
    icon: "code",
  },
];

export const projects: Project[] = [
  {
    id: "vardaan-plus",
    index: "01",
    name: "Vardaan+",
    category: "Healthcare · Mobile · Platform",
    description:
      "A digital vaccination platform connecting parents, children, and doctors.",
    features: [
      "Parent dashboard",
      "Doctor workflow",
      "Vaccination timeline",
      "Push notifications",
      "Multilingual interface",
      "Secure account system",
    ],
    platform: "Android Mobile · Web",
    status: "Launching soon",
    storeLinks: [
      { label: "Google Play", href: "[VARDAAN+ PLAY STORE LINK]", store: "play" },
    ],
    caseStudyHref: "#",
    palette: ["#6EE7B7", "#3B82F6", "#0EA5E9"],
    mockVariant: "vardaan",
  },
  {
    id: "syncly",
    index: "02",
    name: "Syncly",
    category: "Creator Tools · Video · Web",
    description:
      "Syncly turns your photos and videos into polished, beat-synced edits in minutes. Add a song—or extract audio from a video—and it automatically times clips, motion, and transitions to the rhythm.",
    features: [
      "Automatic beat-synced editing",
      "Photo and video uploads",
      "Audio extraction from video",
      "Music-driven transitions and motion",
      "High-quality 1080p exports",
      "Free to use",
    ],
    platform: "Web",
    status: "Available",
    storeLinks: [
      { label: "Try Syncly", href: "https://syncly-nu.vercel.app/", store: "web" },
    ],
    caseStudyHref: "https://syncly-nu.vercel.app/",
    logoSrc: "/images/syncly-logo.png",
    palette: ["#F6B73C", "#FFD35A", "#6B4D17"],
    mockVariant: "syncly",
  },
  {
    id: "attelexian",
    index: "03",
    name: "Attelexian",
    category: "AI Design Tools · Branding · Web",
    description:
      "An advanced logo-making studio for generating, refining, and exporting unique vector identities with complete creative control.",
    features: [
      "AI-powered logo concepts",
      "Editable vector canvas",
      "Professional design controls",
      "Gradient focal point editing",
      "Detailed stroke customization",
      "High-quality logo exports",
    ],
    platform: "Web",
    status: "Available",
    storeLinks: [
      { label: "Try Attelexian", href: "https://attelexian.vercel.app/", store: "web" },
    ],
    caseStudyHref: "https://attelexian.vercel.app/",
    logoSrc: "/images/attelexian-logo.png",
    palette: ["#8B5CF6", "#38BDF8", "#111827"],
    mockVariant: "generic",
  },
];

export const process = [
  { step: "01", title: "Discover", description: "Understand the problem." },
  { step: "02", title: "Design", description: "Design the experience and solution." },
  { step: "03", title: "Build", description: "Develop, test, and iterate." },
  { step: "04", title: "Launch", description: "Release, learn, and improve." },
];

export const exploring = [
  {
    title: "In Development",
    description: "New products currently being built.",
  },
  {
    title: "Experiments",
    description: "Exploring new ideas in AI, software, and emerging technology.",
  },
  {
    title: "Future Products",
    description: "Ideas currently being researched and prototyped.",
  },
];

export const services = [
  "Websites",
  "Mobile Apps",
  "Custom Software",
  "AI Products",
  "MVPs",
];

export const tech = [
  "React",
  "TypeScript",
  "React Native",
  "Capacitor",
  "Firebase",
  "Supabase",
  "Cloudflare",
  "AI",
];
