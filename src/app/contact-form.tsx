"use client";

import { useMemo, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const formspreeEndpoint = useMemo(() => {
    return process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() ?? "";
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("sending");
    setMessage("");

    try {
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Formspree request failed");
        }
      } else {
        const subject = encodeURIComponent(String(formData.get("subject") ?? "Portfolio inquiry"));
        const name = encodeURIComponent(String(formData.get("name") ?? ""));
        const email = encodeURIComponent(String(formData.get("email") ?? ""));
        const body = encodeURIComponent(
          `Name: ${formData.get("name") ?? ""}\nEmail: ${formData.get("email") ?? ""}\n\n${formData.get("message") ?? ""}`,
        );
        window.location.href = `mailto:mesacharlesluigi@gmail.com?subject=${subject}&body=${body}%0A%0AFrom: ${name} <${email}>`;
      }

      form.reset();
      setState("sent");
      setMessage(
        formspreeEndpoint
          ? "Message sent. I’ll receive it through Formspree."
          : "Your email app opened with the message prefilled.",
      );
    } catch {
      setState("error");
      setMessage("Submission failed. Please try again or email mesacharlesluigi@gmail.com directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/80">
          Name
          <input
            name="name"
            required
            className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-200/60"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/80">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-200/60"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-white/80">
        Subject
        <input
          name="subject"
          required
          className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-200/60"
          placeholder="Project inquiry or opportunity"
        />
      </label>

      <label className="grid gap-2 text-sm text-white/80">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-3xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-200/60"
          placeholder="Tell me what you want to build or discuss."
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "sending" ? "Sending..." : "Send message"}
        </button>
        <p className={`text-sm ${state === "error" ? "text-rose-200" : "text-emerald-100"}`}>{message}</p>
      </div>
    </form>
  );
}