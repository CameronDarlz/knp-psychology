import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials — KNP Sport Psychology",
  description:
    "What goalkeepers and athletes say about working with KNP Sport Psychology and Keval Patel.",
};

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

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="grain relative min-h-[60vh] flex items-end overflow-hidden pb-20"
        style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0d1520 60%, #1a2332 100%)" }}
        aria-label="Testimonials"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36">
          <p className="text-[#e8a020] text-xs font-semibold uppercase tracking-[0.25em] mb-6 animate-fade-up">
            What Athletes Say
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-6xl sm:text-8xl lg:text-9xl leading-none tracking-wide text-[#f0ede8] uppercase animate-fade-up-delay-1">
            Real <span className="text-[#e8a020]">Results</span>
          </h1>
        </div>
      </section>

      {/* ── Testimonial cards ── */}
      <section
        className="max-w-5xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        aria-label="Testimonials"
      >
        <div className="flex flex-col gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <TestimonialCard {...t} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="grain relative overflow-hidden py-24"
        style={{ background: "linear-gradient(135deg, #1a2332 0%, #0a0a0f 100%)" }}
        aria-label="Write your own story"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl lg:text-7xl text-[#f0ede8] tracking-wide uppercase leading-tight mb-6">
              Ready to Write Your Own Story?
            </h2>
            <p className="text-[#9a9590] text-lg mb-10">
              Join the athletes who&rsquo;ve already made the investment in their mental game.
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
