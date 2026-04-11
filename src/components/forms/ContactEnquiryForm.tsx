"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

type Props = {
  preSelectedService?: string;
};

const SERVICE_PARAM_MAP: Record<string, string> = {
  shopify: "WordPress / Shopify",
  wordpress: "WordPress / Shopify",
  softwares: "Software Products (License)",
  "web-scraping": "Other",
  seo: "SEO (Technical + Content)",
  "lead-generation": "Lead Generation",
  "linkedin-setter": "Lead Generation",
  nextjs: "Next.js Website",
  "mern-stack": "MERN Stack App",
  "mobile-app-development": "Mobile App Development",
  webmail: "Webmail / DNS Support",
  "software-solution": "Custom Software",
};

export default function ContactEnquiryForm({ preSelectedService = "" }: Props) {
  const [statusText, setStatusText] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState(preSelectedService);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const serviceParam = String(params.get("service") || "").trim().toLowerCase();
    const resolvedService =
      SERVICE_PARAM_MAP[serviceParam] || preSelectedService || "";

    if (resolvedService) {
      setSelectedService(resolvedService);
    }

    if (serviceParam && typeof window !== "undefined") {
      window.history.replaceState({}, "", "/contact/");
    }
  }, [preSelectedService]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.currentTarget;
    const formData = new FormData(form);

    const get = (key: string) => String(formData.get(key) || "").trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const service = get("service");
    const company = get("company");
    const timeline = get("timeline");
    const message = get("message");

    const composedMessage = [
      `Service: ${service}`,
      `Company: ${company || "N/A"}`,
      `Expected Timeline: ${timeline || "N/A"}`,
      "",
      "Project Details:",
      message,
    ].join("\n");

    setIsSubmitting(true);
    setStatusText("");
    setStatusType("idle");
    try {
      const accessKey = String(
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
      ).trim();

      if (!accessKey) {
        throw new Error("Form service is not configured.");
      }

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
          service,
          company: company || "N/A",
          expected_timeline: timeline || "N/A",
          message: composedMessage,
        }),
      });

      const raw = await res.text();
      const data = (() => {
        try {
          return JSON.parse(raw) as { success?: boolean; message?: string };
        } catch {
          return {} as { success?: boolean; message?: string };
        }
      })();
      if (!res.ok || !data?.success) {
        throw new Error(
          data?.message || raw || `Failed to send message. (HTTP ${res.status})`
        );
      }

      form.reset();
      setSelectedService("");
      setStatusText("Message sent successfully. We will contact you soon.");
      setStatusType("success");
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Failed to send message.";
      setStatusText(msg);
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Your full name" required />
        <Field label="Business Email" name="email" placeholder="you@company.com" type="email" required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone / WhatsApp" name="phone" placeholder="+880..." required />
        <Field
          label="Service"
          name="service"
          asSelect
          options={[
            "Next.js Website",
            "MERN Stack App",
            "Mobile App Development",
            "WordPress / Shopify",
            "SEO (Technical + Content)",
            "Graphics / Brand Design",
            "Lead Generation",
            "Webmail / DNS Support",
            "Software Products (License)",
            "Custom Software",
            "Other",
          ]}
          value={selectedService}
          onValueChange={setSelectedService}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company (Optional)" name="company" placeholder="Company name" />
        <Field label="Expected Timeline" name="timeline" placeholder="e.g. 2-4 weeks" />
      </div>

      <Field
        label="Project Details"
        name="message"
        placeholder="Share your goal, pages/features, current problem, and target timeline..."
        asTextarea
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </button>

      {statusText ? (
        <p
          className={[
            "rounded-xl px-3 py-2 text-xs font-semibold",
            statusType === "success"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border border-rose-200 bg-rose-50 text-rose-700",
          ].join(" ")}
        >
          {statusText}
        </p>
      ) : null}

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
        We use your information only to respond to your request. We never sell your data.
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  asTextarea,
  asSelect,
  options = [],
  value = "",
  onValueChange,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  asTextarea?: boolean;
  asSelect?: boolean;
  options?: string[];
  value?: string;
  onValueChange?: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-extrabold tracking-[0.14em] text-slate-600">{label}</span>

      {asTextarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={6}
          required={required}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
        />
      ) : asSelect ? (
        <select
          name={name}
          required={required}
          value={value}
          onChange={(e) => onValueChange?.(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
        >
          <option value="" disabled>
            Select service
          </option>
          {options.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
        />
      )}
    </label>
  );
}
