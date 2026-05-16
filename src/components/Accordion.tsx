"use client";

import { useState } from "react";

interface Item {
  question: string;
  answer: string;
}

interface Props {
  items: Item[];
}

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-white/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="py-6">
            <button
              className="flex items-center justify-between w-full text-left gap-6 group"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-[#f0ede8] font-semibold text-lg group-hover:text-[#e8a020] transition-colors duration-200">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-[#e8a020] border-[#e8a020] rotate-45" : "group-hover:border-[#e8a020]"
                }`}
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2v8M2 6h8" stroke={isOpen ? "#0a0a0f" : "#f0ede8"} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
              <p className="text-[#9a9590] leading-relaxed pt-4 pr-12">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
