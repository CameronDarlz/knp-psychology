import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services — KNP Sport Psychology",
  description:
    "Goalkeeper psychology, sport psychology, golf psychology, and workshops. Find the service that's right for you.",
};

const services = [
  {
    number: "01",
    href: "/goalkeeper-psychology",
    tag: "Primary Service",
    title: "Goalkeeper Psychology",
    desc: "The most mentally demanding position on a football pitch. We give goalkeepers the tools to handle mistakes, sustain confidence across a season, and perform at the highest level they're capable of.",
    features: [
      "1-to-1 sessions tailored to your level",
      "Confidence & mistake recovery",
      "Pre-match routines & focus",
      "Loan & adaptation support",
    ],
  },
  {
    number: "02",
    href: "/contact",
    tag: "All Sports",
    title: "Sport Psychology",
    desc: "For athletes across all sports seeking a mental performance edge. Whether you're a sprinter, a rugby player, or a tennis pro — the mental game is universal, and so are our methods.",
    features: [
      "Performance anxiety management",
      "Goal-setting & motivation",
      "Focus & concentration training",
      "Competition preparation",
    ],
  },
  {
    number: "03",
    href: "/contact",
    tag: "Golf",
    title: "Golf Psychology",
    desc: "Precision under pressure. Golf is arguably the most mental sport there is — played in silence, in isolation, with time to overthink every shot. We help you master the space between shots.",
    features: [
      "Course management mindset",
      "Pre-shot routine development",
      "Handling pressure putts",
      "Post-round emotional regulation",
    ],
  },
  {
    number: "04",
    href: "/contact",
    tag: "Groups & Teams",
    title: "Workshops",
    desc: "Group workshops for clubs, academies, and organisations. We bring sport psychology principles to teams — creating shared language, mental frameworks, and a culture of psychological performance.",
    features: [
      "Bespoke content for your group",
      "Club & academy workshops",
      "Team resilience sessions",
      "Coach & parent education",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="grain relative min-h-[60vh] flex items-end overflow-hidden pb-20"
        style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0d1520 60%, #1a2332 100%)" }}
        aria-label="Services"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36">
          <p className="text-[#e8a020] text-xs font-semibold uppercase tracking-[0.25em] mb-6 animate-fade-up">
            What We Offer
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-6xl sm:text-8xl lg:text-9xl leading-none tracking-wide text-[#f0ede8] uppercase animate-fade-up-delay-1">
            Our <span className="text-[#e8a020]">Services</span>
          </h1>
          <p className="text-[#f0ede8]/60 text-xl max-w-xl mt-6 animate-fade-up-delay-2">
            Performance psychology for goalkeepers, athletes, golfers, and teams.
          </p>
        </div>
      </section>

      {/* ── Services list ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32" aria-label="Service list">
        <div className="flex flex-col gap-8">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 0.08}>
              <article className="card-glow border border-white/10 bg-[#111118] rounded-sm overflow-hidden">
                <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-[family-name:var(--font-bebas)] text-4xl text-[#e8a020]/25 leading-none">
                        {svc.number}
                      </span>
                      <span className="text-[#e8a020] text-xs font-semibold uppercase tracking-[0.2em]">
                        {svc.tag}
                      </span>
                    </div>
                    <h2 className="font-[family-name:var(--font-bebas)] text-4xl lg:text-5xl text-[#f0ede8] tracking-wide uppercase mb-4">
                      {svc.title}
                    </h2>
                    <p className="text-[#9a9590] text-base leading-relaxed">{svc.desc}</p>
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <ul className="flex flex-col gap-3 mb-8" role="list">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-[#9a9590]">
                          <span className="text-[#e8a020] mt-0.5 flex-shrink-0" aria-hidden="true">
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-[#e8a020] text-[#e8a020] text-sm font-semibold tracking-wide hover:bg-[#e8a020] hover:text-[#0a0a0f] transition-all duration-200 rounded-sm"
                    >
                      {svc.href === "/goalkeeper-psychology" ? "Learn More" : "Get in Touch"}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="grain relative overflow-hidden py-24"
        style={{ background: "linear-gradient(135deg, #1a2332 0%, #0a0a0f 100%)" }}
        aria-label="Book a session"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-6">
              Not Sure Which Service Is Right?
            </h2>
            <p className="text-[#9a9590] text-lg mb-10">
              Get in touch and we&rsquo;ll figure it out together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#e8a020] text-[#0a0a0f] font-semibold tracking-wide hover:bg-[#c8881a] transition-colors duration-200 rounded-sm text-base"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
