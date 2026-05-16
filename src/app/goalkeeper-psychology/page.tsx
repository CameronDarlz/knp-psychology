import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionNumber from "@/components/SectionNumber";
import TestimonialCard from "@/components/TestimonialCard";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Goalkeeper Psychology — KNP Sport Psychology",
  description:
    "Specialist sport psychology for goalkeepers. Overcome mistakes, improve confidence, and reduce fear. Work with a former goalkeeper turned performance psychologist.",
};

const whoWeSupport = [
  {
    icon: "🎯",
    title: "Struggling with confidence & fear of mistakes",
    desc: "We develop mental skills to help you play with confidence over 40+ match seasons, turning setbacks into growth.",
  },
  {
    icon: "⚽",
    title: "Professionals developing high-performance mindsets",
    desc: "We work with professionals from the highest level to maximise performance in training and on match day.",
  },
  {
    icon: "🔄",
    title: "Loan goalkeepers adapting to new environments",
    desc: "We build a mental framework to help you hit the ground running and integrate quickly at a new club.",
  },
  {
    icon: "🏆",
    title: "Non-league and Academy goalkeepers",
    desc: "Frequent psychological support to handle adversity, build resilience, and develop at every level of the game.",
  },
];

const supportOptions = [
  {
    title: "Online Sessions",
    desc: "55-minute video call sessions from anywhere in the world. Flexible scheduling around your training and fixtures.",
    detail: "Zoom / Teams / FaceTime",
  },
  {
    title: "Face-to-Face",
    desc: "In-person sessions in London, or we travel to your club. Ideal for immersive work around training environments.",
    detail: "London or we come to you",
  },
  {
    title: "Block Booking",
    desc: "Book a block of 5 sessions and save. Consistent support is where the deepest transformation happens.",
    detail: "5-session package available",
  },
];

const testimonials = [
  {
    quote:
      "Keval and I first began working together at Wycombe Wanderers FC when I was 1st Team Goalkeeping coach. He has an excellent ability to build strong and trusting relationships with players and management, having a significantly positive impact on performance in a short period of time. He brings a completely new perspective and really grasps the nature of the environments he works in. He's played the game to a high level, unlike others in his field.",
    name: "Martin Brennan",
    role: "Ex-Premier League Goalkeeping Coach",
  },
  {
    quote:
      "About a year ago I was having a bad time and reached out to Keval. He really helped me understand my mind and the problems I perceived I was facing so we could solve them together. It helped massively with my goalkeeping and took me to another level due to his commitment and attention to detail. He really understands what goalkeepers go through because he's been there and played the game.",
    name: "Alfie Marigliani",
    role: "Wealdstone FC",
  },
  {
    quote:
      "I knew how to train physically and technically, but the mental side of the game was something I struggled with — especially at 19. I used to struggle getting into a focused zone and with pre-game nerves. With Keval's help I've completely changed my perception of goalkeeping and life for the good. He's not only helped me become a better athlete but a better person. I would highly recommend Keval to any ambitious athlete looking to add 10% to their game.",
    name: "Aiden Smith",
    role: "Non-League Goalkeeper",
  },
];

const faqItems = [
  {
    question: "Why work with a psychologist?",
    answer:
      "The highest-performing goalkeepers in the world invest in their mental game just as much as their physical and technical development. A psychologist gives you the tools to manage pressure, handle mistakes without spiralling, and bring your best self to training and matches consistently.",
  },
  {
    question: "How does it work?",
    answer:
      "Sessions are 1-to-1, tailored to your level and goals. We use cognitive-behavioural and solutions-focused approaches to explore the link between your thoughts, feelings, and behaviours — then build practical strategies you can use immediately. You become an active problem-solver in your own performance.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Simply get in touch via the contact page or email info@knpsportpsychology.com. We'll arrange a short introductory call to understand what you're looking for before scheduling your first full session.",
  },
  {
    question: "What can I achieve?",
    answer:
      "Clients typically report improved confidence, reduced anxiety around mistakes, better pre-match routines, stronger focus during play, and a more consistent mental approach over a season. Many also find benefits that extend beyond sport into daily life.",
  },
];

const frequencyLevels = [
  {
    level: "Professional / Elite",
    color: "#e8a020",
    desc: "Ongoing seasonal support, scheduled around your training programme and match calendar.",
  },
  {
    level: "Non-League / Academy",
    color: "#e8a020",
    desc: "Fortnightly sessions over a few months to learn and embed core mental skills.",
  },
  {
    level: "Amateur",
    color: "#e8a020",
    desc: "Average 5–6 sessions on a fortnightly basis — focused, impactful, and affordable.",
  },
];

export default function GoalkeeperPsychologyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="grain relative min-h-screen flex items-end overflow-hidden pb-20"
        aria-label="Goalkeeper Psychology hero"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(160deg, #0a0a0f 0%, #0d1520 50%, #1a2332 80%, #0a0a0f 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(232,160,32,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40">
          <p className="text-[#e8a020] text-xs font-semibold uppercase tracking-[0.25em] mb-6 animate-fade-up">
            Specialist Service
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-6xl sm:text-8xl lg:text-[10rem] leading-none tracking-wide text-[#f0ede8] uppercase animate-fade-up-delay-1">
            Goalkeeper
            <br />
            <span className="text-[#e8a020]">Psychology</span>
          </h1>
          <p className="text-[#f0ede8]/65 text-xl lg:text-2xl font-light max-w-lg mt-6 mb-10 animate-fade-up-delay-2">
            Overcome Mistakes. Improve Confidence. Reduce Fear.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#e8a020] text-[#0a0a0f] font-semibold tracking-wide hover:bg-[#c8881a] transition-colors duration-200 rounded-sm"
            >
              Book Your First Session
            </Link>
            <Link
              href="#why"
              className="px-8 py-4 border border-white/25 text-[#f0ede8] font-semibold tracking-wide hover:border-white/60 hover:bg-white/5 transition-all duration-200 rounded-sm"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 01 — Why ── */}
      <section
        id="why"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        aria-labelledby="why-heading"
      >
        <ScrollReveal>
          <SectionNumber number="01" label="Why Goalkeeper Psychology?" />
          <h2
            id="why-heading"
            className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight max-w-3xl mb-8"
          >
            The Most Mentally Demanding Position on the Pitch
          </h2>
          <p className="text-[#9a9590] text-lg leading-relaxed max-w-3xl">
            Goalkeeping is one of the most mentally demanding positions in football. The game&rsquo;s
            most established high-performance goalkeepers now understand the benefits of working with
            a psychologist to forge and sustain careers in the modern game. At KNP Sport Psychology,
            we empower goalkeepers with the tools to perform and maximise the opportunities presented
            to them.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {[
              { stat: "16+", label: "Years playing experience at every level" },
              { stat: "1-to-1", label: "Personalised sessions tailored to your needs" },
              { stat: "All ages", label: "Working with goalkeepers from age 10 upwards" },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <p className="font-[family-name:var(--font-bebas)] text-5xl text-[#e8a020] tracking-wide">
                  {stat}
                </p>
                <p className="text-[#9a9590] text-sm mt-2">{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <hr className="divider max-w-7xl mx-auto px-6 lg:px-8" />

      {/* ── Section 02 — Who We Support ── */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        aria-labelledby="who-heading"
      >
        <ScrollReveal>
          <SectionNumber number="02" label="Who We Support" />
          <h2
            id="who-heading"
            className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-16"
          >
            Every Goalkeeper, Every Level
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whoWeSupport.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="card-glow border border-white/10 bg-[#111118] p-8 rounded-sm h-full">
                <span className="text-3xl mb-4 block" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-semibold text-[#f0ede8] text-lg mb-3">{item.title}</h3>
                <p className="text-[#9a9590] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <hr className="divider max-w-7xl mx-auto px-6 lg:px-8" />

      {/* ── Section 03 — How Sessions Work ── */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        aria-labelledby="sessions-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <SectionNumber number="03" label="How Sessions Work" />
            <h2
              id="sessions-heading"
              className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-8"
            >
              Built Around You
            </h2>
            <p className="text-[#9a9590] text-base leading-relaxed mb-6">
              Sessions are 1-to-1, tailored to your age and level — working with goalkeepers from
              age 10 upwards. We use cognitive-behavioural and solutions-focused approaches to
              explore the link between your thoughts, feelings, and behaviours.
            </p>
            <p className="text-[#9a9590] text-base leading-relaxed">
              Goalkeepers become active problem-solvers — not passive recipients. Every session
              builds practical tools you can use immediately, the next training session, the next
              game.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-4 mt-8 lg:mt-20">
              {[
                {
                  title: "Cognitive-Behavioural Approach",
                  desc: "Understand and reshape the thought patterns that drive your performance.",
                },
                {
                  title: "Solutions-Focused",
                  desc: "We concentrate on what works and build from your strengths forward.",
                },
                {
                  title: "Active Problem-Solving",
                  desc: "You leave every session with tools you can apply immediately.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 border border-white/8 bg-[#111118]/50 rounded-sm"
                >
                  <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#e8a020]/40 w-8 flex-shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#f0ede8] text-base mb-1">{item.title}</h3>
                    <p className="text-[#9a9590] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Goalkeeper Edge Program ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        aria-labelledby="edge-program-heading"
        style={{
          background:
            "linear-gradient(160deg, #0c0b07 0%, #110e02 40%, #0d0c08 70%, #0a0a0f 100%)",
        }}
      >
        {/* Ambient glow layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(232,160,32,0.1) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(232,160,32,0.06) 0%, transparent 50%)",
          }}
        />
        {/* Grain */}
        <div className="grain absolute inset-0 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            {/* Card */}
            <div
              className="rounded-sm p-8 lg:p-14 relative overflow-hidden"
              style={{
                border: "1px solid rgba(232,160,32,0.45)",
                boxShadow:
                  "0 0 0 1px rgba(232,160,32,0.08), 0 0 80px rgba(232,160,32,0.12), inset 0 0 80px rgba(232,160,32,0.04)",
                background:
                  "linear-gradient(160deg, rgba(22,18,4,0.98) 0%, rgba(16,14,2,0.98) 100%)",
              }}
            >
              {/* Inner corner glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(232,160,32,0.12) 0%, transparent 65%)",
                }}
              />

              {/* Badge */}
              <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 text-[#0a0a0f] text-xs font-bold uppercase tracking-[0.2em] rounded-sm"
                  style={{ background: "#e8a020" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#0a0a0f] animate-pulse"
                    aria-hidden="true"
                  />
                  Cohort Now Open
                </span>
                <span className="text-[#e8a020]/50 text-xs font-semibold uppercase tracking-[0.2em]">
                  Group Programme
                </span>
              </div>

              {/* Headline */}
              <h2
                id="edge-program-heading"
                className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#f0ede8] tracking-wide uppercase leading-none mb-4"
              >
                The Goalkeeper
                <br />
                <span className="text-[#e8a020]">Edge Program</span>
              </h2>
              <p className="text-[#f0ede8]/70 text-lg lg:text-xl max-w-2xl leading-relaxed mb-10">
                A live, group psychology programme built exclusively for goalkeepers who are serious
                about their mental game.
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-[#e8a020]/40 mb-10" />

              {/* Body copy */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="text-[#9a9590] text-base leading-relaxed mb-4">
                    Most goalkeepers train their body and their technique — but leave the mental
                    side to chance. The Goalkeeper Edge Program changes that.
                  </p>
                  <p className="text-[#9a9590] text-base leading-relaxed">
                    This is a live, cohort-based group programme where you&rsquo;ll train your
                    mindset alongside a small group of goalkeepers who share the same drive to
                    improve. Led by Keval Patel, each session tackles a specific mental challenge
                    facing goalkeepers — from bouncing back after mistakes, to managing pre-match
                    nerves, to building the kind of unshakeable confidence that holds over a full
                    season.
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-4" role="list" aria-label="What's included">
                  {[
                    "Live group sessions led by Keval Patel",
                    "A structured mental skills curriculum built for goalkeepers",
                    "Peer learning alongside driven, like-minded goalkeepers",
                    "Practical tools you can apply immediately in training and matches",
                    "Access to session recordings and resources",
                    "A community of goalkeepers committed to the mental edge",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-[#e8a020]/60 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
                          <path
                            d="M1 4l2.5 2.5L9 1"
                            stroke="#e8a020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-[#f0ede8]/80 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who it's for */}
              <div className="mb-10">
                <p className="text-[#9a9590] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Who it&rsquo;s for
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Academy & non-league goalkeepers",
                    "Semi-professional goalkeepers",
                    "Goalkeepers aged 16+",
                  ].map((label) => (
                    <span
                      key={label}
                      className="px-4 py-2 text-sm font-medium text-[#e8a020] rounded-sm"
                      style={{
                        border: "1px solid rgba(232,160,32,0.3)",
                        background: "rgba(232,160,32,0.06)",
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing note */}
              <p className="text-[#9a9590]/70 text-sm italic mb-10">
                Pricing for the next cohort will be announced soon. Spaces are limited.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/contact?programme=goalkeeper-edge"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#e8a020] text-[#0a0a0f] font-bold tracking-wide hover:bg-[#c8881a] transition-colors duration-200 rounded-sm text-sm uppercase"
                >
                  Register Your Interest
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#options"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-[#e8a020]/40 text-[#e8a020] font-semibold tracking-wide hover:border-[#e8a020] hover:bg-[#e8a020]/5 transition-all duration-200 rounded-sm text-sm uppercase"
                >
                  Learn More About Sessions
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="divider max-w-7xl mx-auto px-6 lg:px-8" />

      {/* ── Section 04 — Support Frequency ── */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        aria-labelledby="frequency-heading"
      >
        <ScrollReveal>
          <SectionNumber number="04" label="Support Frequency" />
          <h2
            id="frequency-heading"
            className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-16"
          >
            Flexible to Your Season
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frequencyLevels.map((item, i) => (
            <ScrollReveal key={item.level} delay={i * 0.12}>
              <div className="border-t-2 border-[#e8a020] bg-[#111118] p-8 rounded-b-sm h-full">
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#f0ede8] tracking-wide uppercase mb-4">
                  {item.level}
                </h3>
                <p className="text-[#9a9590] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <hr className="divider max-w-7xl mx-auto px-6 lg:px-8" />

      {/* ── Section 05 — Support Options ── */}
      <section
        id="options"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        aria-labelledby="options-heading"
      >
        <ScrollReveal>
          <SectionNumber number="05" label="Support Options" />
          <h2
            id="options-heading"
            className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-16"
          >
            Choose How We Work Together
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportOptions.map((opt, i) => (
            <ScrollReveal key={opt.title} delay={i * 0.12}>
              <div className="card-glow border border-white/10 bg-[#111118] p-8 rounded-sm h-full flex flex-col">
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#f0ede8] tracking-wide uppercase mb-3">
                  {opt.title}
                </h3>
                <p className="text-[#9a9590] text-sm leading-relaxed flex-1">{opt.desc}</p>
                <p className="text-[#e8a020] text-xs font-semibold uppercase tracking-[0.15em] mt-6 pt-6 border-t border-white/8">
                  {opt.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Section 07 — Testimonials ── */}
      <section
        className="bg-[#080810] border-y border-white/8 py-24 lg:py-32"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionNumber number="07" label="Testimonials" />
            <h2
              id="testimonials-heading"
              className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-16"
            >
              Straight from the Athletes
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <TestimonialCard {...t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="max-w-4xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        aria-labelledby="faq-heading"
      >
        <ScrollReveal>
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#9a9590] text-base mb-12">
            Everything you need to know before getting started.
          </p>
        </ScrollReveal>
        <Accordion items={faqItems} />
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="grain relative overflow-hidden py-24 lg:py-32"
        style={{ background: "linear-gradient(135deg, #1a2332 0%, #0a0a0f 100%)" }}
        aria-label="Book a session"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl lg:text-7xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-6">
              Book Your First Session
            </h2>
            <p className="text-[#9a9590] text-lg mb-10">
              Take the first step. The mental edge is just one conversation away.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#e8a020] text-[#0a0a0f] font-semibold tracking-wide hover:bg-[#c8881a] transition-colors duration-200 rounded-sm text-base"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
