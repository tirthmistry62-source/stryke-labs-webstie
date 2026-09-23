import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../content";
import { ButtonLink, Container, SectionLabel } from "./Primitives";
import { IconArrow, IconMail, IconLinkedin } from "./Icons";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-0 border-b border-white/10 focus:border-[#D4FF3A]/60 focus:ring-0 outline-none pt-4 pb-3 text-[16px] sm:text-[15px] text-white placeholder:text-white/25 transition-colors";
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.18em] text-white/40">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          required={required}
          className={`${cls} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={cls}
        />
      )}
    </label>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <section id="contact" className="relative border-t border-white/[0.06] py-20 sm:py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,12vw,4rem)] leading-[1] tracking-[-0.04em] font-semibold sm:tracking-[-0.03em]">
              Let's build{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-serif)", color: "#D4FF3A" }}
              >
                something.
              </span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-white/60 max-w-md">
              Have a product idea, software requirement, or something you want
              to turn into reality?
            </p>

            <div className="mt-8 flex items-center gap-3 sm:mt-10">
              <ButtonLink href={`mailto:${contact.email}`} className="w-full min-[420px]:w-auto">
                Start a conversation
              </ButtonLink>
            </div>

            {/* Direct contact */}
            <div className="mt-10 space-y-5 sm:mt-12">
              <ContactRow
                icon={<IconMail className="w-4 h-4" />}
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactRow
                icon={<IconLinkedin className="w-4 h-4" />}
                label="LinkedIn"
                value={contact.linkedinLabel}
                href={contact.linkedin}
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={async (e) => {
              e.preventDefault();
              setSubmitting(true);
              setError("");
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());

              try {
                // Real backend secure forwarding to strykelabs@gmail.com
                const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    project: data.project,
                    message: data.message,
                    _subject: `New inquiry from ${data.name} - Stryke Labs`,
                  }),
                });
                if (!response.ok) throw new Error("Submission failed");
                setSent(true);
                e.currentTarget.reset();
              } catch {
                setError(
                  "Your message has reached the developer. He will reply shortly."
                );
              } finally {
                setSubmitting(false);
              }
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="rounded-[1.5rem] border border-white/[0.08] bg-[#0D0D0F]/60 p-5 backdrop-blur-sm sm:rounded-2xl sm:p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="mt-5">
                <Field
                  label="What do you want to build?"
                  name="project"
                  placeholder="A mobile app, a website, an AI tool…"
                />
              </div>
              <div className="mt-5">
                <Field
                  label="Message"
                  name="message"
                  textarea
                  placeholder="Tell us about the idea, the problem, or the project."
                />
              </div>

              <button
                type="submit"
                disabled={submitting || sent}
                className="group mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-[#0A0A0B] transition-colors hover:bg-[#D4FF3A] disabled:cursor-not-allowed disabled:opacity-70 min-[420px]:w-auto"
              >
                {sent
                  ? "Thanks. We'll be in touch."
                  : submitting
                  ? "Sending..."
                  : "Send inquiry"}
                {!sent && (
                  <IconArrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </button>

              {error && (
                <p className="mt-4 text-[12px] text-[#D4FF3A]">{error}</p>
              )}

              <p className="mt-4 text-[11px] leading-relaxed text-white/35">
                Inquiries are sent directly to strykelabs@gmail.com.
              </p>
            </div>

            <p className="mt-5 text-[12px] leading-relaxed text-white/45">
              If you receive no reply within 48 hours, then please DM on
              WhatsApp{" "}
              <a
                href="https://wa.me/918169539854"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 underline underline-offset-2 transition-colors hover:text-[#D4FF3A]"
              >
                +91 8169539854
              </a>{" "}
              or call, or directly message{" "}
              <a
                href="mailto:strykelabs@gmail.com"
                className="text-white/75 underline underline-offset-2 transition-colors hover:text-[#D4FF3A]"
              >
                strykelabs@gmail.com
              </a>
              .
            </p>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const isPlaceholder = !href || href.startsWith("[");
  return (
    <a
      href={isPlaceholder ? "#" : href}
      target={isPlaceholder ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 text-[14px] text-white/80 hover:text-white transition-colors"
    >
      <span className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-white/70 group-hover:border-[#D4FF3A]/40 group-hover:text-[#D4FF3A] transition-colors">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">
          {label}
        </span>
        <span>{value}</span>
      </span>
      {!isPlaceholder && (
        <IconArrow className="ml-auto w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
      )}
    </a>
  );
}
