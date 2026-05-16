interface Props {
  number: string;
  label: string;
}

export default function SectionNumber({ number, label }: Props) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-[family-name:var(--font-bebas)] text-5xl lg:text-6xl text-[#e8a020]/30 leading-none select-none">
        {number}
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a9590]">
        {label}
      </span>
    </div>
  );
}
