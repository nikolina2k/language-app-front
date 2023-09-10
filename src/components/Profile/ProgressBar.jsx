function ProgressBar({ maxValue, currentValue, barHeight }) {
  // Calculate the progress percentage
  const progressPercentage = (currentValue / maxValue) * 100;

  return (
    <div
      className={`relative h-6 ${barHeight || "h-2"}`}
      style={{ width: "500px" }}
    >
      {/* Base Line */}
      <div className="absolute w-full h-2 bg-gray-300 rounded-full top-2"></div>

      {/* Progress Line */}
      <div
        className="absolute h-2 bg-black rounded-full top-2"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
