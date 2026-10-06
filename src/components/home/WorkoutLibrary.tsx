import WorkoutCard from "./WorkoutCard";
import { getWorkouts } from "@/src/lib/workouts";

const WorkoutLibrary = async () => {
    const workouts = await getWorkouts();

    return (
        <section id="library"
            className="mx-auto mt-12 max-w-[1280px] px-6"
        >
            {/* Section Heading */}
            <div>
                <h2 className="font-display text-[30px] text-center font-bold uppercase leading-[1.2] tracking-[-0.75px] text-white lg:text-left">
                    The Library
                </h2>

                <p className="mt-1 text-[14px] text-center leading-5 text-muted lg:text-left lg:text-[16px]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workout Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </section>
    );
};

export default WorkoutLibrary;