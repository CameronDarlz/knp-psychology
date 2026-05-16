interface Props {
  quote: string;
  name: string;
  role: string;
  delay?: number;
}

export default function TestimonialCard({ quote, name, role }: Props) {
  return (
    <article className="card-glow border border-white/10 bg-[#111118] p-8 lg:p-10 flex flex-col gap-6 rounded-sm">
      <svg
        width="36"
        height="28"
        viewBox="0 0 36 28"
        fill="none"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <path
          d="M0 28V17.5C0 7.833 4.167 2.167 12.5 0L14.5 3C11.167 4 8.833 5.833 7.5 8.5C6.167 11.167 5.667 13.5 6 15.5H12V28H0ZM20 28V17.5C20 7.833 24.167 2.167 32.5 0L34.5 3C31.167 4 28.833 5.833 27.5 8.5C26.167 11.167 25.667 13.5 26 15.5H32V28H20Z"
          fill="#e8a020"
          fillOpacity="0.4"
        />
      </svg>
      <blockquote>
        <p className="text-[#f0ede8]/85 leading-relaxed text-base lg:text-lg">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <footer>
        <p className="font-semibold text-[#f0ede8]">{name}</p>
        <p className="text-[#e8a020] text-sm mt-0.5">{role}</p>
      </footer>
    </article>
  );
}
