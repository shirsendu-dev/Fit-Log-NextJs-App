"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Workouts",
      href: "/",
    },
    {
      name: "My Plan",
      href: "/my-plan",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname.startsWith("/workout/");
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1c1f26] bg-[#0c0d10]/95 backdrop-blur-md">
      <div className="mx-auto grid h-20 max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center px-6">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-[10px] justify-self-start"
        >
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={28}
            height={28}
            priority
            className="h-7 w-7 object-contain"
          />

          <span className="font-display text-[25px] font-bold leading-7 tracking-[0.9px] text-white">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-7 items-center md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex h-7 items-center justify-center rounded-full px-4 text-[15px] transition-all duration-200 ${active
                    ? "bg-[#1a2312] font-semibold text-[#c2f800]"
                    : "font-medium text-[#9ca3af] hover:bg-[#1a2312] hover:text-[#c2f800]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center justify-self-end gap-6 md:flex">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="group flex items-center gap-2"
          >
            <span className="text-[15px] font-medium text-[#d1d5db] transition-colors group-hover:text-white">
              Plan
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c2f800] text-[12px] font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="group flex items-center gap-2"
          >
            <span className="text-[15px] font-medium text-[#9ca3af] transition-colors group-hover:text-white">
              Saved
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2d313b] text-[12px] font-medium text-[#d1d5db] transition-colors group-hover:border-[#c2f800] group-hover:text-[#c2f800]">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end text-white md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
            >
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#1c1f26] bg-[#0c0d10] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${active
                      ? "bg-[#1a2312] text-[#c2f800]"
                      : "text-[#9ca3af] hover:bg-[#1a2312] hover:text-[#c2f800]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 flex items-center gap-6 border-t border-[#1c1f26] pt-4">
            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="text-xs font-medium text-[#d1d5db]">
                Plan
              </span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c2f800] text-[11px] font-bold text-black">
                0
              </span>
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="text-xs font-medium text-[#9ca3af]">
                Saved
              </span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2d313b] text-[11px] font-medium text-[#d1d5db]">
                0
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;