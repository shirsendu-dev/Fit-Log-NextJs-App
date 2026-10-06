"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import { FiBookmark, FiPlusSquare } from "react-icons/fi";

import { Workout } from "@/src/types/Workout";
import { useWorkout } from "@/src/context/WorkoutContext";

interface WorkoutActionsProps {
    workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
    const {
        plan,
        addToPlan,
        addToSaved,
        isInPlan,
        isSaved,
    } = useWorkout();

    const workoutInPlan = isInPlan(workout.id);
    const workoutIsSaved = isSaved(workout.id);

    const planIsFull = plan.length >= 5;

    const handleAddToPlan = () => {
        if (workoutInPlan) {
            toast.info("This workout is already in today's plan.");
            return;
        }

        if (planIsFull) {
            toast.error("Today's plan can only have 5 workouts.");
            return;
        }

        const added = addToPlan(workout);

        if (added) {
            toast.success("Added to today's plan.");
        }
    };

    const handleSaveWorkout = () => {
        if (workoutIsSaved) {
            toast.info("This workout is already saved.");
            return;
        }

        const saved = addToSaved(workout);

        if (saved) {
            toast.success("Workout saved for later.");
        }
    };

    return (
        <div className="mt-9 grid grid-cols-1 gap-3 md:grid-cols-3">

            {/* Add to Plan */}
            <button
                type="button"
                onClick={handleAddToPlan}
                disabled={workoutInPlan || planIsFull}
                className="btn h-11 min-h-11 w-full rounded-xl border-0 bg-accent px-3 text-[13px] font-semibold text-black hover:bg-accent hover:opacity-90 disabled:cursor-not-allowed disabled:bg-surface-alt disabled:text-muted disabled:opacity-60"
            >
                <FiPlusSquare size={17} />

                <span className="whitespace-nowrap">
                    {workoutInPlan
                        ? "Already in Plan"
                        : planIsFull
                            ? "Plan is Full"
                            : "Add to today's plan"}
                </span>
            </button>

            {/* Save */}
            <button
                type="button"
                onClick={handleSaveWorkout}
                disabled={workoutIsSaved}
                className="btn h-11 min-h-11 w-full rounded-xl border border-border bg-transparent px-3 text-[13px] font-medium text-white hover:border-accent hover:bg-transparent hover:text-accent disabled:cursor-not-allowed disabled:border-border disabled:text-muted disabled:opacity-60"
            >
                <FiBookmark size={17} />

                <span className="whitespace-nowrap">
                    {workoutIsSaved ? "Saved" : "Save for later"}
                </span>
            </button>

            {/* Back to Library */}
            <Link
                href="/#library"
                className="inline-flex h-11 w-full items-center justify-center px-3 text-[13px] font-normal text-white transition-colors hover:text-accent"
            >
                <span className="whitespace-nowrap">
                    ← Back to Workout Library
                </span>
            </Link>

        </div>
    );
};

export default WorkoutActions;