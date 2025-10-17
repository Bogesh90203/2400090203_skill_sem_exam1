import React, { useState } from 'react';

// Main application component
const App = () => {
  // Initialize the counter state using the useState hook
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Function to reset the counter
  const reset = () => {
    setCount(0);
  };

  // Common button styling classes
  const baseButtonClasses = "px-6 py-3 font-semibold text-white transition duration-200 ease-in-out rounded-xl shadow-lg hover:shadow-xl active:translate-y-0.5 transform disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Simple Counter
        </h1>

        {/* Current Counter Value Display */}
        <div className={`text-center mb-10 py-8 rounded-2xl transition-all duration-300
          ${count === 0 ? 'bg-indigo-100 text-indigo-700 shadow-inner' :
            count > 0 ? 'bg-green-100 text-green-700 shadow-md' :
            'bg-red-100 text-red-700 shadow-md'
          }`}
        >
          <span className="text-7xl sm:text-8xl font-black tabular-nums">
            {count}
          </span>
        </div>

        {/* Control Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          
          {/* Decrement Button */}
          <button
            onClick={decrement}
            className={${baseButtonClasses} bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300}
            aria-label="Decrement counter"
          >
            ➖ Decrement
          </button>

          {/* Reset Button (Disabled when count is 0) */}
          <button
            onClick={reset}
            disabled={count === 0}
            className={${baseButtonClasses} bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 sm:order-first}
            aria-label="Reset counter to zero"
          >
            🔄 Reset
          </button>

          {/* Increment Button */}
          <button
            onClick={increment}
            className={${baseButtonClasses} bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300}
            aria-label="Increment counter"
          >
            ➕ Increment
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default App;