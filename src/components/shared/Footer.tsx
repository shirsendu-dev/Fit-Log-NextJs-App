import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#1a1d24] bg-[#090a0d]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 py-6 text-center sm:flex-row sm:justify-between sm:py-6 sm:text-left">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 sm:justify-start">
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />

          <span className="font-display text-[25px] font-bold tracking-[0.7px] text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="max-w-[320px] text-sm leading-5 text-[#6b7280] sm:max-w-none sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, Log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;