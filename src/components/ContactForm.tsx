"use client";

import { useState, useEffect, useRef } from "react";

const PROGRAMME_LABELS: Record<string, string> = {
  "goalkeeper-edge": "Goalkeeper Edge Program",
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const programme = params.get("programme");
    if (programme && messageRef.current && !messageRef.current.value) {
      const label = PROGRAMME_LABELS[programme] ?? programme;
      messageRef.current.value = `Hi, I'm interested in registering for the ${label}. Please send me more details about the next cohort.`;
    }
  }, []);

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    if (!String(data.get("name")).trim()) errs.name = "Name is required.";
    const email = String(data.get("email")).trim();
    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email.";
    if (!String(data.get("message")).trim()) errs.message = "Message is required.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("submitting");
    // Simulate network delay — replace with actual API call
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
    form.reset();
  }

  if (state === "success") {
    return (
      <div className="border border-[#e8a020]/40 bg-[#e8a020]/5 rounded-sm p-8 text-center">
        <p className="text-[#e8a020] font-semibold text-lg mb-2">Message sent!</p>
        <p className="text-[#9a9590] text-sm">Thanks for reaching out. Keval will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#f0ede8]/80 mb-2">
          Full Name <span className="text-[#e8a020]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full bg-[#111118] border border-white/10 text-[#f0ede8] px-4 py-3 rounded-sm text-sm placeholder:text-[#9a9590]/50 focus:outline-none focus:border-[#e8a020] transition-colors duration-200"
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-red-400 text-xs mt-1.5">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#f0ede8]/80 mb-2">
          Email Address <span className="text-[#e8a020]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full bg-[#111118] border border-white/10 text-[#f0ede8] px-4 py-3 rounded-sm text-sm placeholder:text-[#9a9590]/50 focus:outline-none focus:border-[#e8a020] transition-colors duration-200"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-red-400 text-xs mt-1.5">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#f0ede8]/80 mb-2">
          Phone <span className="text-[#9a9590] text-xs font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full bg-[#111118] border border-white/10 text-[#f0ede8] px-4 py-3 rounded-sm text-sm placeholder:text-[#9a9590]/50 focus:outline-none focus:border-[#e8a020] transition-colors duration-200"
          placeholder="07xxx xxxxxx"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#f0ede8]/80 mb-2">
          Message <span className="text-[#e8a020]">*</span>
        </label>
        <textarea
          ref={messageRef}
          id="message"
          name="message"
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full bg-[#111118] border border-white/10 text-[#f0ede8] px-4 py-3 rounded-sm text-sm placeholder:text-[#9a9590]/50 focus:outline-none focus:border-[#e8a020] transition-colors duration-200 resize-none"
          placeholder="Tell us a bit about yourself and how we can help..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-red-400 text-xs mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="self-start px-8 py-3.5 bg-[#e8a020] text-[#0a0a0f] font-semibold tracking-wide hover:bg-[#c8881a] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 rounded-sm"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {state === "error" && (
        <p role="alert" className="text-red-400 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
