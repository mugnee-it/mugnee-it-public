"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

export default function ScheduleConsultationForm() {
  const [statusText, setStatusText] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.currentTarget;
    const formData = new FormData(form);

    const get = (key: string) => String(formData.get(key) || "").trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const consultType = get("consult_type");
    const date = get("date");
    const time = get("time");
    const meetingMode = get("meeting_mode");
    const topic = get("discussion_topic");

    const composedMessage = [
      "Consultation request details",
      "",
      `Consultation Type: ${consultType}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${time}`,
      `Meeting Preference: ${meetingMode}`,
      "",
      "Discussion Topic:",
      topic,
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
          subject: `New Consultation Request - ${name}`,
          from_name: "Mugnee IT Website",
          botcheck: "",
          name,
          email,
          phone,
          consultation_type: consultType,
          preferred_date: date,
          preferred_time: time,
          meeting_preference: meetingMode,
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
      setStatusText("Consultation request sent successfully.");
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
        <Field label="Phone / WhatsApp" name="phone" placeholder="+880 1958-645415" required />
        <SelectField
          label="Consultation Type"
          name="consult_type"
          required
          placeholder="Select a topic…"
          options={["Website Development", "SEO", "Graphic Design", "Web Scraping", "Software Solution", "Other"]}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Preferred Date" name="date" type="date" required />
        <Field label="Preferred Time" name="time" type="time" required />
      </div>

      <SelectField
        label="Meeting Preference"
        name="meeting_mode"
        required
        placeholder="How should we meet?"
        options={["Google Meet", "WhatsApp Call", "Phone Call", "Zoom"]}
      />

      <TextAreaField
        label="What do you want to discuss?"
        name="discussion_topic"
        placeholder="Share your business goal, current issue, target timeline, and what help you need."
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:bg-yellow-500"
      >
        {isSubmitting ? "Sending..." : "Confirm Let's Talk"}
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
      ) : (
        <p className="text-xs font-semibold text-slate-500">
          We usually reply within 24 hours.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-extrabold text-slate-900">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-yellow-400"
      />
    </div>
  );
}

function TextAreaField({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-extrabold text-slate-900">{label}</label>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-yellow-400"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-extrabold text-slate-900">{label}</label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-yellow-400"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
