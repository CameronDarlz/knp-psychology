import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCard from "@/components/TestimonialCard";

const stats = [
  { value: "16+", label: "Years as a Goalkeeper" },
  { value: "Pro", label: "Premier League & EFL Experience" },
  { value: "Online & In-Person", label: "Sessions Available" },
  { value: "All Levels", label: "Age 10 to Professional" },
];

const services = [
  {
    href: "/goalkeeper-psychology",
    tag: "Primary Service",
    title: "Goalkeeper Psychology",
    desc: "The most mentally demanding position on the pitch. We help you thrive under the pressure that only a goalkeeper truly understands.",
  },
  {
    href: "/services",
    tag: "All Sports",
    title: "Sport Psychology",
    desc: "For athletes across all sports seeking a mental performance edge. Unlock what's holding you back and compete at your ceiling.",
  },
  {
    href: "/services",
    tag: "Golf",
    title: "Golf Psychology",
    desc: "Precision under pressure. The mental game separates good from great — whether on the first tee or the final green.",
  },
];

const testimonials = [
  {
    quote:
      "Keval has an excellent ability to build strong and trusting relationships with players and management, having a significantly positive impact on performance in a short period of time.",
    name: "Martin Brennan",
    role: "Ex-Premier League Goalkeeping Coach",
  },
  {
    quote:
      "He really helped me understand my mind and the problems I perceived I was facing so we could solve them together. It helped massively with my goalkeeping and took me to another level.",
    name: "Alfie Marigliani",
    role: "Wealdstone FC",
  },
  {
    quote:
      "With Keval's help I've completely changed my perception of goalkeeping and life for the good. I would highly recommend Keval to any ambitious athlete looking to add 10% to their game.",
    name: "Aiden Smith",
    role: "Non-League Goalkeeper",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="grain relative min-h-screen flex items-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0f 0%, #0f131a 40%, #1a2332 70%, #0a0a0f 100%)",
          }}
        />
        {/* Diagonal accent line */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background:
              "linear-gradient(to bottom right, transparent 60%, rgba(232,160,32,0.08) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <p className="animate-fade-up text-[#e8a020] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              KNP Sport Psychology
            </p>
            <h1 className="animate-fade-up-delay-1 font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-wide text-[#f0ede8] uppercase">
              The Mental Edge
              <br />
              <span className="text-[#e8a020]">Goalkeepers</span>
              <br />
              Need
            </h1>
            <p className="animate-fade-up-delay-2 text-[#f0ede8]/70 text-lg lg:text-xl leading-relaxed max-w-xl mt-8">
              Sport Psychology for elite and aspiring goalkeepers. Overcome mistakes. Build
              unshakeable confidence. Perform under pressure.
            </p>
            <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4 mt-10">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#e8a020] text-[#0a0a0f] font-semibold tracking-wide hover:bg-[#c8881a] transition-colors duration-200 rounded-sm"
              >
                Book a Session
              </Link>
              <Link
                href="/goalkeeper-psychology"
                className="px-8 py-4 border border-white/25 text-[#f0ede8] font-semibold tracking-wide hover:border-white/60 hover:bg-white/5 transition-all duration-200 rounded-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs uppercase tracking-[0.2em] text-[#f0ede8]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#f0ede8] to-transparent" />
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section
        className="bg-[#1a2332] border-y border-white/8"
        aria-label="Key stats"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center text-center lg:px-8">
                <dt className="font-[family-name:var(--font-bebas)] text-3xl lg:text-4xl text-[#e8a020] tracking-wide">
                  {value}
                </dt>
                <dd className="text-[#9a9590] text-xs uppercase tracking-[0.12em] mt-1.5">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32" aria-label="Services overview">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-[family-name:var(--font-bebas)] text-5xl text-[#e8a020]/25 leading-none">
              01
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a9590]">
              What We Do
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase max-w-2xl leading-tight mb-4">
            Performance Psychology for Athletes
          </h2>
          <p className="text-[#9a9590] text-lg max-w-xl leading-relaxed mb-16">
            Whether you&rsquo;re a goalkeeper at a professional club or a weekend golfer, the mental
            game is where champions are made.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 0.12}>
              <Link
                href={svc.href}
                className="card-glow block border border-white/10 bg-[#111118] p-8 lg:p-10 rounded-sm h-full group"
              >
                <span className="text-[#e8a020] text-xs font-semibold uppercase tracking-[0.2em]">
                  {svc.tag}
                </span>
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl lg:text-4xl text-[#f0ede8] tracking-wide uppercase mt-4 mb-4 group-hover:text-[#e8a020] transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-[#9a9590] leading-relaxed text-sm">{svc.desc}</p>
                <span className="inline-flex items-center gap-2 mt-8 text-[#e8a020] text-sm font-semibold">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <hr className="divider max-w-7xl mx-auto px-6 lg:px-8" />

      {/* ── Testimonials preview ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32" aria-label="Testimonials">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-[family-name:var(--font-bebas)] text-5xl text-[#e8a020]/25 leading-none">
              02
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a9590]">
              What Athletes Say
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-16">
            Results That Speak
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.12}>
              <TestimonialCard {...t} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="amber-link text-sm font-semibold uppercase tracking-[0.15em]"
          >
            Read Full Testimonials
          </Link>
        </ScrollReveal>
      </section>

      {/* ── CTA ── */}
      <section
        className="grain relative overflow-hidden py-24 lg:py-32"
        style={{ background: "linear-gradient(135deg, #1a2332 0%, #0a0a0f 100%)" }}
        aria-label="Call to action"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl lg:text-7xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-6">
              Ready to Upgrade Your Mindset?
            </h2>
            <p className="text-[#9a9590] text-lg mb-10">
              Take the first step toward becoming the athlete you know you can be.
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
