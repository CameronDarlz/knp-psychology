"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/goalkeeper-psychology", label: "Goalkeeper Psychology" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-bebas)] text-xl lg:text-2xl tracking-[0.12em] text-[#f0ede8] hover:text-[#e8a020] transition-colors duration-200"
            aria-label="KNP Sport Psychology home"
          >
            KP <span className="text-[#e8a020]">|</span> SPORT PSYCHOLOGY
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    pathname === href
                      ? "text-[#e8a020]"
                      : "text-[#f0ede8]/75 hover:text-[#f0ede8]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="ml-2 px-5 py-2.5 bg-[#e8a020] text-[#0a0a0f] text-sm font-semibold tracking-wide hover:bg-[#c8881a] transition-colors duration-200 rounded-sm"
              >
                Book a Session
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`block w-6 h-0.5 bg-[#f0ede8] transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#f0ede8] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#f0ede8] transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#111118] border-l border-white/10 flex flex-col pt-20 px-8 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-6" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-lg font-medium tracking-wide transition-colors duration-200 ${
                    pathname === href ? "text-[#e8a020]" : "text-[#f0ede8]/80 hover:text-[#f0ede8]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/contact"
              className="block w-full text-center px-5 py-3 bg-[#e8a020] text-[#0a0a0f] font-semibold tracking-wide hover:bg-[#c8881a] transition-colors duration-200 rounded-sm"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
