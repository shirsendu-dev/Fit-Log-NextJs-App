import Image from "next/image";

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-[#1a1d24] bg-[#090a0d]">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-10">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/assets/logo.png"
                        alt="FitLog logo"
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                    />

                    <span className="font-display text-[22px] font-bold tracking-[0.7px] text-white">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-sm leading-4 text-[#6b7280]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;