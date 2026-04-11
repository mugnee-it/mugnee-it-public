"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare } from "lucide-react";
import { useState } from "react";
import { withTrailingSlash } from "@/lib/utils";

const fieldBase =
  "w-full rounded-2xl border border-slate-200/90 bg-slate-50/70 px-4 py-3.5 text-[0.9375rem] leading-relaxed text-slate-900 shadow-sm transition-[border-color,box-shadow,background-color] placeholder:text-slate-400 hover:border-slate-300 hover:bg-white/90 focus:border-amber-400/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass =
  "mb-1.5 block text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-slate-500";

export default function GetInTouch() {
  const reduce = useReducedMotion();
  const [statusText, setStatusText] = useState("");
  const [statusType, setStatusType] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const get = (key) => String(formData.get(key) || "").trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const message = get("message");
    const accessKey = String(
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    ).trim();

    setIsSubmitting(true);
    setStatusText("");
    setStatusType("idle");

    try {
      if (!accessKey) {
        throw new Error("Form service key is missing.");
      }

      const composedMessage = [
        "New enquiry from homepage",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Website Enquiry - ${name}`,
          from_name: "Mugnee IT Website",
          botcheck: "",
          name,
          email,
          phone,
          message: composedMessage,
        }),
      });

      const raw = await res.text();
      const data = (() => {
        try {
          return JSON.parse(raw);
        } catch {
          return {};
        }
      })();

      if (!res.ok || !data?.success) {
        throw new Error(
          data?.message ||
            raw ||
            `Failed to send message. (HTTP ${res.status})`
        );
      }

      form.reset();
      setStatusText("Message sent successfully. We will contact you soon.");
      setStatusType("success");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to send message.";
      setStatusText(msg);
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#fafaf9] via-white to-slate-50/80"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-[480px] w-[480px] rounded-full bg-amber-100/35 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[440px] w-[440px] rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:pt-2"
          >
            <p className="inline-flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-amber-600/90">
              <span className="h-px w-8 bg-gradient-to-r from-amber-500/80 to-transparent" aria-hidden />
              Get in touch
            </p>

            <h2
              id="contact-title"
              className="mt-5 text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 md:text-[2.75rem] md:leading-[1.1]"
            >
              Great things start with{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  a real conversation.
                </span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-amber-400/40 via-yellow-400/30 to-transparent"
                  aria-hidden
                />
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-[1.75] text-slate-600 md:text-[1.0625rem]">
              Share your requirement and get a practical action plan. We support both
              Bangladesh businesses and international clients.
            </p>

            <div className="mt-8">
              <Link
                prefetch={false}
                href={withTrailingSlash("/schedule-consultation")}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-slate-900/20 ring-1 ring-white/10 transition hover:bg-slate-800 hover:shadow-xl"
              >
                Free consultation + SEO audit offer
                <ArrowRight className="h-3.5 w-3.5 opacity-90" aria-hidden />
              </Link>
            </div>

            <div className="mt-12 space-y-3">
              <InfoItem icon={Mail} title="Email" value="mugnee.it at gmail.com" />
              <InfoItem icon={Phone} title="Phone / WhatsApp" value="+880 1958-645415" />
              <InfoItem icon={MapPin} title="Location" value="Dhaka, Bangladesh (Worldwide)" />
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className={[
                "relative overflow-hidden rounded-[1.75rem] border border-slate-200/70",
                "bg-white/75 p-6 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.14),0_0_0_1px_rgba(255,255,255,0.6)_inset]",
                "backdrop-blur-xl md:rounded-[2rem] md:p-9",
              ].join(" ")}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-200/20 blur-2xl"
                aria-hidden
              />

              <div className="relative mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/90 to-yellow-500/85 text-slate-900 shadow-md shadow-amber-500/20">
                  <MessageSquare className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-lg font-bold tracking-tight text-slate-900 md:text-xl">
                    Start a conversation
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    Tell us about your goals—we&apos;ll respond with next steps.
                  </p>
                </div>
              </div>

              <form className="relative grid gap-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    label="Full name"
                    name="name"
                    placeholder="Your name"
                    required
                    className={fieldBase}
                    labelClassName={labelClass}
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                    className={fieldBase}
                    labelClassName={labelClass}
                  />
                </div>

                <Input
                  label="Phone / WhatsApp"
                  name="phone"
                  placeholder="+880..."
                  required
                  className={fieldBase}
                  labelClassName={labelClass}
                />

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, timeline, and budget…"
                    required
                    className={`${fieldBase} min-h-[140px] resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative mt-1 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 py-4 text-sm font-bold text-slate-900 shadow-lg shadow-amber-500/25 ring-1 ring-amber-300/50 transition hover:shadow-xl hover:shadow-amber-500/35 disabled:pointer-events-none disabled:opacity-55"
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="relative">
                    {isSubmitting ? "Sending…" : "Send message"}
                  </span>
                  <Send
                    className="relative h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </button>

                {statusText ? (
                  <p
                    className={[
                      "rounded-2xl px-4 py-3 text-center text-xs font-semibold leading-relaxed",
                      statusType === "success"
                        ? "border border-emerald-200/80 bg-emerald-50/90 text-emerald-800"
                        : "border border-rose-200/80 bg-rose-50/90 text-rose-800",
                    ].join(" ")}
                    role="status"
                  >
                    {statusText}
                  </p>
                ) : (
                  <p className="text-center text-[0.8125rem] leading-relaxed text-slate-500">
                    We usually reply within <span className="font-semibold text-slate-600">24 hours</span>.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, title, value }) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-transparent px-1 py-3 transition hover:border-slate-200/60 hover:bg-white/60">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 text-amber-600 shadow-sm ring-1 ring-amber-200/40 transition group-hover:ring-amber-300/50">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div className="min-w-0 pt-0.5">
        <p className="text-[0.8125rem] font-bold uppercase tracking-wide text-slate-500">{title}</p>
        <p className="mt-0.5 text-[0.9375rem] font-medium leading-relaxed text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", placeholder, required, className, labelClassName }) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}
