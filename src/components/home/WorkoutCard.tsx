import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/src/types/Workout";

interface WorkoutCardProps  {
    workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="group overflow-hidden rounded-2xl border border-border bg-surface hover:border-accent"
        >
            {/* Workout Image */}
            <div className="relative h-80 w-full overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover object-[90%_10%] transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-6">

                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded bg-accent px-2.5 py-0.5 text-[11px] mb-2 font-bold uppercase tracking-[0.55px] text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h3 className="my-1.5 font-display text-[22px] font-bold uppercase leading-7 tracking-[0.45px] text-white transition-colors duration-200 group-hover:text-accent">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="text-xs leading-4 text-muted">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-4 flex items-center gap-4 border-t border-[#20242e] pt-3 text-xs text-muted">

                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="size-3.5"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                        </svg>

                        <span>{workout.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-3.5"
                        >
                            <path d="M12 22c4.4 0 8-3.3 8-7.7 0-3.1-1.8-5.8-4.6-8.5.1 2.1-.7 3.5-2 4.5.2-3.8-2.3-6.7-5.5-8.3.3 3.2-1.1 5.3-2.4 7.2C4.4 10.8 4 12.4 4 14.3 4 18.7 7.6 22 12 22Z" />
                        </svg>

                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            className="size-3.5"
                        >
                            <path d="m12 2.8 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9L6.4 20l1.1-6.2L3 9.4l6.2-.9L12 2.8Z" />
                        </svg>

                        <span>{workout.rating}</span>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;