import Link from "next/link";

const NotFound = () => {
    return (
        <section className="mx-auto flex min-h-[65vh] max-w-[1280px] items-center justify-center px-6 py-12">
            <div className="text-center">

                <p className="font-display text-[90px] font-bold leading-none text-accent sm:text-[120px]">
                    404
                </p>

                <h1 className="mt-4 font-display text-[30px] font-bold uppercase text-white sm:text-[36px]">
                    PAGE NOT FOUND
                </h1>

                <p className="mx-auto mt-3 max-w-[460px] text-sm leading-6 text-muted sm:text-base">
                    Looks like this workout went missing. Head back to the library and
                    keep training.
                </p>

                <Link
                    href="/#library"
                    className="btn mt-7 border-0 bg-accent px-7 text-sm font-semibold text-black hover:bg-accent hover:opacity-90"
                >
                    Back to Workout Library
                </Link>

            </div>
        </section>
    );
};

export default NotFound;