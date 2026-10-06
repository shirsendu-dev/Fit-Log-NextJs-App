import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { IoFlameOutline } from "react-icons/io5";
import { Workout } from "@/src/types/Workout";

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent"
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
                            className="mb-2 rounded bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.55px] text-black"
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
                <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-[#20242e] pt-3 text-xs text-muted">

                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <FiClock size={14} />

                        <span>{workout.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <IoFlameOutline size={15} />

                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <FiStar size={14} />

                        <span>{workout.rating}</span>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;