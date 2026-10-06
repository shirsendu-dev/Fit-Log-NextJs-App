import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiBookmark, FiPlusSquare, FiArrowLeft } from "react-icons/fi";
import { getWorkoutById } from "@/src/lib/workouts";

type WorkoutDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

const WorkoutDetailsPage = async ({
    params,
}: WorkoutDetailsPageProps) => {
    const { id } = await params;

    const workout = await getWorkoutById(id);

    if (!workout) {
        notFound();
    }

    return (
        <section className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[588px_588px] xl:gap-14">

                {/* Left Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface sm:aspect-[5/4] lg:h-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full">

                    {/* Title */}
                    <h1 className="font-display text-[30px] font-bold uppercase leading-tight tracking-[-0.8px] text-white sm:text-[34px] lg:text-[36px]">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                        {workout.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Specs */}
                    <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-surface">

                        <div className="flex min-h-12 items-center justify-between gap-4 px-4 py-3 sm:px-6">
                            <span className="text-[11px] font-bold uppercase tracking-[0.6px] text-muted sm:text-xs">
                                Equipment
                            </span>

                            <span className="text-right text-sm font-medium text-secondary">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex min-h-12 items-center justify-between gap-4 border-t border-border px-4 py-3 sm:px-6">
                            <span className="text-[11px] font-bold uppercase tracking-[0.6px] text-muted sm:text-xs">
                                Difficulty
                            </span>

                            <span className="text-right text-sm font-medium text-secondary">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex min-h-12 items-center justify-between gap-4 border-t border-border px-4 py-3 sm:px-6">
                            <span className="text-[11px] font-bold uppercase tracking-[0.6px] text-muted sm:text-xs">
                                Sets
                            </span>

                            <span className="text-right text-sm font-medium text-secondary">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex min-h-12 items-center justify-between gap-4 border-t border-border px-4 py-3 sm:px-6">
                            <span className="text-[11px] font-bold uppercase tracking-[0.6px] text-muted sm:text-xs">
                                Reps
                            </span>

                            <span className="text-right text-sm font-medium text-secondary">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex min-h-12 items-center justify-between gap-4 border-t border-border px-4 py-3 sm:px-6">
                            <span className="text-[11px] font-bold uppercase tracking-[0.6px] text-muted sm:text-xs">
                                Duration
                            </span>

                            <span className="text-right text-sm font-medium text-secondary">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex min-h-12 items-center justify-between gap-4 border-t border-border px-4 py-3 sm:px-6">
                            <span className="text-[11px] font-bold uppercase tracking-[0.6px] text-muted sm:text-xs">
                                Calories
                            </span>

                            <span className="text-right text-sm font-medium text-secondary">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex min-h-12 items-center justify-between gap-4 border-t border-border px-4 py-3 sm:px-6">
                            <span className="text-[11px] font-bold uppercase tracking-[0.6px] text-muted sm:text-xs">
                                Rating
                            </span>

                            <span className="text-right text-sm font-medium text-secondary">
                                {workout.rating}
                            </span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-8">
                        <h2 className="font-display text-xl font-bold uppercase tracking-[0.5px] text-white">
                            Instructions
                        </h2>

                        <ol className="mt-4 space-y-3">
                            {workout.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-sm leading-6 text-secondary"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-black">
                                        {index + 1}
                                    </span>

                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="mt-9 grid grid-cols-1 gap-3 md:grid-cols-3">

                        <button
                            type="button"
                            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent px-3 text-[13px] font-semibold text-black transition-opacity hover:opacity-90"
                        >
                            <FiPlusSquare size={17} />
                            <span className="whitespace-nowrap">
                                Add to today&apos;s plan
                            </span>
                        </button>

                        <button
                            type="button"
                            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border px-3 text-[13px] font-medium text-white transition-colors hover:border-accent hover:text-accent"
                        >
                            <FiBookmark size={17} />
                            <span className="whitespace-nowrap">
                                Save for later
                            </span>
                        </button>

                        <Link
                            href="/#library"
                            className="inline-flex h-11 w-full items-center justify-center px-3 text-[13px] font-normal text-white transition-colors hover:text-accent"
                        >
                            <span className="whitespace-nowrap">
                                ← Back to Workout Library
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutDetailsPage;