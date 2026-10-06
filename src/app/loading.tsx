const Loading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6">
      <span className="loading loading-spinner loading-lg text-accent"></span>

      <p className="text-sm font-medium text-muted">
        Loading workouts...
      </p>
    </div>
  );
};

export default Loading;