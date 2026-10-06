"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar, FiX } from "react-icons/fi";
import { IoFlameOutline } from "react-icons/io5";

import { Workout } from "@/src/types/Workout";

interface PlanCardProps {
    workout: Workout;
    type: "plan" | "saved";
    onRemove: (id: number) => void;
    onDone?: (id: number) => void;
}

const PlanCard = ({
    workout,
    type,
    onRemove,
    onDone,
}: PlanCardProps) => {
    return (
        <div className="card overflow-hidden border border-border bg-surface transition-colors hover:border-[#353b48]">
            <div className="flex flex-col sm:flex-row">

                {/* Image */}
                <div className="relative h-52 w-full shrink-0 sm:h-auto sm:w-[180px]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 180px"
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:flex-row sm:items-center">

                    <div>
                        {/* Tags */}
                        <div className="mb-2 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="badge border-0 bg-accent px-2 text-[10px] font-bold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl font-bold uppercase text-white">
                            {workout.name}
                        </h3>

                        {/* Equipment */}
                        <p className="mt-1 text-sm text-muted">
                            {workout.equipment}
                        </p>

                        {/* Stats */}
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted">
                            <div className="flex items-center gap-1.5">
                                <FiClock size={14} />
                                <span>{workout.duration} min</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <IoFlameOutline size={15} />
                                <span>{workout.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <FiStar size={14} />
                                <span>{workout.rating}</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">

                        <Link
                            href={`/workout/${workout.id}`}
                            className="btn h-10 min-h-10 border-border bg-transparent px-4 text-xs font-medium text-white hover:border-accent hover:bg-transparent hover:text-accent"
                        >
                            View Details
                        </Link>

                        {type === "plan" && onDone && (
                            <button
                                type="button"
                                onClick={() => onDone(workout.id)}
                                className="btn h-10 min-h-10 border-0 bg-accent px-4 text-xs font-semibold text-black hover:bg-accent hover:opacity-90"
                            >
                                Mark as Done
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={() => onRemove(workout.id)}
                            className="btn btn-square h-10 min-h-10 w-10 border-border bg-transparent text-muted hover:border-red-400 hover:bg-transparent hover:text-red-400"
                            aria-label="Remove workout"
                        >
                            <FiX size={18} />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;