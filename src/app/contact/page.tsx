import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — KNP Sport Psychology",
  description:
    "Book a session, ask a question, or find out which support option is right for you. Contact KNP Sport Psychology.",
};

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 4 10 9 10-9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.98-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="grain relative min-h-[55vh] flex items-end overflow-hidden pb-20"
        style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0d1520 60%, #1a2332 100%)" }}
        aria-label="Contact"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36">
          <p className="text-[#e8a020] text-xs font-semibold uppercase tracking-[0.25em] mb-6 animate-fade-up">
            Start Here
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-6xl sm:text-8xl lg:text-9xl leading-none tracking-wide text-[#f0ede8] uppercase animate-fade-up-delay-1">
            Get <span className="text-[#e8a020]">In Touch</span>
          </h1>
          <p className="text-[#f0ede8]/60 text-xl max-w-xl mt-6 animate-fade-up-delay-2">
            Book a session, ask a question, or find out which support option is right for you.
          </p>
        </div>
      </section>

      {/* ── Form + Details ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32" aria-label="Contact form and details">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl text-[#f0ede8] tracking-wide uppercase mb-8">
              Send a Message
            </h2>
            <ContactForm />
          </ScrollReveal>

          {/* Details */}
          <ScrollReveal delay={0.15}>
            <div className="lg:pt-16">
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl text-[#f0ede8] tracking-wide uppercase mb-8">
                Contact Details
              </h2>

              <ul className="flex flex-col gap-6 mb-12" role="list">
                <li>
                  <a
                    href="mailto:info@knpsportpsychology.com"
                    className="flex items-center gap-4 text-[#9a9590] hover:text-[#f0ede8] transition-colors duration-200 group"
                  >
                    <span className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#e8a020] group-hover:text-[#e8a020] transition-all duration-200 flex-shrink-0">
                      <MailIcon />
                    </span>
                    info@knpsportpsychology.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:07717101695"
                    className="flex items-center gap-4 text-[#9a9590] hover:text-[#f0ede8] transition-colors duration-200 group"
                  >
                    <span className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#e8a020] group-hover:text-[#e8a020] transition-all duration-200 flex-shrink-0">
                      <PhoneIcon />
                    </span>
                    07717 101695
                  </a>
                </li>
              </ul>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a9590] mb-6">
                  Follow us
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[#9a9590] hover:border-[#e8a020] hover:text-[#e8a020] transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://twitter.com/knpsportpsych"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[#9a9590] hover:border-[#e8a020] hover:text-[#e8a020] transition-all duration-200"
                    aria-label="Twitter / X"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="https://instagram.com/knpsportpsych"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[#9a9590] hover:border-[#e8a020] hover:text-[#e8a020] transition-all duration-200"
                    aria-label="Instagram (@knpsportpsych)"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>

              <div className="mt-12 p-8 border border-white/10 bg-[#111118] rounded-sm">
                <h3 className="font-semibold text-[#f0ede8] mb-3">What happens next?</h3>
                <ol className="flex flex-col gap-3" role="list">
                  {[
                    "We receive your message and review your situation",
                    "Keval follows up within 24–48 hours",
                    "We arrange a short introductory call to understand your goals",
                    "Your first session is scheduled",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#9a9590]">
                      <span className="font-[family-name:var(--font-bebas)] text-lg text-[#e8a020] leading-none w-5 flex-shrink-0 pt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
