"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

import { useWorkout } from "@/src/context/WorkoutContext";
import PlanCard from "./PlanCard";
import { Workout } from "@/src/types/Workout";

type TabType = "plan" | "saved";

type SortType = "duration" | "calories" | "rating";

const MyPlanContent = () => {
    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = useWorkout();

    const [activeTab, setActiveTab] = useState<TabType>("plan");
    const [sortBy, setSortBy] = useState<SortType>("duration");

    // Today's Plan metrics
    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    // Mark workout as done
    const handleDone = (id: number) => {
        markAsDone(id);

        toast.success("Workout marked as done");
    };

    // Remove from today's plan
    const handleRemoveFromPlan = (id: number) => {
        removeFromPlan(id);

        toast.success("Workout removed from plan");
    };

    // Remove from saved
    const handleRemoveFromSaved = (id: number) => {
        removeFromSaved(id);

        toast.success("Workout removed from saved");
    };

    // Current tab workouts
    const currentWorkouts: Workout[] =
        activeTab === "plan" ? plan : saved;

    // Sort workouts
    const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
        if (sortBy === "duration") {
            return b.duration - a.duration;
        }

        if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }

        return b.rating - a.rating;
    });

    return (
        <section className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:py-12">

            {/* Page Heading */}
            <div>
                <h1 className="font-display text-[32px] font-bold uppercase leading-tight text-white sm:text-[36px]">
                    MY PLAN
                </h1>

                <p className="mt-2 text-sm text-muted sm:text-base">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Metrics */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="grid grid-cols-1 sm:grid-cols-3">

                    {/* Exercises */}
                    <div className="px-6 py-7 sm:px-6 lg:px-8">
                        <p className="text-sm text-muted">
                            Exercises
                        </p>

                        <p className="mt-2 font-display text-[40px] font-bold leading-none text-accent">
                            {plan.length}
                        </p>
                    </div>

                    {/* Minutes */}
                    <div className="border-t border-border px-6 py-7 sm:border-l sm:border-t-0 sm:px-6 lg:px-8">
                        <p className="text-sm text-muted">
                            Minutes
                        </p>

                        <p className="mt-2 font-display text-[40px] font-bold leading-none text-white">
                            {totalMinutes}
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="border-t border-border px-6 py-7 sm:border-l sm:border-t-0 sm:px-6 lg:px-8">
                        <p className="text-sm text-muted">
                            Calories
                        </p>

                        <p className="mt-2 font-display text-[40px] font-bold leading-none text-white">
                            {totalCalories}
                        </p>
                    </div>

                </div>
            </div>

            {/* Tabs + Sort */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Tabs */}
                <div className="tabs tabs-box w-full bg-surface p-1 sm:w-auto">

                    <button
                        type="button"
                        onClick={() => setActiveTab("plan")}
                        className={`tab flex-1 rounded-lg px-5 text-sm transition-colors sm:flex-none ${activeTab === "plan"
                            ? "bg-surface-alt font-semibold text-accent"
                            : "text-muted hover:text-acent"
                            }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("saved")}
                        className={`tab flex-1 rounded-lg px-7 text-sm transition-colors sm:flex-none ${activeTab === "saved"
                            ? "bg-surface-alt font-semibold text-accent"
                            : "text-muted hover:text-white"
                            }`}
                    >
                        Saved
                    </button>

                </div>

                {/* Sort */}
                <div className="flex items-center justify-between gap-3 sm:justify-end">

                    <span className="whitespace-nowrap text-sm text-muted">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value as SortType)
                        }
                        className="select h-11 min-h-11 w-[130px] rounded-xl border border-border bg-surface text-sm text-white outline-none focus:border-accent"
                    >
                        <option value="duration">
                            Duration
                        </option>

                        <option value="calories">
                            Calories
                        </option>

                        <option value="rating">
                            Rating
                        </option>
                    </select>

                </div>
            </div>

            {/* Workout Content */}
            <div className="mt-6">

                {sortedWorkouts.length > 0 ? (
                    <div className="space-y-4">
                        {sortedWorkouts.map((workout) => (
                            <PlanCard
                                key={workout.id}
                                workout={workout}
                                type={activeTab}
                                onDone={
                                    activeTab === "plan"
                                        ? handleDone
                                        : undefined
                                }
                                onRemove={
                                    activeTab === "plan"
                                        ? handleRemoveFromPlan
                                        : handleRemoveFromSaved
                                }
                            />
                        ))}
                    </div>
                ) : (

                    /* Empty State */
                    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-border bg-surface px-5 py-12 text-center sm:min-h-[300px]">

                        <h2 className="font-display text-[22px] font-bold uppercase text-white sm:text-[24px]">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-muted">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/#library"
                            className="btn mt-6 h-10 min-h-10 rounded-full border-0 bg-accent px-7 text-sm font-semibold text-black hover:bg-accent hover:opacity-90"
                        >
                            Go to workouts
                        </Link>

                    </div>
                )}

            </div>

        </section>
    );
};

export default MyPlanContent;