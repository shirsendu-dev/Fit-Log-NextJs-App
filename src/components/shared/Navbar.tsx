"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();

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
    <header className="sticky top-0 z-50 border-b border-border bg-background-deep/95 backdrop-blur-md">
      <div className="navbar mx-auto h-20 max-w-[1280px] px-6">

        {/* Navbar Start - Logo */}
        <div className="navbar-start">
          <Link
            href="/"
            className="flex items-center gap-[10px]"
          >
            <Image
              src="/assets/logo.png"
              alt="FitLog logo"
              width={28}
              height={28}
              priority
              className="h-7 w-7 object-contain"
            />

            <span className="font-display text-[25px] font-bold tracking-[0.9px] text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Navbar Center - Desktop Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-1 p-0">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex h-8 min-h-0 items-center rounded-full px-4 py-0 text-[15px] ${active
                      ? "bg-[#1a2312] font-semibold text-accent"
                      : "font-medium text-muted hover:bg-[#1a2312] hover:text-accent"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">

          {/* Desktop Plan / Saved */}
          <div className="hidden items-center gap-6 md:flex">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="group flex items-center gap-2"
            >
              <span className="text-[15px] font-medium text-secondary group-hover:text-white">
                Plan
              </span>

              <span className="badge h-5 min-h-5 w-5 border-0 bg-accent p-0 text-[12px] font-bold text-black">
                0
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className="group flex items-center gap-2"
            >
              <span className="text-[15px] font-medium text-muted group-hover:text-white">
                Saved
              </span>

              <span className="badge h-5 min-h-5 w-5 border border-border bg-transparent p-0 text-[12px] font-medium text-secondary group-hover:border-accent group-hover:text-accent">
                0
              </span>
            </Link>

          </div>

          {/* Mobile Dropdown */}
          <div className="dropdown dropdown-end md:hidden">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square text-white"
            >
              <FiMenu size={24} />
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-60 rounded-xl border border-border bg-background-deep p-3 shadow-xl"
            >

              {/* Mobile Menu Links */}
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-lg px-4 py-3 text-sm ${active
                        ? "bg-[#1a2312] font-semibold text-accent"
                        : "font-medium text-muted hover:bg-[#1a2312] hover:text-accent"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}

              {/* Divider */}
              <div className="my-2 border-t border-border" />

              {/* Mobile Plan */}
              <li>
                <Link
                  href="/my-plan"
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-secondary hover:bg-surface"
                >
                  <span>Plan</span>

                  <span className="badge h-5 min-h-5 w-5 border-0 bg-accent p-0 text-[11px] font-bold text-black">
                    0
                  </span>
                </Link>
              </li>

              {/* Mobile Saved */}
              <li>
                <Link
                  href="/my-plan"
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-muted hover:bg-surface"
                >
                  <span>Saved</span>

                  <span className="badge h-5 min-h-5 w-5 border border-border bg-transparent p-0 text-[11px] text-secondary">
                    0
                  </span>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;