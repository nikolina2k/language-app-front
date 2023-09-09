import React from 'react';

function ProgressBar({ maxValue, currentValue }) {
  // Calculate the progress percentage
  const progressPercentage = (currentValue / maxValue) * 100;

  return (
    <div className="relative h-10" style={{width: '500px'}}>
      {/* Base Line */}
      <div className="absolute w-full h-2 bg-gray-400 rounded-full top-4"></div>

      {/* Progress Line */}
      <div
        className="absolute h-2 bg-white rounded-full top-4"
        style={{ width: `${progressPercentage}%` }}
      ></div>

      {/* Start Circle */}
      <div className="absolute w-4 h-4 bg-white rounded-full left-0 top-3"></div>

      {/* End Circle */}
      <div className="absolute w-4 h-4 bg-white rounded-full right-0 top-3"></div>
    </div>
  );
}

export default ProgressBar;
