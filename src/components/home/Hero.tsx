import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="mx-auto mt-12 max-w-[1280px] px-6">
            <div className="flex flex-col items-center justify-between gap-10 rounded-2xl border border-border bg-surface p-8 text-center lg:min-h-[448px] lg:flex-row lg:px-14 lg:py-14 lg:text-left">

                {/* Left Content */}
                <div className="w-full max-w-[560px]">

                    {/* Eyebrow */}
                    <p className="mb-5 text-[11px] font-bold uppercase leading-[1.5] tracking-[1.1px] text-accent">
                        WORKOUT LIBRARY
                    </p>

                    {/* Heading */}
                    <h1 className="font-display text-[38px] font-bold uppercase leading-none tracking-[-1px] text-white sm:text-[48px] lg:text-[60px] lg:tracking-[-1.5px]">
                        TRAIN WITH INTENT. LOG
                        <span className="block">EVERY SET.</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-[512px] text-sm leading-6 text-muted sm:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* CTA */}
                    <div className="mt-7">
                        <Link
                            href="#library"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 text-xs font-bold uppercase tracking-[0.3px] text-black transition-opacity duration-200 hover:opacity-90"
                        >
                            Browse Workout
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex w-full items-center justify-center lg:w-auto">
                    <Image
                        src="/assets/banner.png"
                        alt="FitLog workout illustration"
                        width={334}
                        height={334}
                        priority
                        // className="h-auto w-full max-w-[300px] object-contain sm:max-w-[320px] lg:h-[334px] lg:w-[400px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;