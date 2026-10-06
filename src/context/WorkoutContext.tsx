"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

import { Workout } from "@/src/types/Workout";

interface WorkoutContextType {
    plan: Workout[];
    saved: Workout[];

    addToPlan: (workout: Workout) => boolean;
    addToSaved: (workout: Workout) => boolean;

    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;

    markAsDone: (id: number) => void;

    isInPlan: (id: number) => boolean;
    isSaved: (id: number) => boolean;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(
    undefined
);

interface WorkoutProviderProps {
    children: ReactNode;
}

export const WorkoutProvider = ({
    children,
}: WorkoutProviderProps) => {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    const [isLoaded, setIsLoaded] = useState(false);

    // Load saved data from localStorage
    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");

        if (storedPlan) {
            setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSaved(JSON.parse(storedSaved));
        }

        setIsLoaded(true);
    }, []);

    // Save plan to localStorage
    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        localStorage.setItem(
            "fitlog-plan",
            JSON.stringify(plan)
        );
    }, [plan, isLoaded]);

    // Save saved workouts to localStorage
    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        localStorage.setItem(
            "fitlog-saved",
            JSON.stringify(saved)
        );
    }, [saved, isLoaded]);

    // Add workout to today's plan
    const addToPlan = (workout: Workout) => {
        const alreadyAdded = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            return false;
        }

        if (plan.length >= 5) {
            return false;
        }

        setPlan([...plan, workout]);

        return true;
    };

    // Save workout
    const addToSaved = (workout: Workout) => {
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            return false;
        }

        setSaved([...saved, workout]);

        return true;
    };

    // Remove workout from plan
    const removeFromPlan = (id: number) => {
        setPlan(
            plan.filter((workout) => workout.id !== id)
        );
    };

    // Remove workout from saved
    const removeFromSaved = (id: number) => {
        setSaved(
            saved.filter((workout) => workout.id !== id)
        );
    };

    // Mark workout as done
    const markAsDone = (id: number) => {
        setPlan(
            plan.filter((workout) => workout.id !== id)
        );
    };

    // Check if workout is already in plan
    const isInPlan = (id: number) => {
        return plan.some(
            (workout) => workout.id === id
        );
    };

    // Check if workout is already saved
    const isSaved = (id: number) => {
        return saved.some(
            (workout) => workout.id === id
        );
    };

    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                addToSaved,
                removeFromPlan,
                removeFromSaved,
                markAsDone,
                isInPlan,
                isSaved,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkout = () => {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error(
            "useWorkout must be used inside WorkoutProvider"
        );
    }

    return context;
};