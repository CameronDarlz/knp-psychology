import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Keval Patel — KNP Sport Psychology",
  description:
    "Former goalkeeper with 16+ years playing experience. Now a performance psychologist specialising in goalkeeper and sport psychology.",
};

const credentials = [
  { title: "Performance Psychologist", detail: "Qualified & practising" },
  { title: "16+ Years", detail: "Goalkeeping experience" },
  { title: "Premier League & EFL", detail: "Professional playing background" },
  { title: "Cognitive-Behavioural", detail: "CBT-informed approach" },
  { title: "Solutions-Focused", detail: "Practical, results-driven methods" },
  { title: "All Levels", detail: "Age 10 to professional" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="grain relative min-h-[70vh] flex items-end overflow-hidden pb-20"
        style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0d1520 60%, #1a2332 100%)" }}
        aria-label="About Keval Patel"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(232,160,32,0.05) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36">
          <p className="text-[#e8a020] text-xs font-semibold uppercase tracking-[0.25em] mb-6 animate-fade-up">
            The Psychologist
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-6xl sm:text-8xl lg:text-9xl leading-none tracking-wide text-[#f0ede8] uppercase animate-fade-up-delay-1">
            About
            <br />
            <span className="text-[#e8a020]">Keval Patel</span>
          </h1>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32" aria-label="Biography">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <p className="text-[#9a9590] text-lg leading-relaxed mb-6">
              Keval Patel is a performance psychologist with a background that sets him apart from
              virtually everyone else in his field: he has lived the experience he now helps others
              navigate.
            </p>
            <p className="text-[#9a9590] text-lg leading-relaxed mb-6">
              With over 16 years as a goalkeeper — including experience at Premier League and EFL
              level — Keval understands the psychological demands of the position from the inside.
              The pressure of a penalty shootout. The weight of conceding a mistake. The challenge of
              holding your nerve when 10,000 people are watching.
            </p>
            <p className="text-[#9a9590] text-lg leading-relaxed">
              That personal experience is the foundation of everything at KNP Sport Psychology. Keval
              doesn&rsquo;t just bring academic knowledge — he brings empathy, credibility, and a
              deep instinct for what goalkeepers and athletes actually need.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {/* Pull quote */}
            <blockquote className="border-l-4 border-[#e8a020] pl-8 py-2">
              <p className="font-[family-name:var(--font-bebas)] text-3xl lg:text-4xl text-[#f0ede8] tracking-wide leading-snug">
                &ldquo;I&rsquo;ve been where you are. I know what it feels like to let in a goal, to
                doubt yourself, to feel the weight of expectation. That experience is what makes this
                work different.&rdquo;
              </p>
              <footer className="mt-6">
                <p className="text-[#e8a020] text-sm font-semibold uppercase tracking-[0.15em]">
                  — Keval Patel
                </p>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <hr className="divider max-w-7xl mx-auto px-6 lg:px-8" />

      {/* ── Credentials ── */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        aria-labelledby="credentials-heading"
      >
        <ScrollReveal>
          <h2
            id="credentials-heading"
            className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-16"
          >
            Background & Credentials
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.08}>
              <div className="card-glow border border-white/10 bg-[#111118] p-8 rounded-sm h-full">
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#e8a020] tracking-wide uppercase mb-2">
                  {c.title}
                </h3>
                <p className="text-[#9a9590] text-sm">{c.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="grain relative overflow-hidden py-24"
        style={{ background: "linear-gradient(135deg, #1a2332 0%, #0a0a0f 100%)" }}
        aria-label="Contact call to action"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-6">
              Work With Keval
            </h2>
            <p className="text-[#9a9590] text-lg mb-10">
              Ready to experience psychology from someone who truly gets it?
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#e8a020] text-[#0a0a0f] font-semibold tracking-wide hover:bg-[#c8881a] transition-colors duration-200 rounded-sm text-base"
            >
              Book a Session
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
