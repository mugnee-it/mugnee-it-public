import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-static";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const RECIPIENT = process.env.CONTACT_RECIPIENT || "mugnee.it@gmail.com";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const preferredPort = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const passRaw = process.env.SMTP_PASS;
    const pass = String(passRaw || "").replace(/\s+/g, "");

    if (!host || !user || !pass) {
      return NextResponse.json(
        { ok: false, error: "Mail server is not configured." },
        { status: 500 }
      );
    }

    const ports = getPortFallbacks(preferredPort);
    let lastError: unknown = null;

    for (const port of ports) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
          connectionTimeout: 15000,
          greetingTimeout: 15000,
          socketTimeout: 20000,
        });

        await transporter.verify();
        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Website Lead" <${user}>`,
          to: RECIPIENT,
          replyTo: email,
          subject: `New Website Enquiry - ${name}`,
          text: [
            "New enquiry from website",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone / WhatsApp: ${phone}`,
            "",
            "Message:",
            message,
          ].join("\n"),
          html: `
            <h2>New enquiry from website</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
          `,
        });

        return NextResponse.json({ ok: true });
      } catch (err: unknown) {
        lastError = err;
        const mapped = mapMailError(err);
        console.error("[contact-mail-attempt-failed]", { port, ...mapped.log });
        if (mapped.type === "auth") {
          break;
        }
      }
    }

    throw lastError || new Error("Mail transport failed on all ports.");
  } catch (err: unknown) {
    const mapped = mapMailError(err);
    const debug = process.env.CONTACT_DEBUG === "true";
    console.error("[contact-mail-error]", mapped.log);

    return NextResponse.json(
      {
        ok: false,
        error: mapped.message,
        ...(debug ? { detail: mapped.log } : {}),
      },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function mapMailError(err: unknown): {
  type: "auth" | "connection" | "policy" | "unknown";
  message: string;
  log: Record<string, unknown>;
} {
  const e = err as {
    message?: string;
    code?: string;
    response?: string;
    responseCode?: number;
    command?: string;
  };

  const code = e?.code || "UNKNOWN";
  const responseCode = e?.responseCode || null;
  const message = e?.message || "Unknown mail error";

  if (code === "EAUTH" || responseCode === 535) {
    return {
      type: "auth",
      message: "Mail auth failed. Check SMTP_USER/SMTP_PASS (App Password).",
      log: { code, responseCode, message, response: e?.response, command: e?.command },
    };
  }

  if (code === "ECONNECTION" || code === "ETIMEDOUT" || code === "ESOCKET") {
    return {
      type: "connection",
      message: "Mail server connection failed. Check SMTP host/port/firewall.",
      log: { code, responseCode, message, response: e?.response, command: e?.command },
    };
  }

  if (responseCode === 550 || responseCode === 553) {
    return {
      type: "policy",
      message: "Recipient or sender policy rejected by SMTP server.",
      log: { code, responseCode, message, response: e?.response, command: e?.command },
    };
  }

  return {
    type: "unknown",
    message: "Failed to send message.",
    log: { code, responseCode, message, response: e?.response, command: e?.command },
  };
}

function getPortFallbacks(preferredPort: number): number[] {
  if (preferredPort === 465) return [465, 587];
  if (preferredPort === 587) return [587, 465];
  return [preferredPort, 587, 465];
}
